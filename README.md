# Bamazon Project (customer view)

In this project, I created an Amazon-like storefront with MySQL and JS.

I created a database called bamazon_db. The purpose of the database, is to provide a list of products for users to buy. The app allows users to view all products and quantity available in the store.

## How does it work?
In the database, I have a table with Item ID, Product Name, Department, Price, and Quantity.

Once the user connects to the database using the command "node bamazonCustomer.js" The user will see a table with all the product details availble to buy.

**How does the user make a purchase?**
* First, the server shows all the *products, department, price* and available quantity *instock*.
* Second, the system prompts the user to select the **item_id** of the product they wish to buy.
* Third, the system prompts/ask the user how many units of the product they would like to buy.
* Once the user makes a selection for the product and unit amount, the system calculates the total and display it to the user as TotalCost of purchase.
After the purchase is made, the database inventory is updated to reflect units available instock.

**Available Inventory**:
If the selected item quantity is not available, the system does not allow the user to purchase the item and provides the message **Sorry!, we have insufficient quantity of that item.**

## Screen shots and GIF of application working
![Gif](/userInteraction.gif)
 
