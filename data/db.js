const knex = require("knex");

const production = process.env.NODE_ENV || "development";
const config = require("../knexfile.js")[production];

module.exports = knex(config);
