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

// var Table = require('cli-table');

// var table = new Table({
//     head: ['TH 1 label', 'TH 2 label']
//   , colWidths: [100, 200]
// });

// // table is an Array, so you can `push`, `unshift`, `splice` and friends
// table.push(
//     ['First value', 'Second value']
//   , ['First value', 'Second value']
// );

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
function afterConnection() {
    connection.query("SELECT * FROM product", function(err, res) {
      if (err) throw err;
      console.table(res);
      connection.end();
    });
  }

  // Starts the server to begin listening
// =============================================================
// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });


// function start() {
//     inquirer.prompt([{
//         name: "action",
//         type: "rawlist",
//         message: "What would you like to do?",
//         choices: ["View products", "Purchase products"],
//     }]).then(function () {
//         // switch (response.options) {
//             // case "View products for sale":
//             //     console.log("connecting");
//             //     console.table();
//             connection.query("SELECT * FROM product", {
//                 console.log("price");
//                 },
//             function (err, res) {
//             if (err) throw err;
//             // connection.end();

//             // console.log(price);
//             // console.log('There are currently ${res[0].stock_qty} in stock');
//             // for (i = 0; i, res.length; i++) {
//             //     console.log("Item number: " + res[i].item_id);
//             //     console.log("Item name: " + res[i].prod_name);
//             //     console.log("Price per unit: " + res[i].price);
//             //     console.log("Quanity remaining: " + res[i].stock_qty);
//         }
//     })
// }
// //     });
// // }
// // connection.end();    