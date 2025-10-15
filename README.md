ConfExplorer

# Goals

## Who are you building for?

- people who would be interested in going to a tech conference

## What do they want?

- they want to know if a. the conference was worth it financially b. what to do at conferences c. what to look for in a conference for their particular goals d. what to do after a conference e. alternatives to conferences

## What is the bare minimum needed to fulfill the want for the persona?

- easy to navigate through different information
- a way to see condensed info
- a way to see more detailed and in-depth info

# Table of Content

- [App Goals](#app-goals)
  - [Who Are You Building For](#who-are-you-building-for)
  - [What Do They Want](#what-do-they-want)
  - [What is the Bare Minimum Needed to Fulfill the Want for the Persona](#what-is-the-bare-minimum-needed-to-fulfill-the-want-for-the-persona)
- [States](#states-prev-known-as-location-pins)
  - [UX](#ux)
  - [UI](#ui)
  - [Accessibility](#accessibility)
- [Post-Clicking a USA State Content](#post-clicking-a-usa-state-content)
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
  - the conference was worth it financially
  - what to do at conferences
  - what to look for in a conference for their particular goals
  - what to do after a conference
  - alternatives to conferences

### What is the Bare Minimum Needed to Fulfill the Want for the Persona

- blog post about conference
- video about conference
- easy to navigate through different information
- a way to see condensed info
- a way to see more detailed and in-depth info

# Main Features

## States (Prev known as location pins)

User should be able to click on a variety of map states - representing each location of conference I've attended - and display conference information/pictures respective to location

### UX

- User should be able to exit out of the focused states content by clicking on it again

> React state to toggle between each unique location to toggle on/off

- User should be able to exit out of the focused state content by clicking outside of the state on any empty space/unclickable element on the site

> Add event listener to entire body of site, and with useEffect listen for click on site to check if it's a state svg or not

- User should be able to click on another state while already focused on a state, updating the content shown for that respective location
  > Update location USA state react state to represent newly clicked USA state with unique USA state value ie. commitYourCode2025

### UI

- User should have a visual indication that the pin is clicked on/focused
  > Use css property:focus and css className clicked
- User should have a visual indication that the pin is clickable
  > Use css:hover and style cursor: pointer

### Accessibility

- For accessibility purposes, pins should be tab explorable
  > One option is to make the pins buttons

> Previous assumption: (Another option is using `<area>` tags with href attributes and associated image in `<map>` tags) Have learned that map and area doesn't quite work the way I imagined it would

> Another option is using tabindex to make elements tabbable - along with adding function to handle enter/space bar click

- For accessibility purposes, states should be able to be read by a site-to-speech reader (screen reader)

> If using buttons, we can leave as is - as long as the label is clear what its function does

> Previous assumption: (If using `<area>` tag, we must create a alt tag to make it readable by a screen reader) Have learned that map and area doesn't quite work the way I imagined it would

> If using tabindex, can leave as is - as long as the role/aria-labelled is labelled correctly

## Post-clicking a USA State Content

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

# Building Features Notes

## USA Map

Problem: Needed to make sure it was interactable map of the USA states and explorable using the keyboard using either the tab or arrow keys and clicking on them with the space or enter key

First approach:

Initially started with the <map> and <area> html tags, thinking that I would overlay a USA map graphic and creating the clickable areas using the <area> coordinates attribute.

But considering how inefficient this would be time-wise by determining each individual US state coordinates, I opted to find a npm package that would handle the interactions of the USA states. 

Second approach:

Doing some online research, I ended up going with the `@mirawision/usa-map-react` package due to the other packages not being supported as of writing this README.md.

While I was able to find a solution to making the USA map interactable, I couldn't make it tabbable with the keyboard for accessibility users, so I initially created button elements;however, this caused the design of the map not to look as good visually with the buttons overlaying on top of each individual state.

Final approach:

I created a `ref={usaMapTabbingKeyboardContainer}` to create a reference to the `<div>` element wrapping around the `<USAMapLib>` component, allowing us to interact with it later in the code (which is what we want to simulate tabbing and keyboard interactions with the USA map).

By defining our tabbing and keyboard logic in our useEffect hook, we're able to add them to our svg and path elements after rendering the component.

## Networking

If users are using this app to find conferences and conf info, the next step would be to have the same users use the same app to network with people as well to reduce the need to download a new app/use a new app.

What does this look like?
- user login/auth
  - to connect data in respect to the user that's using the device/app
  - logout/login/signup
  - demo account for demo purposes
- User Profile
  - user profile should display number of friends/connections
    - twitter or reddit scroll UI/UX?
  - connections/friends should be able to view linkedin
    - li icon
  - should be able to view connections/friends convos user has had with them
    - after clicking on their profile, you can view convos you've annotated(should be like to do app notes)
  - user can add checkmark to coffee label to friends/connections to indicate had coffee chat with them
    - clickable button to toggle between had/didn't have coffee chat (maybe after clicking on user profile to deter on accidental clicking on it?)
  - user can add labels from where they met them at - meetup/conference/online and where ie. CYC 2025
    - after clicking the user profile, list of labels should display with button to add more labels
  - user can add bookmark connections/friends to push them on list of people to message (what should I call tihs)
    - bookmark button on user profiles on dashboard doom scrolling
  - user can select a conference from usa map and add to "currently attending," or add the conference straight from their profile
    - only display this option if a user logged in
  - based on dates of conference, app will automatically switch to "attended" list of conferences based on current date
    - use systems date to compare dates to determine switching from currently attending to attended
  - user should be able to search for any of their friends/connections
    - use data set of friend/connection names to find person based on search results
    - use data set of friend/connection company to find person based on search results
    - use data set of friend/connection state/country to find person based on search results

## Auth setup

Loading

Why not use `React.Suspense`, but use an explicit react state to handle loading for `supabase.auth.getSession` and/or `supabase.auth.onAuthStateChange`?

Because the logic for checking if there is a user logged in right now on the first render of the App and/or checking if there was any changes to the user auth in real time are both in a `useEffect` hook, which triggers after the app is finished with its initial render. 

Why are we placing our supabase logic like `supabase.auth.getSession` and/or `supabase.auth.onAuthStateChange` in a `useEffect` hook?

We want to accomplish these operations in a `useEffect` hook because we want to keep our React app during the rendering phase pure from asynchronous calls or side effects.

Why not place `session` and/or `loading` in the dependency arrays in the `useEffect` hook since they're changing, wouldn't we want to watch state values/values that are changing dynamically?

`useEffect` triggers after React finishes its rendering phase, triggering our two supabase promise methods thus updating the session and loading data with `setSession` and `setLoading` state updates. And since these values have updated, React would naturally re-render. However, if we place `session` and/or `loading` in our dependency arrays, React would identify that these values have changed, thus re-triggering `useEffect` entire logic flow and leading to a infinite loop.

## Database setup

Supabase

> Had to force other packages that use React to react v18.3.1 due to Supabase using that version of React and being incompatabile with the other packages using react v.19.1.1