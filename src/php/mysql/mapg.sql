/*
Navicat MySQL Data Transfer

Source Server         : bookstore
Source Server Version : 50540
Source Host           : localhost:3306
Source Database       : mapg

Target Server Type    : MYSQL
Target Server Version : 50540
File Encoding         : 65001

Date: 2021-01-13 18:40:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for manager_account
-- ----------------------------
DROP TABLE IF EXISTS `manager_account`;
CREATE TABLE `manager_account` (
  `id` int(11) DEFAULT NULL,
  `account` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `creaTime` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of manager_account
-- ----------------------------
INSERT INTO `manager_account` VALUES ('1', 'A1234567881212', '65e2cf79c9904820e245ef09a1d34df6', '2021-01-13 18:24:39');
INSERT INTO `manager_account` VALUES ('1', 'A12345678812', '65e2cf79c9904820e245ef09a1d34df6', '2021-01-13 18:24:10');
INSERT INTO `manager_account` VALUES ('1', 'A1234567881', '65e2cf79c9904820e245ef09a1d34df6', '2021-01-13 18:23:47');
INSERT INTO `manager_account` VALUES ('1', 'A123456788', '65e2cf79c9904820e245ef09a1d34df6', '2021-01-13 18:23:29');
INSERT INTO `manager_account` VALUES ('1', 'A1235641', '643b77dceda003142344aaff7efcf5cd', '2021-01-13 18:21:00');
INSERT INTO `manager_account` VALUES ('1', 'A123456', '643b77dceda003142344aaff7efcf5cd', '2021-01-13 18:20:39');
INSERT INTO `manager_account` VALUES ('1', 'a12345', 'eac2b89d6510871f54adef3e919165fb', '2021-01-13 18:19:47');
INSERT INTO `manager_account` VALUES ('1', 'a', '1ee869f641f514cbdbfcd35fc63d6bd1', '2021-01-13 18:17:25');
INSERT INTO `manager_account` VALUES ('1', 'a1', '133f3059989df0c437fb11766a6892e4', '2021-01-13 18:09:56');
INSERT INTO `manager_account` VALUES ('1', 'Axas133', '1e62d046e6e0cd8cbdc8f8a8974a1595', '2021-01-13 18:25:43');
INSERT INTO `manager_account` VALUES ('1', 'A1231115', '65e2cf79c9904820e245ef09a1d34df6', '2021-01-13 18:26:47');
INSERT INTO `manager_account` VALUES ('1', 'A12131', '68ac95c7fd6ef0b8a79f8f48c77ce6cf', '2021-01-13 18:27:29');
INSERT INTO `manager_account` VALUES (null, '1', '1', null);
