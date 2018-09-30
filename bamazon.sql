-- Create a MySQL Database called bamazon --
DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

/*-- Ccreate a Table inside of that database called products -- */
CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price NUMERIC(6, 2) NOT NULL,
  instock INT NULL,
  PRIMARY KEY (item_id)
);
/*The products table should have iteach of the following columns, product, department, price, stockQuantity  */
INSERT INTO products (product_name, department_name, price, instock)
VALUES ('Sleeping Bag', 'Outdoors', 39.99, 5);

INSERT INTO products (product_name, department_name, price, instock)
VALUES ('Tent', 'Outdoors', 79.99, 1);

INSERT INTO products (product_name, department_name, price, instock)
VALUES ('iPad Mini', 'Electronics', 399.99, 10);

INSERT INTO products (product_name, department_name, price, instock)
VALUES ('iPhone X', 'Electronics', 750.99, 1);

INSERT INTO products (product_name, department_name, price, instock)
VALUES ('Moby Dick', 'Books', 19.99, 20);

INSERT INTO products (product_name, department_name, price, instock)
VALUES ('The Outsider', 'Books', 19.99, 1);

INSERT INTO products (product_name, department_name, price, instock)
VALUES ('Skyscraper', 'Video', 19.99, 1);

INSERT INTO products (product_name, department_name, price, instock)
VALUES ('Justice League', 'Video', 19.99, 1);

INSERT INTO products (product_name, department_name, price, instock)
VALUES ('Play-Doh', 'Toys', 8.99, 1);

INSERT INTO products (product_name, department_name, price, instock)
VALUES ('UNO Card', 'Toys', 4.99, 1);

SELECT * FROM products;