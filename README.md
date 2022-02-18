
# TravelLogic

Have you ever created a spreadsheet on Excel to plan out your 
vacation and timeblock each day so you can optimize your 
vacation to its full potential? Or even better, have you ever 
struggled to decide on points of interests in a new city? You 
can finally say goodbye to those tidious tasks and have pre-made
plans available to you with just a few clicks. 



Your first click is here ➡️ [Link To Deployed Application](https://travel-logic-frontend.herokuapp.com/)

## Tech Used

- MERN
- Heroku
- MongoDB Atlas


## Installation

To run my application locally:

```bash
  git clone <frontEnd-repo-url>
  cd <fronEnd-repo>
  npm init -y
  npm start
  --------------
  git clone <backEnd-repo-url>
  cd <backEnd-repo>
  npm init -y
  nodemon
```

## User Stories

- As a user, I want to be able to search a destination I am visiting and then see what are the most popular locations in that area so I can get a better visual of what all the activity options I have during my visit.
- As a user, I want to be able to see pricing information about each location so I can plan my budget accordingly.
- As a user, I want to be able to post pictures from the vacation as well as see other trending posts.
- As a user, I want to be able to like/dislike/comment on other users' posts.
- As a user, I want to see a time efficient route on the map based off all the hotspots in my WishList.
- As a user, I want my WishList printed out so I can recall all the places I have added to the list.


## Wireframes

[Link to Wireframes](https://www.figma.com/file/SXkM1H6rj35gZUIwY22d8O/TravelLogic?node-id=0%3A1)
## HTTP Methods

GET 
- Hotspots in the area once user has provided the city name.
- Trending posts -- for now I'll have it in a reverse list since there will not be many likes and all.
- Once the user hits submit, app will retrieve all the places user has selected and show it on the map and as a list.
POST 
- Once the user clicks "Add to List", app will post all the places and its data in WishList.
- User can like/dislike a post.
PUT
- User will be able to adjust the vacation days -- maybe?
DELETE
- User can remove a hotspot from their WishList.
## Roadmap


- User Sign-in / Register

- Social Feed - Users will be able to post photos and interact with others' posts with likes / dislikes / comments.

- User's Plan Database - User should be able to store a plan in the user database linked to their account and retrieve it whenever they like without it being adjusted.

- Plan Edits - User should be allowed to delete a specific POI from the plan or replace it with a different POI.
## 🔗 API Docs
- [Triposo](https://www.triposo.com/api/documentation/20220104/examples)
- [GoogleMaps Autocomplete](https://www.linkedin.com/)
- [Mapbox GL JS](https://twitter.com/)

