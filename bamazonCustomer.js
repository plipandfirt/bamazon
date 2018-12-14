// 5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

// 6. The app should then prompt users with two messages.

//    * The first should ask them the ID of the product they would like to buy.
//    * The second message should ask how many units of the product they would like to buy.

// 7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

//    * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

// 8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
//    * This means updating the SQL database to reflect the remaining quantity.
//    * Once the update goes through, show the customer the total cost of their purchase.

// - - -

// * If this activity took you between 8-10 hours, then you've put enough time into this assignment. Feel free to stop here -- unless you want to take on the next challenge.
// - - -

var inquirer = require("inquirer");
var mysql = require("mysql");
const cTable = require('console.table');

// connection info for dql db
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Karoly!1",
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

// connection.end();   

// Starts the server to begin listening
// =============================================================
// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });