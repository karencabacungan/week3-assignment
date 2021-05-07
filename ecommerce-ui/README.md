# JSCRIPT 320 B Week 3 Assignment: React State

This assignment was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Due Date

Thursday, 6 May 2021 @ 11:59pm

## Requirements

For this UI, we'll be using some fake data that represents a collection of vacation rentals (Airbnbs). Additionally, the UI appearance will be up to you, although you're free to use other websites and designs as inspiration. Frameworks such as Material UI and Bootstrap are also allowed, although note that using either of those frameworks may involve additional learning and setup.

Ensure that your UI meets the following criteria:

* Renders the provided data using React components
    * Data will be provided in `_data/airbnbs.json`
    * Copy the JSON files to your project and import them into a component like so:
      ```js
      import airbnbs from './airbnbs.json';
      ```
    * At minimum, your UI should display the title, image, and payment information for each Airbnb.
* Uses React components that...
    * Are modular/reusable. (Specifically, each vacation rental should be its own component. You may make more components where it makes sense to)
    * Use the appropriate loops/conditionals to map and display components.
    * Use propTypes to define props for each component, if any.
* Offers a "Shopping Cart" functionality where you can add a vacation rental to a shopping cart. This shopping cart should...
    * Be displayed next to the vacation rentals
    * Allow the user to remove a vacation rental from the cart if they change their mind
    * Display the total payment due based on the vacation rentals in the cart
* In order to facilitate the "Shopping Cart" functionality, each vacation rental should have a button that allows the user to add a vacation rental to the shopping cart.

## Bonus

* Make the shopping cart hideable/showable, in order to avoid clutter. This could be implemented as a hide/show cart button.
* Create a UI that allows the user to enter their own vacation rentals. This should...
    * Allow the user to view a form
    * Allow the user to enter vacation rental information, such as the title, image, price, etc.
    * Add the new rental to the list of vacation rentals being displayed