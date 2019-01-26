// Imports MySQL connection.
const connection = require("./connection.js");

// Helper functions
// Creates an array of question marks and prints it as a string.
var printQuestionMarks = (num) => {
    var arr = [];

    for(var i = 0; i < num; i++) arr.push("?");

    return arr;
}

// Converts an object into SQL syntax.
var objToSql = (obj) => {
    var arr = [];

    for(var key in obj) {
        var value = obj[key];

        // Checks to make sure property isn't hidden
        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) value = "'" + value + "'";

            arr.push(key + " = " + value);
        }
    }

    return arr;
}

// Object-Relational Model
var orm = {
    selectAll: (table, cb) => {
        var queryStr = "SELECT * FROM " + table + ";";

        connection.query(queryStr, (err, result) => {
            if(err) throw err;

            cb(result);
        });
    },

    insertOne: (table, cols, vals, cb) => {
        var queryStr = "INSERT INTO " + table;
        queryStr += " (" + cols.toString() + ") ";
        queryStr += "VALUES (" + printQuestionMarks(vals.length) + ");";
        
        connection.query(queryStr, vals, (err, result) => {
            if(err) throw err;

            cb(result);
        });
    },

    updateOne: (table, objColVals, condition, cb) => {
        var queryStr = "UPDATE " + table;
        queryStr += " SET " + objToSql(objColVals);
        queryStr += " WHERE " + condition + ";";

        connection.query(queryStr, (err, result) => {
            if(err) throw err;

            cb(result);
        });
    }
}

// Export ORM
module.exports = orm;