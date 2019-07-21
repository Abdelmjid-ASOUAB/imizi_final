-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 21, 2019 at 04:16 AM
-- Server version: 10.3.15-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `imzii`
--
CREATE DATABASE IF NOT EXISTS `imzii` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `imzii`;

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(20) NOT NULL,
  `pwd` varchar(20) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `pwd`, `name`) VALUES
(1, 'admin@admin.com', 'admin', 'Admin1'),
(2, 'admin2@admin2.com', 'admin', 'Admin2');

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE `client` (
  `id` int(11) NOT NULL,
  `representant` varchar(20) NOT NULL,
  `tel` varchar(20) NOT NULL,
  `societe` varchar(30) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `pwd` varchar(50) NOT NULL,
  `active` varchar(10) NOT NULL DEFAULT 'waiting'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`id`, `representant`, `tel`, `societe`, `mail`, `pwd`, `active`) VALUES
(1, 'Nadia Fassi Fehri', '0587896534', 'INWI', 'contact@inwi.com', 'INWI1MAROC', 'active'),
(2, 'Stéphane Richardéé', '057896348511', 'WANA', 'contact@orange.ma', 'Orange1MAROCé', 'active'),
(3, 'Abou Bakr Saddik', '0554789638', 'Sofrecom Services Maroc', 'contact@sofercom.com', 'Sofrecom1MAROC', 'inactive'),
(28, 'DAHDBI Ahmed ', ' 2127456789', 'Orange', 'contact@orang.com', 'test', 'waiting');

-- --------------------------------------------------------

--
-- Table structure for table `consultant`
--

