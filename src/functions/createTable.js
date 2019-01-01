var mysql = require('mysql')
var express = require('express');
var router = express.Router();
var config = require('../config/config')

const Query = CREATE TABLE `webdev`.`facts` (
  `id` INT NOT NULL,
  `type` INT NOT NULL,
  `text` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
COMMENT = 'Table that contains the questions and answers and the type of entry, Fact or True False question';

