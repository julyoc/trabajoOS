-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.13-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for ejercicio
CREATE DATABASE IF NOT EXISTS `ejercicio` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `ejercicio`;

-- Dumping structure for table ejercicio.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `codigo_usr` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_usr` varchar(100) NOT NULL,
  `nombre_usuario_usr` varchar(100) NOT NULL,
  `correo_usr` varchar(100) NOT NULL,
  `contrasenia_usr` varchar(100) NOT NULL,
  PRIMARY KEY (`codigo_usr`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table ejercicio.usuario: ~0 rows (approximately)
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
