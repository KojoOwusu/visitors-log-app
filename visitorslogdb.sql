-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Oct 02, 2019 at 08:59 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `Ict_visitors_log`
--

-- --------------------------------------------------------

--
-- Table structure for table `VisitorsLogbook`
--

CREATE TABLE `VisitorsLogbook` (
  `id` int(11) NOT NULL,
  `Date` date NOT NULL,
  `Time_In` time DEFAULT NULL,
  `Name` varchar(200) NOT NULL,
  `Department` varchar(100) NOT NULL,
  `Item` varchar(200) NOT NULL,
  `ID_NO` int(100) NOT NULL,
  `Time_Out` time DEFAULT NULL,
  `Returned` enum('Yes','No') NOT NULL DEFAULT 'No'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `VisitorsLogbook`
--

INSERT INTO `VisitorsLogbook` (`id`, `Date`, `Time_In`, `Name`, `Department`, `Item`, `ID_NO`, `Time_Out`, `Returned`) VALUES
(1, '2019-09-20', '00:53:44', 'Kwadwo Owusu', 'ICT services ', 'Pointer ', 500912, '12:00:00', 'Yes'),
(2, '2019-09-20', '21:16:04', 'Yaw Siki', 'Air Traffic Control', 'Printer ', 52914, '08:26:50', 'Yes'),
(3, '2019-09-22', '08:21:31', 'Stevoo', 'General Services (ICT Section)', 'Laptop ', 501125, '10:30:10', 'Yes'),
(5, '2019-09-21', '01:28:08', 'Prince', 'HR', 'Paper', 501112, '10:30:10', 'Yes'),
(6, '2019-12-12', NULL, 'Daniel Baa', 'Procurement', 'Card Holder ', 201201, '00:07:40', 'No'),
(7, '2025-08-30', '22:10:31', 'Brick and lace', 'Food Services', 'Cutter', 5021442, '14:40:35', 'Yes'),
(8, '2019-04-01', NULL, 'Adwoa Smart', 'Engineering', 'Projector remote', 509509, '19:25:31', 'No'),
(9, '2019-03-14', NULL, 'Prince', 'ICT', 'Watch', 500123, '08:22:50', 'No'),
(10, '2019-08-29', NULL, 'Koo Nimo', 'Gata Teacher', 'Laptop', 200152, '20:00:48', 'No');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `VisitorsLogbook`
--
ALTER TABLE `VisitorsLogbook`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `VisitorsLogbook`
--
ALTER TABLE `VisitorsLogbook`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

