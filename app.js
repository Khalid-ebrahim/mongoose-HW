require("dotenv").config()
const mongoose = require("./modules/customers")

const prompt = require('prompt-sync')();

const username = prompt('What is your name? ');

console.log(`Your name is ${username}`);