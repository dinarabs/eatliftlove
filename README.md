# EatLiftLove
Welcome to EatLiftLove, the ultimate destination for CrossFit enthusiasts. Dive into our daily featured Workout of the Day 🏋🏻‍♀️, explore comprehensive analyses of essential CrossFit movements 🔬, and discover a curated selection of recommended CrossFit gyms 📍 located in the vibrant city of Berlin, Germany 🇩🇪. Whether you're a seasoned athlete or just starting out, EatLiftLove is your go-to resource for all things CrossFit.

<p float="left">
  <img src="./client/src/assets/eatliftloveHome.png" width="100%" />
</p>

## 🚀 Getting started
To install and use this project, take the following steps:

First, make sure you have **Node.js** and **npm** installed on your local machine. Follow the steps written [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

First things first, populate your database with predefined script: 
```ts
// run this in your server's console
npm run seedDB
```

Next, in order to be able to use Google Maps and Unsplash APIs, you need register at [Google Developer Console](https://console.developers.google.com/project) and [Unsplash Developers](https://unsplash.com/developers), then generate the following env vars and store in your local `.env` file in `/client` folder:

```ts
VITE_GOOGLE_MAPS_API_KEY=xxx
VITE_MAP_ID=xxx
UNSPLASH_ACCESS_KEY=xxx
```
IMPORTANT: .env mentioned in .gitignore so it won't be tracked. 

Finally, install all necessary dependencies on both server & client sides with `npm install` or `npm i`.

Now you are ready to launch the app:
```ts
// 	inside server folder
npm start
// 	inside client folder
npm run dev
```

Voila!✨


## 🛰️ Tech Stack
The app's development involved the following technology stack:

- **Backend:** Node.js in conjunction with ExpressJS, and MongoDB with Moongoose for the database.
- **Frontend:** React Vite paired with NextUI library and sprinkles of TailwindCSS.
- **External APIs:** Google Maps API, Unsplash API, Youtube videos.

## 🛸 Contributors

This application was built during my time at the coding bootcamp Codeworks as part of solo project sprint (1 week). [Here](https://youtu.be/t4Bx4MZrSRg) you can find a demo recording. If you would like to contribute, please feel free to send me a private message to my [LinkedIn profile](https://www.linkedin.com/in/dinara-bekeshova/)
