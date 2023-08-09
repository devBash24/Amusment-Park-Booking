import express from "express";
import cors from "cors";
import mysql from "mysql";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import session from "express-session";
import moment from "moment";

import bcrypt from "bcrypt";

const salt_rounds = 10;

import crypto from "crypto";
let uid2 = ''
const convertDate = (dateString) => {
  const date = moment(dateString, "ddd MMM DD YYYY HH:mm:ss [GMT] ZZ (zz)");
  const formattedDate = date.format("YYYY/MM/DD");

  return formattedDate;
};

const createOrderID = (date) => {
  let orderID = "ORD-" + date;
  return orderID;
};

const secret = crypto.randomBytes(64).toString("hex");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 60 * 24 * 100,
      sameSite: "None",
    },
  })
);

//My sql login info
const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "amusmentpark",
});

function fetchDataFromDatabase(sql, data) {
  return new Promise((resolve, reject) => {
    // Get a connection from the pool
    connection.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }
      // Execute the query
      connection.query(sql, data, (err, results) => {
        // Release the connection back to the pool
        connection.release();
        if (err) {
          reject(err);
          return;
        }
        resolve(results);
      });
    });
  });
}

app.post("/api/login", async (req, res) => {
  const [email, password] = req.body;
  const data = [email, password];
  const sql = "SELECT * FROM users WHERE email=?";
  try {
    const result = await fetchDataFromDatabase(sql, data);
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (err, response) => {
        if (response) {
          if (result[0].isLoggin) {
            return res.send({ message: "You are logged in" });
          }
          req.session.username = result[0].username;
          req.session.uid = result[0].user_id;
          return res
            .status(200)
            .send({ success: true, message: "Login successful" });
        } else {
          console.log("Wrong username/password combination!");
          return res.send({ message: "Wrong username/password combination!" });
        }
      });
    }
  } catch (error) {
    res.send({ error: error });
  }
});

app.get("/api/login", (req, res) => {

  if (req.session.username) {
    res.status(200).json({
      status: true,
      username: req.session.username,
      uid: req.session.uid,
    });
  } else {
    res.send({
      status: false,
    });
  }
});

