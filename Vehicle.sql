-- MySQL dump 10.13  Distrib 8.0.21, for Linux (x86_64)
--
-- Host: localhost    Database: vehicleDb
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_uuid` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `latitude` decimal(11,8) DEFAULT NULL,
  `longitude` decimal(11,8) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`user_uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('18210c1a-b2ce-44fd-8e68-4ebc443e8df9','Alpesh','Sankhesara','jsankhesara@gmail.com','9409545798',23.29000000,32.02545644,'2020-10-11 10:28:34','2020-10-11 10:28:34'),('275c0718-f1ed-4705-96d5-6a465391b422','Jainam','Sankhesara','jsankhesara@gmail.com','9409545798',23.29000000,32.02545644,'2020-10-11 10:28:25','2020-10-11 10:28:25'),('7e00fb58-15b5-4d57-8d79-e3381230ad40','Jay','Sankhesara','jsankhesara@gmail.com','9409545798',23.29000000,32.02545644,'2020-10-11 10:28:21','2020-10-11 10:28:21'),('9cb1df0e-3248-4176-a560-d1ddd25fe6b6','Rina','Sankhesara','jsankhesara@gmail.com','9409545798',23.29000000,32.02545644,'2020-10-11 10:28:40','2020-10-11 10:28:40'),('cc396135-9445-4868-bceb-ade742a484e6','Teerth','Sankhesara','jsankhesara@gmail.com','9409545798',23.29000000,32.02545644,'2020-10-11 10:28:30','2020-10-11 10:28:30');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicleOwnerships`
--

DROP TABLE IF EXISTS `vehicleOwnerships`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicleOwnerships` (
  `vehicle_Ownership_uuid` varchar(255) NOT NULL,
  `user_uuid` varchar(255) DEFAULT NULL,
  `vehicle_uuid` varchar(255) DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`vehicle_Ownership_uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicleOwnerships`
--

LOCK TABLES `vehicleOwnerships` WRITE;
/*!40000 ALTER TABLE `vehicleOwnerships` DISABLE KEYS */;
INSERT INTO `vehicleOwnerships` VALUES ('86b377bd-1e13-488b-bc98-2b5830284769','9cb1df0e-3248-4176-a560-d1ddd25fe6b6','06bf773a-66c7-4956-84c4-fc7f63b09b5d',0,'2020-10-11 10:36:18','2020-10-11 10:36:18');
/*!40000 ALTER TABLE `vehicleOwnerships` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicles`
--

DROP TABLE IF EXISTS `vehicles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicles` (
  `vehicle_uuid` varchar(255) NOT NULL,
  `vehicle_name` varchar(255) DEFAULT NULL,
  `vehicle_brand` varchar(255) DEFAULT NULL,
  `vehicle_number` varchar(255) DEFAULT NULL,
  `isAssign` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`vehicle_uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicles`
--

LOCK TABLES `vehicles` WRITE;
/*!40000 ALTER TABLE `vehicles` DISABLE KEYS */;
INSERT INTO `vehicles` VALUES ('06bf773a-66c7-4956-84c4-fc7f63b09b5d','Swift','Altroz','GJ01PF1945',1,'2020-10-11 10:30:07','2020-10-11 10:36:18'),('18595c97-c781-4bac-8b95-2d4b7e9c9f93','Passion','Altroz','GJ01PF1945',0,'2020-10-11 10:29:44','2020-10-11 10:29:44'),('28e706f5-d40f-4388-ae29-85be9fe5d885','Shine','Altroz','GJ01PF1945',0,'2020-10-11 10:28:55','2020-10-11 10:28:55'),('82dc8436-5a69-4fcc-b79c-34c5e78f2b6d','Tata','Altroz','GJ01PF1945',0,'2020-10-11 10:28:42','2020-10-11 10:28:42'),('cfacd3d7-04be-4b90-b363-bf681602b152','Activa','Altroz','GJ01PF1945',0,'2020-10-11 10:28:47','2020-10-11 10:28:47');
/*!40000 ALTER TABLE `vehicles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'vehicleDb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-12  7:29:32
