-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 07, 2019 at 04:13 PM
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
(1, 'Nadia Fassi Fehri', '0587896534', 'INWI', 'contact@inwi.com', 'INWI1MAROC', 'waiting'),
(2, 'Stéphane Richardéé', '057896348511', 'WANA', 'contact@orange.ma', 'Orange1MAROCé', 'waiting'),
(3, 'Abou Bakr Saddik', '0554789638', 'Sofrecom Services Maroc', 'contact@sofercom.com', 'Sofrecom1MAROC', 'inactive'),
(18, 'asouab abdelmjid', '0610573342', 'Maroc', 'cli@cli.cli', 'hhh', 'active');

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
  `contract` varchar(10) DEFAULT NULL,
  `active` varchar(10) NOT NULL DEFAULT 'inactive'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `consultant`
--

INSERT INTO `consultant` (`id`, `nom`, `prenom`, `email`, `pwd`, `tel`, `seniorite`, `disponibilite`, `Tjm`, `competence`, `experience`, `contract`, `active`) VALUES
(1, 'hanane', 'Saadi', 'h@h.com', 'aaa', '0185090003', 'Expert [ 10 years]', '1 month', 1500, 'java', '', 'CDI', 'active'),
(6, 'saadi', 'hanan', 'hanan@homtail.com', '11111', '0610573342', 'Expert [ 10 years]', ' 1 month', 1100, 'c++,php', '', 'Freelancer', 'active'),
(7, 'hiha hiho', 'hiho hiho', 'h@h.fr', 'hhh', '0185090003', 'intermediate [3 to 5 years]', 'In 2 weeks', 0, 'sql,php', '', 'Freelancer', 'active'),
(31, 'asouab', 'abdelmjid', 'h@h.ma', 'hhh', '0610573342', 'Senior [5 to 10 years]', ' 1 month', NULL, 'javascript,php', '', NULL, 'inactive'),
(33, 'asouab', 'abdelmjid', 'abde.asouab@gmail.com', 'hhh', '0610573342', 'Expert [ 10 years]', 'immediate', NULL, 'reactjs,flutter', '', NULL, 'waiting'),
(35, 'hiha', 'hiho', 'h@h.mama', 'hhh', '0185090003', 'Senior [5 to 10 years]', 'In 2 weeks', NULL, 'Angular', '', NULL, 'inactive'),
(37, 'hiha', 'hiho', 'h@h.frq', 'hhh', '0185090003', 'Senior [5 to 10 years]', 'In 2 weeks', NULL, 'jee,java swing', '', NULL, 'inactive'),
(38, 'asouab', 'abdelmjid', 'h@h.bb', 'hhh', '0610573342', 'intermediate [3 to 5 years]', 'In 2 weeks', NULL, '.net,c#', '', NULL, 'inactive'),
(40, 'asouab', 'abdelmjid', 'h@h.frqqqqq', 'hhh', '0610573342', 'intermediate [3 to 5 years]', 'In 2 weeks', NULL, 'sql,mongodb', '', NULL, 'active'),
(42, 'haho', 'tata', 'h@h.c', 'hhh', '123456', 'intermediate [3 to 5 years]', ' 1 month', NULL, 'flutter,firebase', '', NULL, 'active'),
(43, 'asouab', 'abdelmjid', 'h@h.frqq', 'hhh', '0610573342', 'intermediate [3 to 5 years]', 'In 2 weeks', NULL, 'symfony,php,html,css', '', NULL, 'active'),
(45, 'asouab', 'abdelmjid', 'h@h.frss', 'hhh', '0610573342', 'Senior [5 to 10 years]', 'In 2 weeks', NULL, 'react native', '', NULL, 'active'),
(49, 'alah', 'alah', 'h@h.aaa', 'hhh', ' 212', 'Expert [ 10 years]', 'immediate', NULL, 'ios', '', NULL, 'active'),
(50, 'asouab', 'abdelmjid', 'con@con.con', 'hhh', '0610573342', 'Expert [ 10 years]', '1 month', NULL, 'networking', '', NULL, 'inactive'),
(52, 'ahmed', 'ahmed', 'ahmed@gmail.com', '0000', '05555555', 'Senior [5 to 10 years]', 'In 2 weeks', NULL, NULL, '', NULL, 'inactive'),
(53, 'hh', 'azert', 'aa@aa.aa', 'hhh', '0610573342', 'intermediate [3 to 5 years]', 'In 2 weeks', 1300, NULL, '', 'Freelancer', 'inactive'),
(54, 'ddd', 'zzz', 'seo.seo.2019@gmail.com', 'hhh', '1233', 'intermediate [3 to 5 years]', '  1 month', 1200, NULL, '', 'Freelancer', 'inactive'),
(55, 'hiha', 'hiho', 'seo.seo.2019@sgmail.com', 'hhh', 'h@h.coms', 'Senior [5 to 10 years]', 'In 2 weeks', 1000, NULL, '', 'CDI', 'inactive'),
(57, 'aaaaaaaaa', 'aaaaaaaaaaaaa', 'abde.asouab@gmail.comaaa', 'hhh', 'h@h.com', 'Senior [5 to 10 years]', '1 month', 1100, NULL, '', 'CDI', 'inactive'),
(59, 'asouabaa', 'abdelmjidaa', 'abde.aasouab@gmail.coma', 'hhh', 'h@h.com', 'beginner [0 to 5 years]', 'In 2 weeks', 1300, NULL, '', 'CDI', 'waiting'),
(60, 'ssasouab', 'abdelmjidss', 'ssabde.asouab@gmail.com', 'hhh', 'ssh@h.com', 'intermediate [3 to 5 years]', 'In 2 weeks', 1200, NULL, '', 'CDI', 'waiting'),
(61, 'aaaaa', 'aaaaa', 'abdea.asouaba@gmaila.coma', 'hhh', 'h@h.com', 'intermediate [3 to 5 years]', '1 month', 1200, NULL, '', 'CDI', 'waiting'),
(63, 'asouaba', 'abdelmjida', 'haa@haa.comaaa', 'hhh', '0610573342', 'Senior [5 to 10 years]', 'immediate', 1000, NULL, '', 'CDI', 'waiting'),
(69, 'aaa', 'aaa', 'aa.bb@bb.cc', 'hhh', '1111', 'beginner [0 to 5 years]', 'immediate', 2000, NULL, '', 'Freelancer', 'inactive'),
(70, 'aazz', 'aazz', 'az.az@az.az', 'undefined', 'h@h.comz', 'intermediate [3 to 5 years]', 'In 2 weeks', 2000, NULL, '', 'Freelancer', 'active');

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
(25, 'hackers', 'hackers hackers hackers hackers hackers hackers ', '2019-06-16', 0),
(27, 'hanane', 'hanane ', '2019-06-24', 0),
(28, 'java', 'html', '2019-07-02', 0);

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
(19, 'cli@cli.cli', 25),
(21, 'cli@cli.cli', 27),
(22, 'cli@cli.cli', 28);

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
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `consultant`
--
ALTER TABLE `consultant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `mission`
--
ALTER TABLE `mission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `Missionclient`
--
ALTER TABLE `Missionclient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;