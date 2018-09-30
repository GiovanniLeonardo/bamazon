var mysql = require("mysql");
var inquirer = require("inquirer");
var table= require('console.table');

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_db"
});


//connect to my server and Db
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id: " + connection.threadId + "\n");
 
  });
  
//start database function
var productList = function() {

    //console log a Welcome message
    console.log("Welcome to my e-store! Enjoy the shopping." + '\n');

    //query the database for all items for sale
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;

        // showcase all the inventory items for sale
        for (var i = 0; i < res.length; i++) {
           if (i === 1) {break; } console.table(res);
        }
        //call the function userInquire
       userInquire();
    })
}
function userInquire() {        
//inquire with prompt to ask the user what item from products list they would like to buy
        inquirer.prompt([{
            name: "item",
            type: "input",
            message: "Please, select an itemID of the product you would like to buy?",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                } else {
                    return false;
                }
            }
        }, { //inquire to ask how many units of the product they would like buy
            name: "quantity",
            type: "input",
            message: "How many of this item would you like to buy?",
            validate: function(value) {
             if (isNaN(value) === false) {
                 return true;
             } else {
                 return false;
             }
            } //if the selection is valid, proceed
        }]).then(function(selection) {
            var selectedId = selection.item;
            var selectedQuantity = selection.quantity;
            order(selectedId, selectedQuantity);
        });
    }
///update DB with the ordered itemID and quantity to reflect the remaining quantity
function order(itemId, selectedQuantity) {

    connection.query("SELECT * FROM products WHERE item_id = " + itemId, function(err, res) {
        if (err) throw err;
        //
        if (selectedQuantity <= res[0].instock) {
            var totalCost = res[0].price * selectedQuantity;
            //if selected item quantity is available, show total cost of their purchase
            console.log("Total is $" + totalCost + ". Thank you, please come again!");

            //after purchase, update quantity
            connection.query("UPDATE products SET instock = instock - " + selectedQuantity + " WHERE item_id = " + itemId);
        
        } else {
            //if selected item quantity is not available, do not allow purchase.
            console.log("Sorry!, we have insufficient quantity of that item.");
        };
        //end server connection
        connection.end();
        
    })
}

productList();