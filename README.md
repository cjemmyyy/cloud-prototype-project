# Dynamic Landing Page Prototype

 **Public IP**: http://54.194.82.204/
 **Custom Domain**: https://jaychibuisi.duckdns.org/

## Project Title
**The Future of AI-Powered Logistics**

## Description
This is a dynamic prototype of a web application deployed on an Ubuntu EC2 instance using Nginx as a reverse proxy to a Node.js app. The landing pag
e features HTML/CSS with animations and showcases cloud engineering skills.


## Process

### Server Provisioning
* I launched an Ubuntu 22.04 EC2 instance using AWS. This has been done before, so I just continued with it.
* Enabled HTTP (port 80) and later HTTPS (port 443) in the Security Group settings.
* Connected to the server via SSH using the EC2 key pair.

### Setting Up the Web Server

* Updated and upgraded the system packages:
  sudo apt update && sudo apt upgrade
 
* Installed **Node.js and npm**:
  sudo apt install nodejs npm

* Installed **Nginx**:
  sudo apt install nginx
  
* Allowed ports:
  sudo ufw allow 'Nginx Full'

### Creating the Web App

* Created a new folder for the app:
  mkdir ~/webapp
  cd ~/webapp

* Initialized a Node.js project and created `index.js`:
  npm init -y
  nano index.js

* Used Express.js to serve a landing page:
  const express = require("express");
  const app = express();
  const port = 3000;

  app.use(express.static("public"));

  app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
  });

* Created the `public` folder with a landing page:
  mkdir public
  nano public/index.html

### Reverse Proxy with Nginx

* Set up Nginx to proxy traffic from port 80 to the Node.js app on port 3000.
* Edited the default Nginx server block:
  sudo nano /etc/nginx/sites-available/default
  Replaced the server block with:
  server {
      listen 80;
      server_name _;

      location / {
          proxy_pass http://localhost:3000;
          proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection 'upgrade';
          proxy_set_header Host $host;
          proxy_cache_bypass $http_upgrade;
      }
  }

* Tested and restarted Nginx:
  sudo nginx -t
  sudo systemctl restart nginx

### Styling the Landing Page

* Added embedded CSS animations and layout enhancements to `index.html`.

### Version Control with Git & GitHub

* Initialized Git inside `/webapp`:
  git init
  git remote add origin

* Added `.gitignore` to exclude `node_modules`:
  node_modules/

* Committed and pushed:
  git add .
  git commit -m "Initial commit: Node.js app with Nginx reverse proxy"
  git push -u origin master

### DuckDNS Setup (Custom Subdomain)

* Registered a free domain: `jaychibuisi.duckdns.org`

* Created a script to keep the IP updated:
  mkdir ~/duckdns
  cd ~/duckdns
  nano duck.sh

  Script content:

  echo url="https://www.duckdns.org/update?domains=jaychibuisi&token=YOUR_TOKEN&ip=" | curl -k -o ~/duckdns/duck.log -K -

* Made it executable:
  chmod 700 duck.sh
  ./duck.sh


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

## Live Preview

![Landing Page Screenshot](<Screenshot (60).png>)
