import React from "react";

const Contact =()=>{
    return(
        <div  className="contact-container">
                    <h1 className="title">Contact Us</h1>
        <form >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value=''
            onChange=""
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value=""
            onChange=""
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value=""
            onChange=""
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      
            
        </div>
    )
}

export default Contact;