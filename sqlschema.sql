CREATE DATABASE  IF NOT EXISTS `amusmentpark` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `amusmentpark`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: amusmentpark
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cancel_invoice`
--

DROP TABLE IF EXISTS `cancel_invoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cancel_invoice` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `invoice_id` int NOT NULL,
  `order_id` varchar(50) NOT NULL,
  `booked_date` date NOT NULL,
  `cancel_date` datetime NOT NULL,
  `qr_code` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2018 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cancel_invoice`
--

LOCK TABLES `cancel_invoice` WRITE;
/*!40000 ALTER TABLE `cancel_invoice` DISABLE KEYS */;
INSERT INTO `cancel_invoice` VALUES (2000,8,2014,'ORD-2023/06/21-8','2023-06-21','2023-06-08 04:21:13','{\"paymentType\":\"Venmo\",\"cardNumber\":\"4896024930202303\",\"expiryDate\":\"09/30\",\"cvv\":\"235\",\"name\":\"Susan Patton\"}'),(2001,8,2013,'ORD-2023/06/14-8','2023-06-14','2023-06-08 04:23:20','{\"paymentType\":\"Venmo\",\"cardNumber\":\"4896024930202303\",\"expiryDate\":\"09/30\",\"cvv\":\"235\",\"name\":\"Susan Patton\"}'),(2002,8,2011,'ORD-2023/06/09-8','2023-06-09','2023-06-08 04:24:17','{\"paymentType\":\"Credit Card\",\"cardNumber\":\"4896024930202303\",\"expiryDate\":\"09/30\",\"cvv\":\"235\",\"name\":\"Susan Patton\"}'),(2003,8,2010,'ORD-2023/06/09-8','2023-06-09','2023-06-08 04:24:21','{\"paymentType\":\"Venmo\",\"cardNumber\":\"4896024930202303\",\"expiryDate\":\"09/30\",\"cvv\":\"235\",\"name\":\"Susan Patton\"}'),(2004,8,2009,'ORD-2023/06/08-8','2023-06-08','2023-06-08 04:24:28','{\"paymentType\":\"Venmo\",\"cardNumber\":\"4896024930202303\",\"expiryDate\":\"09/30\",\"cvv\":\"235\",\"name\":\"Susan Patton\"}'),(2005,8,2012,'ORD-2023/06/09-8','2023-06-09','2023-06-08 04:24:37','{\"paymentType\":\"Credit Card\",\"cardNumber\":\"4896024930202303\",\"expiryDate\":\"09/30\",\"cvv\":\"235\",\"name\":\"Susan Patton\"}'),(2006,6,2000,'ORD-001','2023-05-31','2023-06-08 06:12:22','QR-001'),(2007,6,2001,'1001','2023-05-30','2023-06-08 06:12:22','QR-002'),(2008,6,2002,'1002','2023-05-29','2023-06-08 06:12:22','QR-003'),(2009,6,2003,'ORD-002','2023-05-31','2023-06-08 06:12:22','{\"paymentType\":\"Venmo\",\"cardNumber\":\"4896024930202303\",\"expiryDate\":\"09/30\",\"cvv\":\"235\",\"name\":\"Susan Patton\"}'),(2010,6,2005,'ORD-2023-06-05-6','2023-06-05','2023-06-08 06:12:22','{\"paymentType\":\"Venmo\",\"cardNumber\":\"4896024930202303\",\"expiryDate\":\"09/30\",\"cvv\":\"235\",\"name\":\"Susan Patton\"}'),(2011,6,2006,'ORD-2023-06-10-6','2023-06-10','2023-06-08 06:12:22','{\"paymentType\":\"Venmo\",\"cardNumber\":\"4896024930202303\",\"expiryDate\":\"09/30\",\"cvv\":\"235\",\"name\":\"Susan Patton\"}'),(2012,8,2000,'ORD-2023/06/09-8','2023-06-09','2023-06-08 06:16:32','{\"paymentType\":\"Venmo\",\"cardNumber\":\"4896024930202303\",\"expiryDate\":\"09/30\",\"cvv\":\"235\",\"name\":\"Susan Patton\"}'),(2013,8,2001,'ORD-2023/06/10-8','2023-06-10','2023-06-08 06:16:37','{\"paymentType\":\"Venmo\",\"cardNumber\":\"4896024930202303\",\"expiryDate\":\"09/30\",\"cvv\":\"235\",\"name\":\"Susan Patton\"}'),(2014,8,2002,'ORD-2023/06/22-8','2023-06-22','2023-06-08 06:20:41','{\"paymentType\":\"Venmo\",\"cardNumber\":\"4896024930202303\",\"expiryDate\":\"09/30\",\"cvv\":\"235\",\"name\":\"Susan Patton\"}'),(2015,8,2003,'ORD-2023/06/22-8','2023-06-22','2023-06-08 06:27:17','{\"paymentType\":\"Credit Card\",\"cardNumber\":\"4896024930202303\",\"expiryDate\":\"09/30\",\"cvv\":\"235\",\"name\":\"Susan Patton\"}'),(2016,8,2006,'ORD-2023/06/09-8','2023-06-09','2023-06-08 22:29:38','{\"paymentType\":\"Credit Card\",\"cardNumber\":\"4896024930202303\",\"expiryDate\":\"09/30\",\"cvv\":\"235\",\"name\":\"Susan Patton\"}'),(2017,8,2011,'ORD-2023/06/16-8','2023-06-16','2023-06-12 03:19:46','{\"paymentType\":\"Credit Card\",\"cardNumber\":\"4896024930202303\",\"expiryDate\":\"09/30\",\"cvv\":\"235\",\"name\":\"Susan Patton\"}');
/*!40000 ALTER TABLE `cancel_invoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `EventID` int NOT NULL AUTO_INCREMENT,
  `EventName` varchar(255) DEFAULT NULL,
  `EventPrice` decimal(10,2) DEFAULT NULL,
  `EventImg` varchar(255) DEFAULT NULL,
  `EventDescription` text,
  PRIMARY KEY (`EventID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,'Roller Coaster Ride',15.99,'roller_coaster.jpg','Experience the thrill of our newest roller coaster!'),(2,'Water Splash Show',12.50,'water_splash_show.jpg','Get ready to cool off with our exciting water splash show!'),(3,'Circus Spectacular',20.00,'circus_spectacular.jpg','Enjoy a mesmerizing circus performance with acrobats, clowns, and more!'),(4,'Haunted Mansion Tour',10.99,'haunted_mansion.jpg','Embark on a spooky journey through our haunted mansion.'),(5,'Magic Show Extravaganza',18.75,'magic_show.jpg','Witness mind-bending illusions and magic tricks!'),(6,'Pirate Adventure',14.50,'pirate_adventure.jpg','Join the crew for an exciting pirate-themed adventure on the high seas!'),(7,'Carousel Ride',8.99,'carousel.jpg','Take a delightful spin on our beautifully crafted carousel.'),(8,'Animal Safari Tour',22.50,'animal_safari.jpg','Explore the wonders of the animal kingdom on an adventurous safari tour!'),(9,'Ferris Wheel',10.00,'ferris_wheel.jpg','Enjoy breathtaking views from the top of our iconic ferris wheel.'),(10,'Live Concert: The Band',25.00,'live_concert.jpg','Experience an unforgettable live concert by the popular band.');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `invoice_view`
--

DROP TABLE IF EXISTS `invoice_view`;
/*!50001 DROP VIEW IF EXISTS `invoice_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `invoice_view` AS SELECT 
 1 AS `id`,
 1 AS `uid`,
 1 AS `status`,
 1 AS `QR`,
 1 AS `payMethod`,
 1 AS `amount`,
 1 AS `date`,
 1 AS `type`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `invoices`
--

DROP TABLE IF EXISTS `invoices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoices` (
  `invoice_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `order_id` varchar(50) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '0',
  `qrcode` varchar(500) DEFAULT NULL,
  `payment_method` varchar(50) DEFAULT NULL,
  `type` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`invoice_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `invoices_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2013 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoices`
--

LOCK TABLES `invoices` WRITE;
/*!40000 ALTER TABLE `invoices` DISABLE KEYS */;
INSERT INTO `invoices` VALUES (2004,NULL,'ORD-2023/06/27-undefined','2023-06-27',39.48,0,'{\"paymentType\":\"Credit Card\",\"cardNumber\":\"4896024930202303\",\"expiryDate\":\"09/30\",\"cvv\":\"235\",\"name\":\"Susan Patton\"}','Card','adult'),(2005,9,'ORD-2023/06/09-9','2023-06-09',28.49,0,'{\"paymentType\":\"Credit Card\",\"cardNumber\":\"4896024930202303\",\"expiryDate\":\"09/30\",\"cvv\":\"235\",\"name\":\"Susan Patton\"}','Card','adult'),(2007,8,'ORD-2023/06/09-8','2023-06-09',28.49,1,'{\"paymentType\":\"Venmo\",\"cardNumber\":\"4896024930202303\",\"expiryDate\":\"09/30\",\"cvv\":\"235\",\"name\":\"Susan Patton\"}','Card','adult'),(2008,8,'ORD-2023/06/15-8','2023-06-15',32.50,1,'{\"paymentType\":\"Credit Card\",\"cardNumber\":\"4896024930202303\",\"expiryDate\":\"09/30\",\"cvv\":\"235\",\"name\":\"Susan Patton\"}','Card','adult'),(2009,8,'ORD-2023/06/12-8','2023-06-12',43.49,1,'{\"paymentType\":\"Venmo\",\"cardNumber\":\"4896024930202303\",\"expiryDate\":\"09/30\",\"cvv\":\"235\",\"name\":\"Susan Patton\"}','Card','adult'),(2010,8,'ORD-2023/06/16-8','2023-06-16',14.50,0,'{\"paymentType\":\"Credit Card\",\"cardNumber\":\"4896024930202303\",\"expiryDate\":\"09/30\",\"cvv\":\"235\",\"name\":\"Susan Patton\"}','Card','adult'),(2012,8,'ORD-2023/06/14-8','2023-06-14',59.48,0,'{\"paymentType\":\"Credit Card\",\"cardNumber\":\"4896024930202303\",\"expiryDate\":\"09/30\",\"cvv\":\"235\",\"name\":\"Susan Patton\"}','Card','adult');
/*!40000 ALTER TABLE `invoices` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `after_delete_invoice` AFTER DELETE ON `invoices` FOR EACH ROW BEGIN
    INSERT INTO cancel_invoice (invoice_id, user_id, order_id, booked_date, cancel_date, qr_code)
    VALUES (OLD.invoice_id, OLD.user_id, OLD.order_id, OLD.date, NOW(), OLD.qrcode);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `news_group`
--

DROP TABLE IF EXISTS `news_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `date` date NOT NULL,
  `news` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `news_group_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news_group`
--

LOCK TABLES `news_group` WRITE;
/*!40000 ALTER TABLE `news_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `news_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `order_number` varchar(30) DEFAULT NULL,
  `event_id` int DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `active` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`order_id`),
  KEY `user_id` (`user_id`),
  KEY `event_id` (`event_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`event_id`) REFERENCES `events` (`EventID`)
) ENGINE=InnoDB AUTO_INCREMENT=1103 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1068,8,'ORD-2023/06/09-8',2,12.50,'2023-06-09',0),(1069,8,'ORD-2023/06/10-8',2,12.50,'2023-06-10',0),(1070,8,'ORD-2023/06/10-8',1,15.99,'2023-06-10',0),(1071,8,'ORD-2023/06/10-8',3,20.00,'2023-06-10',0),(1072,8,'ORD-2023/06/10-8',1,15.99,'2023-06-10',0),(1073,8,'ORD-2023/06/10-8',2,12.50,'2023-06-10',0),(1074,8,'ORD-2023/06/10-8',3,20.00,'2023-06-10',0),(1075,8,'ORD-2023/06/22-8',1,15.99,'2023-06-22',0),(1076,8,'ORD-2023/06/22-8',2,12.50,'2023-06-22',0),(1077,8,'ORD-2023/06/22-8',2,12.50,'2023-06-22',0),(1078,8,'ORD-2023/06/22-8',1,15.99,'2023-06-22',0),(1079,NULL,'ORD-2023/06/27-undefined',1,15.99,'2023-06-27',0),(1080,NULL,'ORD-2023/06/27-undefined',2,12.50,'2023-06-27',0),(1081,NULL,'ORD-2023/06/27-undefined',4,10.99,'2023-06-27',0),(1082,9,'ORD-2023/06/09-9',1,15.99,'2023-06-09',0),(1083,9,'ORD-2023/06/09-9',2,12.50,'2023-06-09',0),(1084,8,'ORD-2023/06/09-8',6,14.50,'2023-06-09',0),(1085,8,'ORD-2023/06/09-8',5,18.75,'2023-06-09',0),(1086,8,'ORD-2023/06/09-8',4,10.99,'2023-06-09',0),(1087,8,'ORD-2023/06/09-8',1,15.99,'2023-06-09',0),(1088,8,'ORD-2023/06/09-8',2,12.50,'2023-06-09',0),(1089,8,'ORD-2023/06/15-8',3,20.00,'2023-06-15',0),(1090,8,'ORD-2023/06/15-8',2,12.50,'2023-06-15',0),(1091,8,'ORD-2023/06/12-8',2,12.50,'2023-06-12',0),(1092,8,'ORD-2023/06/12-8',4,10.99,'2023-06-12',0),(1093,8,'ORD-2023/06/12-8',3,20.00,'2023-06-12',0),(1094,8,'ORD-2023/06/16-8',6,14.50,'2023-06-16',0),(1095,8,'ORD-2023/06/16-8',1,15.99,'2023-06-16',0),(1096,8,'ORD-2023/06/16-8',2,12.50,'2023-06-16',0),(1097,8,'ORD-2023/06/16-8',4,10.99,'2023-06-16',0),(1098,8,'ORD-2023/06/16-8',7,8.99,'2023-06-16',0),(1099,8,'ORD-2023/06/14-8',2,12.50,'2023-06-14',0),(1100,8,'ORD-2023/06/14-8',1,15.99,'2023-06-14',0),(1101,8,'ORD-2023/06/14-8',3,20.00,'2023-06-14',0),(1102,8,'ORD-2023/06/14-8',4,10.99,'2023-06-14',0);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `isLoggin` tinyint NOT NULL DEFAULT '0',
  `dateSignedup` date DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `phone_number_UNIQUE` (`phone_number`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'johnsmith','johnsmith@example.com','password123','1234567890',1,'2023-05-01',''),(2,'jdoe','jdoe@example.com','qwerty456','9876543210',1,'2023-05-02',''),(3,'maryjane','maryjane@example.com','p@ssw0rd','5555555555',0,'2023-05-03',''),(4,'bobbyj','bobbyj@example.com','securepass','1112223333',1,'2023-05-04',''),(5,'jessica','jessica@example.com','jessiepass','4443332222',1,'2023-05-05',''),(6,'Bash John','bashjohncsdcs2k@outlook.com','00000','1985517832',0,'2023-05-05',''),(8,'Bash John','bashjohn2k@outlook.com','$2b$10$qN0dIymcAA.BxPhOvsn8TO7i7Ds17r5sjR9vveRrhvzz0vLdGoAE.','910389292',0,NULL,'janojanolsc'),(9,'Mike Jack','badboy2k@outlook.com','$2b$10$8CaOue/VM3g53AM11Hj38edW7cmPoRWFtb3qnmcLJ1c9zMn.xWwIW',NULL,0,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'amusmentpark'
--

--
-- Final view structure for view `invoice_view`
--

/*!50001 DROP VIEW IF EXISTS `invoice_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `invoice_view` AS select `invoices`.`invoice_id` AS `id`,`invoices`.`user_id` AS `uid`,`invoices`.`status` AS `status`,`invoices`.`qrcode` AS `QR`,`invoices`.`payment_method` AS `payMethod`,`invoices`.`total` AS `amount`,date_format(`invoices`.`date`,'%Y-%m-%d') AS `date`,`invoices`.`type` AS `type` from `invoices` order by date_format(`invoices`.`date`,'%Y-%m-%d') desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-13 15:07:06
