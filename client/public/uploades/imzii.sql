-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 12, 2019 at 06:34 PM
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
  `seniorite` varchar(100) NOT NULL,
  `disponibilité` varchar(100) NOT NULL,
  `Tjm` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `consultant`
--

INSERT INTO `consultant` (`id`, `nom`, `prenom`, `email`, `pwd`, `tel`, `seniorite`, `disponibilité`, `Tjm`) VALUES
(1, 'hanane', '', 'h@h.com', 'hhh', '', '', '', 0),
(2, 'asouab', 'abdelmjid', 'h@h.com', 'hhh', '0610573342', '', '', 0),
(3, 'hassan', 'hannan', 'abde@asouab.com', 'ana', '0610573342', '', '', 0),
(4, 'asouab', 'abdelmjid', 'h@h.m', 'hhh', '0610573342', '', '', 0),
(5, 'asouab', 'abdelmjid', 'h@h.com', 'hhh', '0610573342', '', '', 0),
(6, 'saadi', 'hanan', 'hanan@homtail.com', '11111', '0610573342', '', '', 0),
(7, 'hiha', 'hiho', 'h@h.fr', 'hhh', '0185090003', '', '', 0),
(8, 'asouab', 'abdelmjid', 'h@h.fr', 'hhh', '0610573342', '', '', 0),
(9, 'hiha', 'hiho', 'h@h.fr', 'hhh', '0185090003', '', '', 0),
(10, 'zzzzzzz', 'zzzzzz', 'h@hz.fr', 'hhh', '0610573342', '', '', 0),
(11, 'asouab', 'abdelmjid', 'h@h.fr', 'hhh', '0610573342', '', '', 0),
(12, 'asouab', 'abdelmjid', 'h@h.fr', 'hhh', '0610573342', '', '', 0),
(13, 'asouab', 'abdelmjid', 'h@h.frsssssss', 'hhh', '0610573342', '', '', 0),
(14, 'asouab', 'abdelmjid', 'h@h.fr', 'hhh', '0610573342', '', '', 0),
(15, 'asouab', 'abdelmjid', 'h@h.fr', 'hhh', '0610573342', '', '', 0),
(16, 'asouab', 'abdelmjid', 'h@h.fr', 'hhh', '0610573342', '', '', 0),
(17, 'asouab', 'abdelmjid', 'h@h.fr', 'hhh', '0610573342', '', '', 0),
(18, 'asouab', 'abdelmjid', 'h@h.fr', 'hhh', '0610573342', '', '', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `consultant`
--
ALTER TABLE `consultant`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `consultant`
--
ALTER TABLE `consultant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
