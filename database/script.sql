-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 03, 2023 at 07:57 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud_energizou`
--

-- --------------------------------------------------------

--
-- Table structure for table `empresas_data`
--

CREATE TABLE `empresas_data` (
  `id` int(11) NOT NULL,
  `cnpj` varchar(18) NOT NULL,
  `razao_social` varchar(255) NOT NULL,
  `nome_fantasia` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `data_reg` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `empresas_data`
--

INSERT INTO `empresas_data` (`id`, `cnpj`, `razao_social`, `nome_fantasia`, `status`, `data_reg`) VALUES
(1, '12.345.678/9012-34', 'Empresa Soluções Tech LTDA', 'Soluções Tech', 1, '2023-10-31 08:00:00'),
(2, '23.456.789/0123-45', 'Inovação Global S.A.', 'Inovação Global', 0, '2023-10-31 08:30:00'),
(3, '34.567.890/1234-56', 'Construções Eficientes LTDA', 'Construções Eficientes', 1, '2023-10-31 09:00:00'),
(4, '45.678.901/2345-67', 'Comércio Inteligente S.A.', 'Comércio Inteligente', 0, '2023-10-31 09:30:00'),
(5, '56.789.012/3456-78', 'Saúde em Casa S.A.', 'Saúde em Casa', 1, '2023-10-31 10:00:00'),
(6, '67.890.123/4567-89', 'Turismo Aventura LTDA', 'Aventura Total', 0, '2023-10-31 10:30:00'),
(7, '78.901.234/5678-90', 'Energia Renovável S.A.', 'Energia Renovável', 1, '2023-10-31 11:00:00'),
(8, '89.012.345/6789-01', 'Indústria Criativa LTDA', 'Indústria Criativa', 0, '2023-10-31 11:30:00'),
(9, '90.123.456/7890-12', 'Logística Integrada S.A.', 'Logística Integrada', 1, '2023-10-31 12:00:00'),
(10, '10.123.456/8901-2', 'Alimentos Saudáveis LTDA', 'Sabor Saudável', 0, '2023-10-31 12:30:00'),
(11, '11.234.567/8901-23', 'Futuro Digital S.A.', 'Futuro Digital', 1, '2023-10-31 13:00:00'),
(12, '12.345.678/9012-34', 'Serviços Eficientes LTDA', 'Serviços Eficientes', 0, '2023-10-31 13:30:00'),
(13, '13.456.789/0123-45', 'Construções Sustentáveis S.A.', 'Construções Sustentáveis', 1, '2023-10-31 14:00:00'),
(14, '14.567.890/1234-56', 'Consultoria Global LTDA', 'Consultoria Global', 0, '2023-10-31 14:30:00'),
(15, '15.678.901/2345-67', 'Moda Elegante S.A.', 'Moda Elegante', 1, '2023-10-31 15:00:00'),
(16, '16.789.012/3456-78', 'Tecnologia Inovadora S.A.', 'Tecnologia Inovadora', 0, '2023-10-31 15:30:00'),
(17, '17.890.123/4567-89', 'Soluções Inteligentes LTDA', 'Soluções Inteligentes', 1, '2023-10-31 16:00:00'),
(18, '18.901.234/5678-90', 'Educação Global S.A.', 'Educação Global', 0, '2023-10-31 16:30:00'),
(19, '19.012.345/6789-01', 'Vida Saudável LTDA', 'Vida Saudável', 1, '2023-10-31 17:00:00'),
(20, '20.123.456/7890-12', 'Transporte Consciente S.A.', 'Transporte Consciente', 0, '2023-10-31 17:30:00'),
(28, '41.991.919/9199-15', 'Cadmus Inovações S.A.', 'Cadmus Inovações', 1, '2023-11-03 14:43:39'),
(29, '41.818.418/1051-25', 'Xianmis Contrucoes LTDA', 'Xianmis Construções e Revestimentos', 1, '2023-11-03 14:44:35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `empresas_data`
--
ALTER TABLE `empresas_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `empresas_data`
--
ALTER TABLE `empresas_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
