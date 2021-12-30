# Frontend Mentor - REST Countries API

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

<img width="1552" alt="Screen Shot 2021-12-30 at 2 31 01 PM" src="https://user-images.githubusercontent.com/60304502/147727375-4a149b98-086c-4751-a69f-869ea56a5529.png">
<img width="1552" alt="Screen Shot 2021-12-30 at 2 31 15 PM" src="https://user-images.githubusercontent.com/60304502/147727385-da4e61b8-ecf5-4d85-b934-ee7e7f843f8f.png">

### Links

- Solution URL: [GitHub Repo](https://github.com/Kyle-Atienza/rest-countries-api)
- Live Site URL: [Live Site](https://rest-countries-api-fem.netlify.app/)

## My process

### Built with

- [React(create-react-app)](https://reactjs.org/) - JS Library
- Sass
- [Rest Countries Api](https://restcountries.com/#api-endpoints-v2) - Data Source

### What I learned

I have experienced doing projects with react but all of those are just debugging and adding fetures, creating one from scratch did challenge me but it was a lot of fun to do.

Mostly I learned about React Router v6, and the use of axios for fetching data from the API. Also learned about the process of setting up a react app on netlify

### Continued development

This project is mostly functional but the theme toggler for light and dark mode haven't been implemented and I want to add it sometime in the future. Another issue is the way how data is been used throughout the app, since every page a fetch is happening it greatly affects the performance especially on loading time, I wanted to implement redux to have a central datastore so that fetching data will only happen once.

### Useful resources

I can't find the specific GitHub repo that I get solutions from when I'm stuck.

## Author

- Frontend Mentor - [Kyle-Atienza](https://www.frontendmentor.io/profile/Kyle-Atienza)
- Twitter - [@AtienzaKyle](https://twitter.com/AtienzaKyle)
