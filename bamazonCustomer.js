// - - -
// require("dotenv").config();
var inquirer = require("inquirer");
var mysql = require("mysql");
const cTable = require('console.table');

// connection info for dql db
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon_db"
});

// connect to mysql & sql db
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected");
  afterConnection();
});

// render table
function afterConnection() {
  connection.query("SELECT * FROM product", function (err, res) {
    if (err) throw err;
    console.table(res);
    // connection.end();   
    buyProduct();
  });
}

function buyProduct() {
  connection.query("SELECT * FROM product", function (err, res) {
    if (err) throw err;
    inquirer.prompt([{
      name: "itemId",
      type: "rawlist",
      choices: function (res) {
        var itemIdArray = [];
        for (var i = 0; i < res.length; i++) {
          itemIdArray.push(res[i].item_Id);
        }
        return itemIdArray;
      },
      message: "Enter the item id of the production you wish to buy.",
    },
    {
      name: "quanity",
      type: "rawlist",
      message: "How many would you like to buy?"
    }
    ]).then(function(answer) {
      var chosenItem;
      for (var i = 0; i < res.length; i++) {
        if (res[i].item_id === answer.itemId) {
          chosenItem = res[i];
        }
      }
      // determine if there is enough inventory
      if (chosenItem.stock_qty < parseInt(answer.quanity)) {
      connection.query(
        "UPDATE product SET ? Where?",
          [
            {
              stock_qty: answer.quantity
            },
            {
              item_id: chosenItem.item_id
            }
          ],
          function (err) {
            if (err) throw err;
            console.log("Item successfully purchased!");
            console.log("Your total purchase price is " + price * quanity);
            afterConnection();
          }
        );
      }
      else {
        console.log("Current inventory is too low. Please choose another item, or check back later.")
        buyProduct();
      }
    });
  });
}
module.exports.password = {
  password: process.env.password,
};
// connection.end();   

// Starts the server to begin listening
// =============================================================
// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });