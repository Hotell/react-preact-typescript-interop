# React - Preact Typescript interop

> What is this all about ?

This repo contains custom `preact` and `preact-compat` type definitions,
which are needed for any real life application using `Preact` + `React` libraries with Typescript

> Why is this here ?

As preact team is kinda too slow to accept any extensive TS type defs tweaks, customization is needed on your own.

> Oh btw did I mention that we use this setup in production for last 6 months. Works like a charm ;) ( although many days were spent for figuring things out, but the outcome is magnificient, well I meant 100% type safe code ;) )

Good news though! You don't need to look any futher. Just checkout this sh*t and Copy Pasta! Pasta! Obey your Master. Master! 🎶🖖

## Interop libraries

- preact-compat ( custom definitions which extend Preact types )
- react-router v4 (✌️)
- react-redux (🤘)
- react-18next ( includes custom implementation of latest version )
- redux-form ( with prop type extension for custom Field types yay! )
- monkey patched React JSX types to allow `class` HTMLAttribute



