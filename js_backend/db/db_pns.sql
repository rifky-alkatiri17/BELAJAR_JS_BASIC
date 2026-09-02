-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 19 Des 2025 pada 14.15
-- Versi server: 10.4.22-MariaDB
-- Versi PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_pns`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_pdi`
--

CREATE TABLE `tb_pdi` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `nip` varchar(30) NOT NULL,
  `pangkat_gol` varchar(50) NOT NULL,
  `jabatan` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_pdi`
--

INSERT INTO `tb_pdi` (`id`, `nama`, `nip`, `pangkat_gol`, `jabatan`) VALUES
(1, 'A. D. E. Manafe, S.IP, M.Si', '19651224  198603 1 006', 'Pembina Muda - IV/c', 'Kepala Badan Kepegawaian, Pendidikan dan Pelatihan Daerah Kota Kupang'),
(2, 'Eirene M. Jusuf, SPT., M.Sc.', '19711112  199902 2 010', 'Pembina Tk. I - IV/b', 'Sekretaris Kepala Badan Kepegawaian, Pendidikan dan Pelatihan Daerah Kota Kupang'),
(3, 'Arma Frida Novita, S.Kom', '19721110 200112 2 001', 'Pembina - IV/a', 'Kabid Pengadaan, Disiplin dan Informasi pada BKPPD Kota Kupang'),
(4, 'Johnny Rihi Do, S.Sos', '19720512 199903 1 006', 'Penata Tk.I - III/d', 'Pejabat Pengawas Pemerintah Muda pada Inspektorat Kota Kupang'),
(5, 'Vanolthom Sine, SH, M.Hum', '19840622 201001 1 020', 'Penata Tk. I -  III/d', 'Analis SDM Aparatur pada BKPPD Kota Kupang'),
(6, 'Romahita Y. B. Simamora, SE. MM', '19850416 200804 2 002', 'Penata Tk.I -  III/d', 'Auditor Muda pada Inspektorat Kota Kupang'),
(7, 'Hayat Salem, A.Md', '19850315 200903 2 017', 'Penata -  III/c', 'Pengelola Disiplin pada  BKPPD Kota Kupang'),
(8, 'Yandri E. H. Nara Kaha', '19790122 200801 1 015', 'Penata Muda -  III/a', 'Pengadministrasi Kepegawaian pada BKPPD Kota Kupang '),
(9, 'Rifki Alkatiri, M.Kom', '19910517 202505 1 001', 'Penata Muda -  III/a', 'Penata Kelola Sistem dan Teknologi Informasi');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tb_pdi`
--
ALTER TABLE `tb_pdi`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tb_pdi`
--
ALTER TABLE `tb_pdi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
