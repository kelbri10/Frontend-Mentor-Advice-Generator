# Frontend Mentor - Advice Generator App 

## Table of Contents 

- [The Challenge](#the_challenge)
- [Process](#process)
- [Read More](#read_more)

## The Challenge 

Build out the design provided by Frontend Mentor using the Advice Slip API. Users should be able to: 
    - View the optimal layout for the app depending on their device's screen size
    - See hover states for the interactive element (the dice button) on the page
    - Generate a new piece of advice by clicking the dice icon

## Process
I utilized HTML, CSS, and Vanilla Javascript to craft my solution to the prompt. First I tested the API to understand the data that is being returned on click. This helped me to know how to access the object and call the id number and the advice string to appropriately display them to the user.

![Screenshot of live version of advice generator](/images/advice_generator_ss.PNG)

One challenge I faced was the API's cache prevented the user from being able to receive a new piece of advice upon click. The API would send the same advice repeatedly. To resolve this issue, I added this line of code to tell the api to ignore caching and allow for constant refresh. This solution is viable because the spamming of the button is meant to help with refresh but ignoring cache in larger projects can pose greater issues and cause potential overloads.

## Read More 
This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.