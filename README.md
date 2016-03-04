# Scalable Frontend With Redux and Sagas

This project is an attempt to address the problem raised at
[slorber/scalable-frontend-with-elm-or-redux](https://github.com/slorber/scalable-frontend-with-elm-or-redux)
by [@sebastienlorber](https://twitter.com/sebastienlorber).

**Note:** More cleanup is needed with better documentation. Maybe some tests too? ;)

## Demo

See a demo of the running app here:

[http://jaysoo.github.io/scalable-frontend-with-redux-saga-jaysoo/](http://jaysoo.github.io/scalable-frontend-with-redux-saga-jaysoo/)

## Running App

```
npm install
npm start
```

Browse to [http://localhost:8080](http://localhost:8080).

- The GIFs components allows you to add a GIF for given topic.
- The toggle button can be *on* or *off*.
- The counter can be *incremented* or *decremented*.
- Whenever a new GIF is fetched (either by adding or requesting more),
  the counter is incremented by *1* if button is off or `counter < 10`,
  otherwise it is incremented by *2*.
