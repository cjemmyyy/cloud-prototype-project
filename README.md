# Dynamic Landing Page Prototype

 **Live Demo**: http://54.194.82.204/

## Project Title
**The Future of AI-Powered Logistics**

## Description
This is a dynamic prototype of a web application deployed on an Ubuntu EC2 instance using Nginx as a reverse proxy to a Node.js app. The landing pag
e features HTML/CSS with animations and showcases cloud engineering skills.

##Process
The server was provisioned by logging into the AWS site then the EC2 dashboard and then creating an instance (this has been done before in previous
class, so I didn't need to do that again, what I did was to allow Port 80 and Port 443 as part of the instructions.
-For the web server setup, I started by installing Nginx using sudo apt update, then sudo apt install nginx -y
-Next was installing node.js; using curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
-created the node.js app using mkdir webapp and then going to the directory
-the node.js webserver index.js is created and then the landing page is created as well using public/index.html
-getting to the reverse proxy part using nginx, the nginx config was edited and restarted to kick it into effect
-to view my landing page after the steps were done, I visited the public ip address.

## Features
- Ubuntu EC2 Server
- Node.js + Express Backend
- Nginx Reverse Proxy
- Custom Landing Page with CSS Animation
- Opened HTTP (80) and HTTPS (443) ports

## Author
JOSHUA CHIBUISI

## Technologies
- Node.js
- Express.js
- Nginx
- AWS EC2 (Ubuntu)
- HTML, CSS

