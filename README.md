# Your first web site

The purpose of this workshop is to teach you how to create your first website

## Configuration

- You first have to install docker and docker-compose on your computer

- Then clone the repo

## How to launch

- Run the following command to launch the docker (you may have to run it as sudo):
`docker-compose up --build`  

- Then go to : localhost:8080 in your browser

- you can quit the docker by running ctrl + c twice

## The exercice

You will have to design the three page available in the views directory (login.ejs, signup.ejs, main.ejs).

--------------------------------------
### exercice 1 : login and signup page

The main html code allowing the login and signup action is already existing, your only goal here is to  
give a better look to the page using css and javascript (feel free to add more html code but don't break the page :) )

The simplest way to find some nice looking css is to go on https://codepen.io/ and use already existing code on your page  
but don't just copy paste it, try to understand.

--------------------------------------
### exercice 2 : main page

Let's now talk about the main part of this project. Your goal here will be to implement a rating systeme about restaurant as you can see on google map.

--------------------------------------
#### exervice 2.1

First you might want to implement a restaurant list in your database, go to the schema.sql file and take example of wath is already inside to create a new table. You can add default restaurant by adding query in the file.

--------------------------------------
#### exervice 2.2

Then you'll have to make your js server able to retreive data from the database. For this you'll have to work with databse call, you can see some example of it in `server/config/passport.js.

--------------------------------------
#### exervice 2.3

If you are new to this only try to print your restaurant list on your main page (give it a nice look). If you succeed on doing this, you should be able to go for the next step, wich is giving a user the ability to rate a restaurant and other user to see it
