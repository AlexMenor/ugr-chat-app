# UGR-CHAT-APP

![ugr-chat-app home](https://i.postimg.cc/vTBvP2MF/Screen-Shot-2019-08-31-at-04-40-14.png)

## What is it?

I was thinking in the amount of questions that I had in my first year in college... This app is made to match newbies and anybody willing to help.

It's called UGR-CHAT-APP because [UGR](http://ugr.es) is where I study, but I guess that it'd be helpful in any other (feel free to fork it and rename it).

## How does it work?

1. Enter your name and choose your role
1. You'll get into a queue until you are matched with someone from the other role
1. You'll see a chat then, just talk!

## How is it made?

### Backend

I use [express](https://www.npmjs.com/package/express) to serve the frontend and [socketio](https://www.npmjs.com/package/socket.io) to emit and receive events to and from the client side.

### Client

Perhaps it's overkill but I like [vue](https://vuejs.org/) and [vuetify](https://vuejs.org/) to get things going on quickly.

## Test it

[It's live in heroku](http://ugr-chat-app.herokuapp.com) (it's a free server, the response is going to be slow)

## Test it locally

```bash
# Install and start backend

npm install && npm run dev

# Install and start client

cd client && npm install && npm run serve

```

## More screenshots

![ugr-chat-app chat](https://i.postimg.cc/MTtDm2Cm/Screen-Shot-2019-08-31-at-04-39-59.png)
![ugr-chat-app modo oscuro home](https://i.postimg.cc/3R31GJcw/Screen-Shot-2019-08-31-at-04-40-43.png)
![ugr-chat-app desconectado](https://i.postimg.cc/k5QwDtwZ/Screen-Shot-2019-08-31-at-04-41-05.png)
