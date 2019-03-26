# ⚠️ Warning ⚠️

The following is a demonstration of a 100% biased opinion. Possible traces of sarcasm and resentment.

# Readme

Does Typescript protect you against runtime errors ?

Install : `yarn`
Run : `yarn start`

## What's here ?

This app is a simple html file using an index.js script created from a index.ts script.

There is also a fake api represented by a global value in the window scope named __THE_GLOBAL__.

The Typescript code uses the fake api and processes the data to produce an output.

## What does the app ?

The Run button executes the typescript code that processes __THE_GLOBAL__.

The other buttons mutate __THE_GLOBAL__.

Then, you can rerun the typescript to see that even if the types were correct in the beginning, you have no guarantee that the runtime will run as expected.

### Because Typescript has no way to save you from runtime errors