DROP TABLE IF EXISTS `consultant`;
CREATE TABLE `consultant` (
  `id` int(11) NOT NULL,
  `nom` text NOT NULL,
  `prenom` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pwd` varchar(20) NOT NULL,
  `tel` varchar(15) NOT NULL,
  `seniorite` varchar(100) DEFAULT NULL,
  `disponibilite` varchar(100) DEFAULT NULL,
  `Tjm` int(11) DEFAULT NULL,
  `competence` varchar(500) DEFAULT NULL,
  `experience` varchar(500) NOT NULL,
  `education` varchar(1000) NOT NULL,
  `certificats` varchar(1000) NOT NULL,
  `profile` varchar(50) NOT NULL,
  `projects` varchar(1000) NOT NULL,
  `langues` varchar(50) NOT NULL,
  `contract` varchar(10) DEFAULT NULL,
  `active` varchar(10) NOT NULL DEFAULT 'inactive'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `consultant`
--

INSERT INTO `consultant` (`id`, `nom`, `prenom`, `email`, `pwd`, `tel`, `seniorite`, `disponibilite`, `Tjm`, `competence`, `experience`, `education`, `certificats`, `profile`, `projects`, `langues`, `contract`, `active`) VALUES
(1, 'Saadi', 'hanane', 'h@h.com', 'aaa', '0185090003', 'Expert [ 10 years]', '1 month', 1500, ', Linux Ubuntu    \r, 2000 server\r, server/XP/Vista/7/8\r, XML/XSL, HTML/Javascript,Ajax, Servlet/JSP,Struts, JSF\r, Hibernate Spring JSTL HTTP  Php/MySQ\r, LDAP , Tomcat ,Glassfish,Websph?re\r, Java , C#,VB net,Php\r, UML, Merise, Rational Rose, PowerAMC, Design Patterns\r, J2EE, EJB, JPA, JMS,MDB, NET, WebServices\r, TCP/IP, Topologies R?seaux\r', '', ', Master en Management des Syst?mes d?Informations\r, Licence professionnelle Java/J2ee\r, BTS  option G?nie Informatique\r, Baccalaur?at sciences exp?rimentales\r', ', Certificat ISTQB ? niveau Foundation\r, IBM Certified specialist in FileNet Content Manager V5\r, IBM Certified specialist in FileNet Business Process Manager V5\r, IBM Datacap Taskmaster Capture Product Fundamentals Technical Professional\r, Certified ISO / IEC 2 0000 International Standard for IT Service Management\r, Certified COBIT Foundation V4\r, Training Project Management Professional\r, Training Resilia Cyber security resilience\r', ' Senior IT Manager\r', 'undefined', ', Arabe , Fran?ais , Anglais\r', 'CDI', 'active'),
(31, 'abdelmjid', 'Saadi', 'abde.saadi@gmail.com', 'gmil', '0610573342', 'Senior [5 to 10 years]', ' 1 month', 0, 'java,php', '', '', '', '', '', '0', 'null', 'active'),
(35, 'khalid', 'khaldon', 'khalid@khali.com', 'kaka', '0185090003', 'Senior [5 to 10 years]', 'In 2 weeks', 0, 'Angular', '', '', '', '', '', '0', 'null', 'active'),
(37, 'Imane', 'Anwar', 'Imane@gmail.com', 'imane', '0185090003', 'Senior [5 to 10 years]', 'In 2 weeks', 1100, 'jee,java swing', '', '', '', '', '', '0', 'null', 'inactive'),
(38, 'Hassane', 'Barakat', 'hasan@hotmail.com', 'hasanbarakat', '0610573342', 'intermediate [3 to 5 years]', 'In 2 weeks', 1300, '.net,c', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'null', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

DROP TABLE IF EXISTS `experience`;
CREATE TABLE `experience` (
  `id` int(11) NOT NULL,
  `intitule` varchar(100) NOT NULL,
  `description` varchar(200) NOT NULL,
  `dateDebut` varchar(20) NOT NULL,
  `dateFin` varchar(20) NOT NULL,
  `duree` varchar(11) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `experience`
--

INSERT INTO `experience` (`id`, `intitule`, `description`, `dateDebut`, `dateFin`, `duree`, `email`) VALUES
(27, ' Ing?nieur Etudes et D?veloppement\r', ' Pilotage  des  projets , Optimiser l?usage de tous les composants de l?infrastructure , Mise en place de solution de haute disponibilit? , Gestion des fichiers de configuration de base de donn?es\r', ' Septembre  2003\r', ' Septembre  2009\r', ' 1 an\r', 'h@h.com'),
(28, ' Consultant ?tudes et d?veloppement\r', ' Mise en place et configuration Peplink , WAN Internet Link Load Balancing Routers , Mise en place d?un serveur mail en haute disponibilit?\r', ' Janvier 2010\r', ' Octobre 2012\r', ' 2 ans\r', 'h@h.com');

-- --------------------------------------------------------

--
-- Table structure for table `mission`
--

DROP TABLE IF EXISTS `mission`;
CREATE TABLE `mission` (
  `id` int(11) NOT NULL,
  `Titel` varchar(50) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `visible` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mission`
--

INSERT INTO `mission` (`id`, `Titel`, `description`, `date`, `visible`) VALUES
(1, 'Developer  Java', 'Developer  JavaDeveloper  JavaDeveloper  JavaDeveloper  Java', '2019-06-19', 0),
(2, 'Developer  Web', 'Developer  WebDeveloper  WebDeveloper  WebDeveloper  WebDeveloper  WebDeveloper  WebDeveloper  WebDeveloper  WebDeveloper  WebDeveloper  WebDeveloper  WebDeveloper  WebDeveloper  Web', '2019-06-12', 0),
(3, 'networking ', 'networkingnetworkingnetworkingnetworkingnetworkingnetworkingnetworkingnetworkingnetworkingnetworkingnetworkingnetworkingnetworkingnetworkingnetworkingnetworkingnetworkingnetworking', '2019-06-02', 0),
(48, 'Java Dev', 'We looking for java developer', '2019-07-19', 0),
(49, 'ReactJs developer', 'looking for Reactjs developer', '2019-07-19', 0);

-- --------------------------------------------------------

--
-- Table structure for table `missionclient`
--

DROP TABLE IF EXISTS `missionclient`;
CREATE TABLE `missionclient` (
  `id` int(11) NOT NULL,
  `client_email` varchar(50) NOT NULL,
  `mission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `missionclient`
--

INSERT INTO `missionclient` (`id`, `client_email`, `mission_id`) VALUES
(1, 'contact@inwi.com', 1),
(2, 'contact@inwi.com', 2),
(28, 'w@w.w', 34),
(29, 'w@w.w', 35),
(30, 'w@w.w', 36),
(42, 'cli@cli.cli', 48),
(43, 'cli@cli.cli', 49);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mail` (`mail`);

--
-- Indexes for table `consultant`
--
ALTER TABLE `consultant`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mission`
--
ALTER TABLE `mission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `missionclient`
--
ALTER TABLE `missionclient`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `consultant`
--
ALTER TABLE `consultant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2467;

--
-- AUTO_INCREMENT for table `experience`
--
ALTER TABLE `experience`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `mission`
--
ALTER TABLE `mission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `missionclient`
--
ALTER TABLE `missionclient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
