DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE product (
  item_id integer auto_increment not null primary key,
  prod_name VARCHAR(100),
  dept_name VARCHAR(100),
  price DECIMAL(10,4),
  stock_qty INT (10)
  );
  
  
  insert into product(prod_name, dept_name, price, stock_qty)
  values("Twister", "Toys", 12, 10);
  
insert into product(prod_name, dept_name, price, stock_qty)
  values("Twister", "Movie", 10, 30);
  
insert into product(prod_name, dept_name, price, stock_qty)
  values("Twizzler", "Candy", 1.50, 50);
  
insert into product(prod_name, dept_name, price, stock_qty)
  values("Twisted Tea", "Beverage", 10.50, 5);
  
insert into product(prod_name, dept_name, price, stock_qty)
  values("Twisted", "Book", 8.0, 100);
  
insert into product(prod_name, dept_name, price, stock_qty)
  values("Twisted", "TV", 22, 50);
  
insert into product(prod_name, dept_name, price, stock_qty)
  values("Twisted", "Movie", 0, 150);
  
insert into product(prod_name, dept_name, price, stock_qty)
  values("Twisted Mistake", "Movie", 0, 500);
  
insert into product(prod_name, dept_name, price, stock_qty)
  values("Twisted Prey", "Book", 14, 20);
  
insert into product(prod_name, dept_name, price, stock_qty)
  values("Twisted - Lo-top sneaker", "Clothing", 12, 8);
  
  SELECT * FROM bamazon_db;