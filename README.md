# node-passportjs

[passportjs](https://www.passportjs.org/)  
Simple, unobtrusive authentication for Node.js

React Social Login with Passport.js | React oAuth w/ Google, Facebook, Github
[https://www.youtube.com/watch?v=7K9kDrtc4S8](https://www.youtube.com/watch?v=7K9kDrtc4S8)  
[Source Code](https://github.com/safak/youtube/tree/react-social-login)

[Deploy Express.js app to Vercel](https://dev.to/hte305/deploy-express-js-app-to-vercel-38jb)  
[How to create and deploy an Express.js app to Vercel?](https://syntackle.live/blog/how-to-create-and-deploy-an-express-js-app-to-vercel-ljgvGrsCH7ioHsAxuw3G/)

## Demo

https://node-passportjs.vercel.app/api/product

## Debug

> TypeError: req.session.regenerate is not a function using Passport

npm install passport@0.5

[passport](https://www.npmjs.com/package/passport) 0.6.0 降版到 0.5.3

### vercel.app

This Serverless Function has crashed. 
500: INTERNAL_SERVER_ERROR

要改成一行

```js
router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: CLIENT_URL,
    failureRedirect: '/login/failed',
  })
);
```

```js
router.get('/google/callback', passport.authenticate('google', { successRedirect: CLIENT_URL, failureRedirect: '/login/failed',}));

app.listen(PORT, () => { console.log(`http://localhost:${PORT} Server is running!`);});

```
