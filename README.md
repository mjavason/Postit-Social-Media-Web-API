# Postit Social Media App

Build a simple social media app called Postit (or Post-it). Post-it allows you to post anything (text, images, video, and/or audio) on a single post-it. A post-it is a single post on the post-it app, just like a tweet. Other users can reply to a post-it. Replying to a post-it is like adding a comment to a post (post-it). A post-it reply can also be one or a combination of text and other media already mentioned. To simplify things, a post-it and its replies can just be text for now.


[![Latest release](https://img.shields.io/github/v/release/mhucka/readmine.svg?style=flat-square&color=b44e88)](https://github.com/emerald2240/postit)


## Table of contents
-------------------------------
* [Introduction](#introduction)
* [Installation](#installation)
* [Usage](#usage)
* [Documentation](#documentation)
* [Motivations](#motivations)
* [Contribution](#contributing)
* [Acknowledgments](#acknowledgments)


Introduction
-------------

This is a twitter like social media web API that lets users share 250 char texts(postits) to the world. The API is currently hosted live at [justpostit](https://justpostit.onrender.com).


Installation
-------------
This project is a NodeJs/Vanilla JavaScript app that runs with Express. Download the code locally into your machine and ensure you have NodeJs installed on your computer. 
- Clone the repository
- Install the dependencies: using `npm install`
- Create a new file named `.env` in root folder of the project.
- Copy and paste the content of `.env.example` into `.env` and fill it with the appropriate URI values.
- You are advised to use atlas for the `DATABASE_URI` key but local database url is fine. Access and Refresh tokens are fine with whatever, but use values that will be difficult to guess.
- Run the command below to build and start the server manually:
```bash
node app.js
```
- To start the server in development with nodemon running, run this command: 
 ```bash
 npm run dev
 ```
 - Read the terminal output to make sure that the server is running and the database is connected properly.


Usage
------
The API is comprised of three main resources: 
- Users
- Postits
- Comments

To gain access to any of these resources you need authentication.
To sign up, create a post request to
**localhost:5000/api/v1/users** and in the body, supply
1. first_name
2. last_name
3. email
4. password &
5. user_type(user or admin)

Example: 
```json
{
    "first_name":"Michael",
    "last_name":"Orji",
    "email":"orjimichael@learnable.com",
    "handle":"SubZero",
    "password":"12345",
    "user_type":"admin"
}
```

Once succesfully registered, create another post request to **localhost:5000/api/v1/auth/login**; supply it your email and password; if correct, you'll get a refresh token and access token, pass in the latter as a bearer token before making any requests, depending on your user type you should have access to most of the API resources.


Documentation
-------------
For full info on how the API works and how to consume it, refer to: [justpostit/docs](https://justpostit.onrender.com/api/v1/docs) for its documentation. Simply replace **justpostit.onrender.com** with **localhost:5000** if running the app locally.

- Database Model: [https://dbdesigner.page.link/eqmiCimxeioSnwvA8](https://dbdesigner.page.link/eqmiCimxeioSnwvA8)
- Auth: [https://documenter.getpostman.com/view/24521226/2s93JtQioY](https://documenter.getpostman.com/view/24521226/2s93JtQioY)
- Users: [https://documenter.getpostman.com/view/24521226/2s93JtQioa](https://documenter.getpostman.com/view/24521226/2s93JtQioa)
- Postits: [https://documenter.getpostman.com/view/24521226/2s93JtQPF8](https://documenter.getpostman.com/view/24521226/2s93JtQPF8)
- Comments: [https://documenter.getpostman.com/view/24521226/2s93JtQioZ](https://documenter.getpostman.com/view/24521226/2s93JtQioZ)


Motivations
------------


Contributions
--------------

If you find any part of the app you can improve, just fork the project, work on your own copy then send me a pull request, i reply as soon as possible. Do try to make the pull request as small as possible, that way its easier to read through them.


Acknowledgements
-----------------

I had the assistance of many people whilst building the project; in the way of coding, design, testing, data entry and advice but most impactful of all were The Genesys Learnable Facilitators, Mentors and Tutors. I'm super grateful for the guidance and opportunity to develop and display my coding skills.
