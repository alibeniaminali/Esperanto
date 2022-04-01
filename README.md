<a id="idtext"></a>

# 📚 Esperanto 📚
![App Screenshot](https://img.shields.io/badge/version-v1.0-green)
![App Screenshot](https://img.shields.io/badge/-%20DEPLOYED-green)

We deployed this website using Heroku and it is available
➡️  [HERE](https://new-esperanto.herokuapp.com/) ⬅️. The free servers on Heroku sleep when they are not in use, so please allow a few seconds for them to wake up! 😴

## Developers
- [Ali Ali](https://github.com/alibeniaminali)
- [Dougie Brown](https://github.com/Dougie-b)
- [Peter Bid](https://github.com/PeterBid)
- [Elena Gicheva](https://github.com/ElenaGicheva)

## Overview
![App Screenshot](https://i.imgur.com/kyoo5t4.png)
![App Screenshot](https://i.imgur.com/tAaTs7m.png)


## Table of Contents
- [Concept](#concept)
- [Get started](#get-started)
- [Project Brief](#project-brief)
- [Technologies Used](#technologies-used)
- [Installation instructions](#installation-instructions)
- [Planning and Wireframes](#planning-and-wireframes)
- [General Approach](#general-approach)
- [Day 1-9](#day-1)
- [Unsolved Problems](#unsolved-problems)
- [Features Wish List](#features-wish-list)
- [Key Learnings](#key-learnings)
- [Author](#authors)

## Concept
- A mobile-friendly Full-Stack app created using MongoDB, Express, React and Node.js (MERN) with CRUD functionality. As a group, we decided to create an app that allows its users to find language teachers from around the world. The users can also register as teachers and be contacted via email.
- Esperanto (/ˌɛspəˈrɑːntoʊ/ or /ˌɛspəˈræntoʊ/) is the world's most widely spoken constructed international auxiliary language. Created by Polish ophthalmologist L. L. Zamenhof in 1887, it was intended to be a universal second language for international communication, or "the international language" (la lingvo internacia). Find out more ➡️ [HERE](https://en.wikipedia.org/wiki/Esperanto) ⬅️

## Timeline
- 9 days

## Get started

#### You can register to the website or if you would like to experience the website with seeded data in it, you can log with the following:
- Email : ali@email.com
- Password : pass


## Project Brief
- 9 days to plan, build, and test our most advanced project to date with achievable scope and a focus on creating a professional finished product.
- Build a full-stack application by making your own backend and your own front-end.
- Use an Express API to serve our data from a Mongo database.
- Consume our API with a separate frontend built with React.
- Be a complete product with multiple relationships and CRUD functionality for multiple models.
- Have a visually impressive design.

## Technologies Used
### Database:
- [x]  MongoDB
### Backend:
- [x]  Node.js
- [x]  Express
### Frontend:
- [x]  JavaScript (ES6)
- [x]  React.js
- [x]  HTML5
- [x]  CSS3 + SASS
- [x]  React Bootstrap
### Dependencies:
- [x]  Axios
- [x]  JSONWebToken
- [x]  bcrypt
- [x]  mongoose-unique-validator
- [x]  react-router-dom
### Development Tools:
- [x]  VS Code
- [x]  Git + GitHub
- [x]  Insomnia
- [x]  Cloudinary
- [x]  Heroku
## Installation instructions
1. Clone our repo from GitHub onto your machine.
2. Use `yarn` or `npm` to install all dependencies from the `package.json` file.</br>
 
[Back to the top ⬆️](#idtext)

## Planning and Wireframes
### Front End and Back End
- If you like to see our plan in detail, please press the on image and it will take you to a separate page.
![App Screenshot](https://i.imgur.com/T5k1z57.png)
## General Approach
### Day 1
- We spent the first day going through different ideas and concepts and one of my teammates suggested we try and create a website that allows its users to find language teachers from around the world and contact them.
- My partners and I began by mocking up a basic wireframe for our Front and Back End and planning the look of our website by using [Escalidraw](https://excalidraw.com/). (above)
- We followed an Agile system for starting each day with a standup for the four of us, followed by a standup for the group leaders of each group on the course.
### Day 2
- We decided to work together on the Back End. Used Live Share and took turns typing the code, while two people were going through the plan, looking for typos, making sure all the models are connected correctly and looking into our notes if needed. The fourth person was writing the seed data to populate the site.
### Day 3 & 4
- We spent those two days finishing our backend, adding all the functionality and authentication, testing each RESTful route using Insomnia.
![App Screenshot](https://i.imgur.com/V6juMOp.png)
- Sending a POST request on Insomnia to Login
![App Screenshot](https://i.imgur.com/PhItk48.png)
- Sending a GET request on Insomnia to get information for a single teacher. We added the token received when we logged in as this page was a secure route.
![App Screenshot](https://i.imgur.com/w7iv4PN.png)

[Back to the top ⬆️](#idtext)
### Day 5
- We started Day 5 by adding a React front end to our project and divided up the router and component setup.
- For the styling, we decided to use [React Bootstrap](https://react-bootstrap.github.io/)
- As I was in charge of the overall styling of the website, I spent this day picking fonts from Google and potential colour palettes that we could eventually use throughout the entire application.
- After that I designed the logo of the website using [Canva](https://www.canva.com/) and created the favicon (website icon).
- ![App Screenshot](https://i.imgur.com/LC8CE6U.png)
- ![App Screenshot](https://i.imgur.com/WGJDAHs.png)
- One of my teammates added a filter that allows users to search for a teacher that teaches a specific language with a specific price range, which I find really important for the user.
![App Screenshot](https://i.imgur.com/0knGZAe.png)
 
[Back to the top ⬆️](#idtext)
 
### Day 6
- I added the nav bar and created a dropdown menu where the users can find more about the creators (us), our LinkedIn profiles and the main GitHub repository.
![App Screenshot](https://i.imgur.com/srhTQPP.png)
![App Screenshot](https://i.imgur.com/jU9dfko.png)
- After that I started styling both `Login `and `Registration` forms
![App Screenshot](https://i.imgur.com/qiL0Icy.png)
- After, I started searching for images that would fit our concept of online learning and started styling the Home/Index page.
 
[Back to the top ⬆️](#idtext)

### Day 7
- On that day, I kept working on the Home/Index page and went through a few different layouts until we were all happy with the final result
### Day 8
- Once I was ready with the Home/Index page, I moved to styling the entire individual teacher page
![App Screenshot](https://i.imgur.com/aUyTE9i.png)
- I suggested having a button that the users can click and to redirect them to an email address instead of a web page URL.
![App Screenshot](https://i.imgur.com/uQ1NN3r.png)
- Then styled the review form and buttons to post a review, delete teacher (if the user is registered as one) and edit teacher's info.
![App Screenshot](https://i.imgur.com/1IpbOJ4.png)
### Day 9
- We spent the last day testing our website and cleaning excessive code and console logs.
## Wins
- This is my first big project and I am really happy with the overall design and the fact that I managed to create this stylish and clean looking website.
- The login and registration forms.
- Making every page mobile responsive using media queries
 
[Back to the top ⬆️](#idtext)

## Features Wish List
- Teachers to be able to add their welcoming video on their profile
- Availability calendar and users to be able to book a lesson
- Adding a timestamp to the reviews, so users can see when every review was added

## Unsolved Problems
- We didn't have enough time to add a Profile page for the users so they can edit their personal information

## Key Learnings
- Learned to use group Git and handle merge conflicts.
- Daily stand-ups are very important.
- Cohesive and professional styling across the whole site is essential when creating a finished product.
- Collaboration - we got so much more done together than I could have done myself in a week.</br>
 
[Back to the top ⬆️](#idtext)

## Authors
- LinkedIn - [Ali Ali](https://www.linkedin.com/in/alibeniaminali/)
- Email - alibeniaminali@gmail.com
 
[Back to the top ⬆️](#idtext)
 
 




