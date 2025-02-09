# Tailwind CSS Purge Issue with Dynamic Classes

This repository demonstrates a bug where Tailwind CSS's purge functionality removes classes added dynamically via JavaScript.  The problem arises because the purge process happens before the JavaScript has a chance to add the classes, effectively making them disappear.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the button; initially it will not have the expected styles.

## Solution

The solution involves configuring Tailwind's purge to explicitly include classes generated via JavaScript.  This usually means adding a custom purge function or updating the `content` property in `tailwind.config.js` to include the right selectors.

## How to fix

The solution is implemented in `bugSolution.js`. Check this file for a working implementation that prevents dynamic class removal.