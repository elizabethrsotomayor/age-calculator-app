# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://github.com/elizabethrsotomayor/age-calculator-app](https://github.com/elizabethrsotomayor/age-calculator-app)
- Live Site URL: [https://elizabethrsotomayor.github.io/age-calculator-app/](https://elizabethrsotomayor.github.io/age-calculator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learned how to get the difference between two dates using JavaScript Date objects and how to handle input validation outside of using an alert box. I also learned how to change the border color of input text fields, and how to change the border color of input fields on focus. 

### Continued development

I want to add an animation effect to the numbers when the form is submitted as the bonus suggests. I would like to try using a framework such as React.js in the future.

### Useful resources

- [StackOverflow Difference between two dates JavaScript](https://stackoverflow.com/questions/17732897/difference-between-two-dates-in-years-months-days-in-javascript) - I used this to build the `calcTime` function to find the difference between two dates.
- [GeeksforGeeks How to Display Error Without Alert Box](https://www.geeksforgeeks.org/how-to-display-error-without-alert-box-using-javascript/#) - I used this to style the input validation when the date is incorrect.

## Author

- Website - [Elizabeth Sotomayor](https://github.com/elizabethrsotomayor)
- Frontend Mentor - [@elizabethrsotomayor](https://www.frontendmentor.io/profile/elizabethrsotomayor)
