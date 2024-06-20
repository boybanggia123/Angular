-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost:3308
-- Thời gian đã tạo: Th6 18, 2024 lúc 09:44 AM
-- Phiên bản máy phục vụ: 8.0.30
-- Phiên bản PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `framework1`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `employees`
--

CREATE TABLE `employees` (
  `id` int NOT NULL,
  `name_employee` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `employees`
--

INSERT INTO `employees` (`id`, `name_employee`, `position`, `department`, `createdAt`, `updatedAt`) VALUES
(1, 'Alice', 'Project Manager', 'Management', '2024-05-21 10:49:07', '2024-05-21 10:49:07'),
(2, 'Bob', 'Developer', 'Engineering', '2024-05-21 10:49:07', '2024-05-21 10:49:07'),
(3, 'Charlie', 'Designer', 'Design', '2024-05-21 10:49:07', '2024-05-21 10:49:07'),
(4, 'David', 'Developer', 'Engineering', '2024-05-21 10:49:07', '2024-05-21 10:49:07'),
(5, 'Eve', 'Tester', 'Quality Assurance', '2024-05-21 10:49:07', '2024-05-21 10:49:07'),
(12, 'Quân đẹp trai', 'Project Manager', 'Management', '2024-05-24 09:52:37', '2024-05-24 13:35:06');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `projects`
--

CREATE TABLE `projects` (
  `id` int NOT NULL,
  `name_project` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `leader` varchar(255) NOT NULL,
  `project_to_user` int NOT NULL,
  `day_start` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `day_end` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `projects`
--

INSERT INTO `projects` (`id`, `name_project`, `price`, `leader`, `project_to_user`, `day_start`, `day_end`, `createdAt`, `updatedAt`) VALUES
(1, 'Project A', 5000, 'Alice', 28, '2023-01-01 00:00:00', '2023-06-01 00:00:00', '2024-05-21 10:48:54', '2024-06-13 11:43:28'),
(2, 'Project B', 10000, 'Bob', 22, '2023-02-01 00:00:00', '2023-08-01 00:00:00', '2024-05-21 10:48:54', '2024-05-21 10:48:54'),
(3, 'Project C', 15000, 'Charlie', 23, '2023-03-01 00:00:00', '2023-09-01 00:00:00', '2024-05-21 10:48:54', '2024-05-21 10:48:54'),
(9, 'Việc G', 300000, 'Quân', 23, '2024-06-04 20:06:49', '2023-06-25 00:00:00', '2024-06-04 20:06:49', '2024-06-11 12:24:59'),
(10, 'test 4', 200, 'Quân', 27, '2024-06-11 00:00:00', '2024-06-14 00:00:00', '2024-06-11 10:28:31', '2024-06-11 12:25:29'),
(12, 'qqdz', 3000, 'đz', 22, '2024-06-11 00:00:00', '2024-06-21 00:00:00', '2024-06-11 12:22:10', '2024-06-11 12:27:14'),
(13, 'quân xinh trai', 2000, 'Quân', 30, '2024-06-12 00:00:00', '2024-06-15 00:00:00', '2024-06-12 06:25:13', '2024-06-13 12:04:03');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20240521033502-create-projects-table.js'),
('20240521033554-create-employees-table.js'),
('20240521034507-create-tasks-table.js'),
('20240525083633-migration-users-table.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tasks`
--

CREATE TABLE `tasks` (
  `id` int NOT NULL,
  `name_task` varchar(255) NOT NULL,
  `projectId` int NOT NULL,
  `assignedTo` int DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'pending',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `tasks`
--

INSERT INTO `tasks` (`id`, `name_task`, `projectId`, `assignedTo`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Task 1', 1, 1, 'completed', '2024-05-21 10:49:16', '2024-05-21 10:49:16'),
(2, 'Task 2', 1, 4, 'in progress', '2024-05-21 10:49:16', '2024-05-21 10:49:16'),
(3, 'Task 3', 2, 2, 'pending', '2024-05-21 10:49:16', '2024-05-21 10:49:16'),
(4, 'Task 4', 2, 5, 'completed', '2024-05-21 10:49:16', '2024-05-21 10:49:16'),
(5, 'Task 5', 3, 3, 'pending', '2024-05-21 10:49:16', '2024-05-21 10:49:16');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name_user` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` int NOT NULL,
  `role` int DEFAULT '0',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name_user`, `password`, `email`, `phone`, `role`, `createdAt`, `updatedAt`) VALUES
(22, 'testuser', '$2b$10$Axm.qQ7Vf4SDrBXZaaiX1.vf3cZi63XUgBcQZlDDMn6q/m/gsIlD6', 'testuser@example.com', 1234567890, 0, '2024-06-07 09:09:55', '2024-06-07 09:09:55'),
(23, 'Quânbm', '$2b$10$vgwCqx9SJJ4dZGAkXzaVX.CftaDizrjysY9kCjgfzLv6MFUbCRJOu', 'quan@example.com', 1234567890, 1, '2024-06-07 09:21:11', '2024-06-07 09:21:11'),
(24, 'Test2', '$2b$10$AIzpb8dtRwnrFvoM6i6z.u22RjqcJsYTzmor2JuI6KKaRtd9Wvx36', 'bm@gmail.com', 987654321, 0, '2024-06-07 09:25:12', '2024-06-07 09:25:12'),
(25, 'Test3', '$2b$10$YHseANM76HRVHljtxWbwXurwFvgYeNpnA3vEbt0URoA3rF96xsBCq', 'haha@gmail.com', 987654321, 0, '2024-06-07 09:30:58', '2024-06-07 09:30:58'),
(27, 'Quân đz', '$2b$10$4tV2Bv30gW35UAZ6zX5vtOPGdBn9BPqqt8Pn3lyI/aGuamu1UR3NC', 'qw@gmail.com', 987654321, 0, '2024-06-07 14:47:07', '2024-06-07 14:47:07'),
(28, 'qwer', '$2b$10$4n0aRLc7D7PY8MnOhP4lgO5YscSU0bds9357CKln7QH58WtfPUA62', 'qwe@gmail.com', 987654321, 0, '2024-06-12 06:09:55', '2024-06-12 06:09:55'),
(29, 'ab', '$2b$10$CjwzK6exCeVAhtTqD4P/tOPtTGwgt1WocQSS4cA2CE3JlEw2DHS2u', 'ab@gmail.com', 987654321, 0, '2024-06-13 12:01:03', '2024-06-13 12:01:03'),
(30, 'cc', '$2b$10$fHKecrqItq62Y/aB6iUxhOtwNYiWhLhifg05JKFIsAJmsOdwfFR3e', 'abc@gmail.com', 987654321, 0, '2024-06-13 12:03:06', '2024-06-13 12:03:06');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projects_to_iduser` (`project_to_user`);

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projectId` (`projectId`),
  ADD KEY `assignedTo` (`assignedTo`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `projects_to_iduser` FOREIGN KEY (`project_to_user`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Các ràng buộc cho bảng `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`projectId`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tasks_ibfk_2` FOREIGN KEY (`assignedTo`) REFERENCES `employees` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