app.post("/api/register", async (req, res) => {
  const [name, email, password] = req.body;
  bcrypt.hash(password, salt_rounds, async (err, hash) => {
    const data = [name, email, hash];
    if (err) {
      return res.send({ error: err });
    }
    const sql = "INSERT INTO users(username,email, password) VALUES(?,?,?);";
    try {
      const result = await fetchDataFromDatabase(sql, data);
      if (result.affectedRows) {
        return res.status(200).json({
          success: true,
          message: "Sign up successfully",
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      return res.status(500).json({ error: error });
    }
  });
});

app.get("/api/dates", async (req, res) => {
  try {
    const data = [];
    const sql =
      "SELECT DATE_FORMAT(date, '%Y-%m-%d') AS date, COUNT(*) AS count FROM invoices WHERE date > CURDATE() GROUP BY date;";
    const result = await fetchDataFromDatabase(sql, data);
    if (result) {
      res.status(200).json({
        success: true,
        result: result,
      });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return res.status(500).json({ error: error });
  }
});


app.get("/api/products", async (req, res) => {
  const sql = "SELECT * FROM events";
  try {
    const result = await fetchDataFromDatabase(sql, null);
    res.status(200).json({
      status: true,
      result: result,
    });
  } catch (err) {
    console.error(err);
    res.json({
      status: false,
      error: err,
    });
  }
});


app.get("/api/invoices", (req, res) => {
  const sql =
    "SELECT * FROM invoice_view WHERE uid = ? ORDER BY date DESC LIMIT 5;";
  const uid = req.session.uid;
  try {
    connection.query(sql, [uid], (err, result) => {
      if (err) {
        console.error("Error");
        res.json({
          status: false,
          error: err,
        });
      } else {
        res.status(200).json({
          status: true,
          result: result,
        });
      }
    });
  } catch (err) {
    console.error(err);
  }
});

app.get("/api/purchase-history", async (req, res) => {
  const sql = "SELECT * FROM invoice_view WHERE uid = ? ORDER BY date DESC;";
  const uid = req.session.uid;
  try {
    const result = await fetchDataFromDatabase(sql, [uid]);
    res.status(200).json({
      status: true,
      result: result,
    });
  } catch (err) {
    console.error(err);
    res.json({
      status: false,
      error: err,
    });
  }
});


app.get("/api/event-options", (req, res) => {
  const sql = "select EventID,EventName,EventPrice from events;";

  try {
    connection.query(sql, (err, result) => {
      if (err) {
        console.error("Error");
        res.json({
          status: false,
          error: err,
        });
      } else {
        res.status(200).json({
          status: true,
          result: result,
        });
      }
    });
  } catch (err) {
    console.error(err);
  }
});

const addOrders = (cart, date, uid) => {
  const sql =
    "INSERT INTO orders(user_id, order_number, event_id, price, date) VALUES (?, ?, ?, ?, ?);";
  let orderID = createOrderID(date);
  orderID = orderID + "-" + uid;
  const promises = cart.map((item) => {
    return new Promise((resolve, reject) => {
      connection.query(
        sql,
        [uid, orderID, item.EventID, item.EventPrice, date],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  });
  return Promise.all(promises).then(() => orderID);
};


app.post("/api/paymentData", async (req, res) => {
  const { cart, date, qrCode, qrImg, totalCost, type } = req.body;
  const uid = req.session.uid;
  const newDate = convertDate(date);
  const sql =
    "INSERT INTO invoices(user_id, order_id, date, total, status, qrcode, payment_method, type) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  try {
    let userData = await addOrders(cart, newDate, uid);
    await fetchDataFromDatabase(sql, [req.session.uid, userData, newDate, totalCost, 0, qrCode, "Card", type]);
    res.json({ status: true, message: "success" });
  } catch (err) {
    console.error(err);
    res.send(err);
  }
});


app.get("/api/refund", async (req, res) => {
  try {
    const sql =
      "SELECT * FROM invoices WHERE user_id = '?' AND status = 0 AND date >= DATE_SUB(NOW(), INTERVAL 24 HOUR);";
    const uid = req.session.uid;
    const data = uid;
    const result = await fetchDataFromDatabase(sql, data);
    res.json({ result: result });
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

app.post("/api/refund", async (req, res) => {
  if (!req.session) {
    res.end();
  }
  const uid = req.session.uid;
  let data = req.body;
  data.unshift(uid);
  const sql = "Delete from invoices where user_id=? AND invoice_id=?;";
  try {
    const result = await fetchDataFromDatabase(sql, data);
    if (result) {
      res.send({ success: true, message: "Refund successfully" });
    }
  } catch (error) {
    res.send({ error: error });
  }
});

app.post("/api/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.status(400).send("Unable to log out");
      } else {
        console.log("Logged out");
        res.clearCookie("connect.sid");
        res.send({ success: true });
      }
    });
  } else {
    res.end();
  }
});

const ret = (value)=>{
  if(value !== ''){
    return value;
  }
}

app.post("/api/update",async (req, res) => {
  const [email,phone,address,password] = req.body;
  let data = [email,password,phone,address] ;
  let newData = [];
  let result = [];
  const uid = req.session.uid;
  console.log(uid);
  const sql=
    `UPDATE users SET ${email !== "" ? "email=?" : ""} ,${
      password !== "" ? "password=?" : ""
    } ${phone !== "" ? "phone_number=?" : ""}, ${
      address !== "" ? "address=?" : ""
    } WHERE user_id=?; `;

    try {
      if(password !== ''){
        bcrypt.hash(password, salt_rounds, async (err, hash)=>{
          if(err) return res.send(err);
          data = [email,hash,phone,address] ;
          newData = data.filter((str) => str !== '');
          newData.push(uid2);
          result = await fetchDataFromDatabase(sql, newData);
        });
      }else{
        data = [email,password,phone,address] ;
        newData = data.filter((str) => str !== '');
        newData.push(uid2);
        result = await fetchDataFromDatabase(sql, newData);
      }
      console.log(result);
      if (result) {
        res.send({ success: true, message: "Data Updated Change" });
      }else {
        console.log("something is wrong with");
      }
    } catch (error) {
      console.log(error);
      res.send({ error: error });
    }
  res.send({ success: false });
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
