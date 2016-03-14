# Scalable Frontend With Redux and Sagas

This project is an attempt to address the problem raised at
[slorber/scalable-frontend-with-elm-or-redux](https://github.com/slorber/scalable-frontend-with-elm-or-redux)
by [@sebastienlorber](https://twitter.com/sebastienlorber).

## Application Structure

This solution breaks the application down to smaller modules. A module
may depend on other modules, but coupling between them is at a minimum.

Each module exposes:

- Action creators
- One reducer function
- One root saga (optional)
- Selectors for querying data from module state
- One root Container (connected component)
- One root dumb Component (for possible reuse in other modules)

Modules can only use the API exported by other module's `index.js`
file (e.g. the public API). Component composition is done through
the use of dumb components and selectors. Coupling to other module's
state shape is not allowed.

For example, `randomGifPair.Component` Container uses `randomGif.Component`.
The required props of `randomGif.Component` are selected from the state
atom using `randomGif.selectors.getModel` which as the type:

```
getModel :: State -> randomGif.Model
```

This delegation of responsibilities allow modules to change their internal
implementation without breaking other modules, as long as the public API
is maintained.

For a better explanation on why I've organized it this way, please
read my [blog post](http://jaysoo.ca/2016/02/28/organizing-redux-application/)
on this topic.

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
