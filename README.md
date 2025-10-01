Conference App (name TBD)

WHO ARE YOU BUILDING FOR
- people who would be interested in going to a tech conference
WHAT DO THEY WANT
- they want to know if a. the conference was worth it financially b. what to do at conferences c. what to look for in a conference for their particular goals d. what to do after a conference e. alternatives to conferences
WHAT IS THE BARE MINIMUM NEEDED TO FULFILL THE WANT FOR THE PERSONA
- blog post about conference
- video about conference
- easy to navigate through different information
- a way to see condensed info
- a way to see more detailed and in-depth info

# Table of Content

- [App Goals](#app-goals)
  - [Who Are You Building For](#who-are-you-building-for)
  - [What Do They Want](#what-do-they-want)
  - [What is the Bare Minimum Needed to Fulfill the Want for the Persona](#what-is-the-bare-minimum-needed-to-fulfill-the-want-for-the-persona)
- [Location Pins](#location-pins)
  - [UX](#ux)
  - [UI](#ui)
  - [Accessibility](#accessibility)
- [Post-Clicking a Location Pin Content](#post-clicking-a-location-pin-content)
  - [UX](#ux-1)
  - [UI](#ui-1)
  - [Accessibility](#accessibility-1)
- [Mini Conference Blog](#mini-conference-blog)
  - [UX](#ux-2)
  - [UI](#ui-2)
  - [Accessibility](#accessibility-2)
- [App Navigation](#app-navigation)
  - [UX](#ux-3)
  - [UI](#ui-3)
  - [Accessibility](#accessibility-3)

## App Goals
### Who Are You Building For
- people who would be interested in going to a tech conference
### What Do They Want
- they want to know if 
  a. the conference was worth it financially 
  b. what to do at conferences 
  c. what to look for in a conference for their particular goals 
  d. what to do after a conference 
  e. alternatives to conferences
### What is the Bare Minimum Needed to Fulfill the Want for the Persona
- blog post about conference
- video about conference
- easy to navigate through different information
- a way to see condensed info
- a way to see more detailed and in-depth info

# Main Features

## Location Pins

User should be able to click on a variety of map location pins - pins representing each location of conference I've attended - and display conference information/pictures respective to location

### UX

- User should be able to exit out of the focused location pins content by clicking on it again

> React state to toggle between each unique location to toggle on/off

- User should be able to exit out of the focused location pins content by clicking outside of the pin on any empty space/unclickable element on the site

> Add event listener to entire body of site, and with useEffect listen for click on site to check if it's a pin or not

- User should be able to click on another pin while already focused on a pin, updating the content shown for that respective location
> Update location pin react state to represent newly clicked location pin with unique location pin value ie. commitYourCode2025

### UI

- User should have a visual indication that the pin is clicked on/focused
> Use css property:focus and css className clicked
- User should have a visual indication that the pin is clickable
> Use css:hover and style cursor: pointer

### Accessibility

- For accessibility purposes, pins should be tab explorable
> One option is to make the pins buttons

> Another option is using `<area>` tags with href attributes and associated image in `<map>` tags

> Another option is using tabindex to make elements tabbable - along with adding function to handle enter/space bar click

- For accessibility purposes, pins should be able to be read by a site-to-speech reader (screen reader)

> If using buttons, we can leave as is - as long as the label is clear what its function does

> If using `<area>` tag, we must create a alt tag to make it readable by a screen reader

> If using tabindex, can leave as is - as long as the role/aria-labelled is labelled correctly

## Post-clicking a Location Pin Content

### UX

- CTA button should redirect to mini conference blog
> One option is to use the default `<a>` tag

> Another option is to use the `<Link>` provided by react router library

- Button should have visual indication it's clickable

> Use css:hover and style cursor: pointer

- Button should have visual indication that it was clicked
> Use css property:focus and css className clicked

### UI

- User should be able to see the following:
  - name of conference
  - city of conference
  - dates of conference
  - link to conference
  - one main picture of conference
  - brief description of conference
  - CTA button

> Wrap content with `<section>`, content using `<a>` for conference link, `<time>` for dates, `<span>` for city, `<h3>` for conference name, `<p>` for main content, `<img>` with `alt` tags for image, and `<button>` for button

### Accessibility

- CTA button should be clickable through tabbing
> Since `<button>` is clickable through tabbing by default, we can leave this be
- Pictures should have appropriate alt text to describe them
> `<img>` with `alt` tags for images

## Mini conference blog

### UX

- Button should send user back to main page
> Use `<a>` or `<Link>` from React router library to redirect user
- Button should have visual indication that it was clicked
> Use css property:focus and css className clicked
- Pictures should have appropriate alt text to describe them
> `<img>` with `alt` tags for images

### UI

- User will be able see the following content
  - price of conference ticket
  - price of travel/attending
  - my personal experience of the conference
  - going through the days
  - standout talks I attended
  - the tracks
  - the internal events
  - pictures of conference
  - link to conference
  - button to go back to main site

> Wrap content with `<article>`, content using `<a>` for conference link, `<span>` for prices, `<p>` for main content, `<img>` with `alt` tags for images, and `<button>` for button

### Accessibility

- Button should be clickable through tabbing

> Since `<button>` is clickable through tabbing by default, we can leave this be

- Pictures should have appropriate alt text to describe them
> `<img>` with `alt` tags for images

## App navigation

### UX

- User should be able to navigate between different conferences/locations based on the toggle button
> Wrap conferences/locations in `<nav>` in a `<ul>` list of `<li>` tags
- User should be able to toggle between locations/conferences with a button
> Use `<button>` tag and useState to toggle between displaying locations and conferences
- User should be able to scroll from left to right to find the conference they're looking for
> Use page numbers to represent the current number of elements shown in the nav bar, then with useState handle dynamically updating the current links being shown to the user and what is being hidden with slice in the array (list) of links
- User should be able to easily find the conference they're looking for
> If displaying name, display by alphabetical order, but if displaying location display by date of conference (for duplicate locations)
- Button should have visual indication it's clickable

> Use css:hover and style cursor: pointer

- Button should have visual indication that it was clicked

> Use css property:focus and css className clicked

- Links should have visual indication it's clickable

> Use css:hover and style cursor: pointer

- Links should have visual indication that it was clicked
> Use useEffect to check for URL domain parameter matching the current link then add clicked css className

### UI

- User should see a list of conferences/locations they can navigate through
> List of `<li>` wrapping around `<a>`/`<Link>` to redirect users to mini conference blogs
- User should see a button that toggles between conference names and locations
> Use `<button>` tag and clear label for usage

### Accessibility

- Button should be clickable through tabbing
> Since `<button>` is clickable through tabbing by default, we can leave this be
- Links should be clickable through tabbing
> Since `<link>` is clickable through tabbing by default, we can leave this be
