<img src="./client/public/logo.svg" alt=logo width="200">

# Roku Flashback

Watch Roku Flashback movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.

## Description

This project is a simulation website that is similar to Netflix. The user should be able to login, filter and select a movie, tv show, or audio based on user profile (adult or kids). Some restrictions will be apply to some content based on age. The UX/UI should update based on the user (children/adults), render the apporopriate theme on login.

## Built With

:pushpin: Frontend: HTML CSS SASS Vue.js 

:boom: Backend: Node.js Express.js

## How to Run

:triangular_flag_on_post: Use Mamp/Wamp  

:one: `database/sb_flashback.sql` -> import database -> change database credentials in `config/userConfig.js`

:two: Download audios and videos from https://drive.google.com/drive/folders/1lBXmhJgyTZY2NklaCRGZoO0nvKCRqys0

-> Put the `media` folder under `client/public` :exclamation:

:three: Run `npm run start-dev` -> Go to `localhost:5051`
```
|- client
    |- public
        |- media
            |- banners
            |- covers
            |- movies
            |- music
            |- tvshows
```

Note: Develop only - `sass --watch client/assets/sass:client/src/css`

## Folder Structure Overview

```
|- assets (prototype)
|- client (this is frontend stuff)
    |- assets (fonts, sass)
    |- public (images, videos, audios)
        |- icons
        |- media
        |- ...
    |- src
        |- css
        |- js
            |- components
            |- pages
            |- main.js
        |- index.html
|- config
|- database
|- routes
|- server.js 
```

## Design Prototype

Design Prototype can be viewed here. [Live Prototype](https://xd.adobe.com/view/7ed57ab0-b62b-4b64-864b-24697dfb9ca3-2b86/)

## Design & Development Notes

Design Concept can be viewed here. [Des Concept](https://docs.google.com/document/d/1jPZc9u7oIh5DmTiK0pBw7ZhSFcwpA0MC50Vo3vsWNXM/edit?usp=sharing)

Development Road Map can be viewed here. [Dev Road Map](https://docs.google.com/document/d/1oaN2rdKpMfOPBbspM_GIuxoG2myEirmPCmX2ECBMGTI/edit?usp=sharing)


## Authors

* **Elaine Balgos** - (https://github.com/ElaineBalgos)
* **Shan-Li Wang** - (https://github.com/kimberly332)

## Future Plan

* Finish Banners (random movies/tvshoes/music with details and banner image)
* Add a search filter, the user can search a movie by movie’s name, years or categories.
* Add filter by genres.

### License

Copyright © 2021, [Elaine Balgos](https://github.com/ElaineBalgos) / [Shan-Li Wang](https://github.com/kimberly332).
Released under the MIT License.
