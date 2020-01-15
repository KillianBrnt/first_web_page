# Your first web site

The purpose of this workshop is to teach you how to create your first website front with a premade back

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

### exercice 1 : login and signup page

The main html code allowing the login and signup action is already existing, your only goal here is to  
give a better look to the page using css and javascript (feel free to add more html code but don't break the page :) )

The simplest way to find some nice looking css is to go on https://codepen.io/ and use already existing code on your page  
but don't just copy paste it, try to understand.

### exercice 2 : main page

In this exercice you will start from scratch, it's up to you to choose the look of the main.ejs page, the only mandatory  
is to display the user.username variable (wich contain the name of the actual user logged in) sent by the backend.
