-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 16, 2019 at 04:21 PM
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
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE `client` (
  `id` int(11) NOT NULL,
  `representant` varchar(20) NOT NULL,
  `tel` varchar(20) NOT NULL,
  `societe` varchar(30) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `pwd` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`id`, `representant`, `tel`, `societe`, `mail`, `pwd`) VALUES
(1, 'Nadia Fassi Fehri', '0587896534', 'INWI', 'contact@inwi.com', 'INWI1MAROC'),
(2, 'Stéphane Richard', '0578963485', 'Orange', 'contact@orange.com', 'Orange1MAROC'),
(3, 'Abou Bakr Saddik', '0554789638', 'Sofrecom Services Maroc', 'contact@sofercom.com', 'Sofrecom1MAROC'),
(5, 'dasouab abdelmjid', ' 212', 'undefined', 'abde.asouab@gmail.com', 'undefined'),
(18, 'asouab abdelmjid', '0610573342', 'maroc', 'cli@cli.cli', 'hhh');

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
  `disponibilité` varchar(100) DEFAULT NULL,
  `Tjm` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `consultant`
--

INSERT INTO `consultant` (`id`, `nom`, `prenom`, `email`, `pwd`, `tel`, `seniorite`, `disponibilité`, `Tjm`) VALUES
(1, 'hanane', '', 'h@h.com', 'hhh', '', '', '', 0),
(4, 'asouab', 'abdelmjid', 'h@h.m', 'hhh', '0610573342', '', '', 0),
(6, 'saadi', 'hanan', 'hanan@homtail.com', '11111', '0610573342', '', '', 0),
(7, 'hiha', 'hiho', 'h@h.fr', 'hhh', '0185090003', '', '', 0),
(20, 'nta', 'ana', 'aa@aa.com', '1234567', '1234567', NULL, NULL, NULL),
(31, 'asouab', 'abdelmjid', 'h@h.ma', 'hhh', '0610573342', NULL, NULL, NULL),
(33, 'asouab', 'abdelmjid', 'abde.asouab@gmail.com', 'hhh', '0610573342', 'Expert [ 10 years]', 'immediate', NULL),
(35, 'hiha', 'hiho', 'h@h.mama', 'hhh', '0185090003', 'Senior [5 to 10 years]', 'In 2 weeks', NULL),
(36, 'hiha', 'hiho', 'h@h.frkk', 'hhh', '0185090003', 'Senior [5 to 10 years]', '1 month', NULL),
(37, 'hiha', 'hiho', 'h@h.frq', 'hhh', '0185090003', 'Senior [5 to 10 years]', 'In 2 weeks', NULL),
(38, 'asouab', 'abdelmjid', 'h@h.bb', 'hhh', '0610573342', 'intermediate [3 to 5 years]', 'In 2 weeks', NULL),
(40, 'asouab', 'abdelmjid', 'h@h.frqqqqq', 'hhh', '0610573342', 'intermediate [3 to 5 years]', 'In 2 weeks', NULL),
(42, 'ikhan', 'tata', 'h@h.c', 'hhh', '123456', 'undefined', 'undefined', NULL),
(43, 'asouab', 'abdelmjid', 'h@h.frqq', 'hhh', '0610573342', 'intermediate [3 to 5 years]', 'In 2 weeks', NULL),
(44, 'hiha', 'hiho', 'h@kh.fr', 'hhh', '0185090003', 'Expert [ 10 years]', 'In 2 weeks', NULL),
(45, 'asouab', 'abdelmjid', 'h@h.frss', 'hhh', '0610573342', 'Senior [5 to 10 years]', 'In 2 weeks', NULL),
(47, 'ss', 'ss', 'sss@eee.ma', 'hhh', 'h@h.fr', 'Expert [ 10 years]', 'immediate', NULL),
(49, 'alah', 'alah', 'h@h.aaa', 'hhh', ' 212', 'Expert [ 10 years]', 'immediate', NULL),
(50, 'asouab', 'abdelmjid', 'con@con.con', 'hhh', '0610573342', 'Expert [ 10 years]', '1 month', NULL);

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
(1, 'Developer  Java', 'Developer  JavaDeveloper  JavaDeveloper  JavaDeveloper  Java', '2019-06-04', 0),
(2, 'Developer  Web', 'Developer  WebDeveloper  WebDeveloper  WebDeveloper  WebDeveloper  WebDeveloper  WebDeveloper  WebDeveloper  WebDeveloper  WebDeveloper  WebDeveloper  WebDeveloper  WebDeveloper  Web', '2019-06-12', 0),
(3, 'networking ', 'networkingnetworkingnetworkingnetworkingnetworkingnetworkingnetworkingnetworkingnetworkingnetworkingnetworkingnetworkingnetworkingnetworkingnetworkingnetworkingnetworkingnetworking', '2019-06-02', 0),
(24, 'test 1', 'test 2', '2019-06-16', 0);

-- --------------------------------------------------------

--
-- Table structure for table `Missionclient`
--

DROP TABLE IF EXISTS `Missionclient`;
CREATE TABLE `Missionclient` (
  `id` int(11) NOT NULL,
  `client_email` varchar(50) NOT NULL,
  `mission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Missionclient`
--

INSERT INTO `Missionclient` (`id`, `client_email`, `mission_id`) VALUES
(1, 'contact@inwi.com', 1),
(2, 'contact@inwi.com', 2),
(18, 'cli@cli.cli', 24);

--
-- Indexes for dumped tables
--

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
-- Indexes for table `mission`
--
ALTER TABLE `mission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Missionclient`
--
ALTER TABLE `Missionclient`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `consultant`
--
ALTER TABLE `consultant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `mission`
--
ALTER TABLE `mission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `Missionclient`
--
ALTER TABLE `Missionclient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
