# Celtic Tours code institute Google Maps API
## Overview

This web site was set up for the fictional company Celtic tours. Its purpose was to allow anyone planning a holiday in the British Isles, to search for a city
in one of the 5 countries Ireland, Northern Ireland, Scotland, England or Wales. I have Autocomplete functionality in use so that when the user start typing
a city on the input box, they will get suggesting of different cities associated with that country. By selecting one of the search types i.e. Hotel, Restaurant, bar or site seeing
activities and pressing submit the google map would pan to the location and highlight several of the selected type within that area e.g. hotels with an
appropriate icon. To get more information on this venue click on the icon and a pop-up window will appear with the following information Icon (indicator to type
of venue. may be different than type chosen as can be more than one type for example and Hotel, may also have a bar and restaurant) , Name, Address, Website
link and phone number and venue rating. If you click on the website link the sites website will open in a separate tab.
Then through the form they could contact the company who would either respond to the customer or carry out a booking on the customers behalf. This website was 
created to be viewed over different devices from mobile to laptop. It was created with a mobile first approach. The web site used web safe colour palette. I
avoided using bootstrap just to improve my CSS.

## UX

### What is this website for?
This website was created for anyone planning a holiday in the British Isles. It could be used by persons of any age planning to holiday in either one of the
countries or to all the countries. It allows the user to view the different cities and gives the option to see the main attractions at that site a tourist would
be interested in i.e. Accommodation, restaurants, bars and tourist attractions of interest before booking. Once the user has an idea of the locations, they are
going to they can submit a request to book through the website or if any queries submit a request through the form.

### User Stores
This site is used by anyone that is planning a holiday in the British Isles. It could be anyone from students backpacking or a retired couple.

**Existing and New fans.**

* Tourists should be able to select any city in the British Isles.
* Tourist should be able to see the all potential accommodation at that location within a kilometre of the centre of the city.
* Tourist should be able to see the all potential Restaurants at that location within a kilometre of the centre of the city.
* Tourist should be able to see the all potential Bars at that location within a kilometre of the centre of the city.
* Tourist should be able to see the all potential Tourist attractions at that location within a kilometre of the centre of the city.
* Tourist should be able to submit any questions they have regarding the location or any of the venues displayed on the map.
* Tourist should be able to submit a booking request for any of the venues displayed on the map.

In the design of this web page I decided to use Balsamiq to create my wire frames. I did two one for mobile and the other for desktop. Both can be seen under 
assets\wire frames folder within the project.

### How does it work

## Features
 
### Existing Features

* top of page left
    -Provides the search attributes that allows you to select country, choose type of place you are looking for and search for a city within that country.

* Google API autocomplete technology
    -As the user types in, it offers suggested cities based on the country selected i.e. if the person selected Ireland and the user typed in G to begin, 
     it would recommend cities beginning with G e.g. Galway. 
    
* top of page right
    -Displays map. Will move to country then city as selected and display the different venues in that area based on your input selection

* About
    -text that provides information on what the web site is for and how it works.
    
* Icons
    -There is a different icon used for each of the 4 different types of search regarding Hotels, Bars, Restaurants, 
     places of interest and one for showing the centre of the city. Once an icon is clicked it will provide a popup box with more information about the venu will
     show up.

* Contact form
    -form to allow users to submit queries or request booking through the company for any of the venue on display.

### Features Left to Implement
    -Would like to add a photo to information window related to the icon.

## Some the tech used includes:
- **HTML**, **CSS**.
  - Base languages used to create website

  - [Cloud9](https://aws.amazon.com/cloud9/)
    - We use **Cloud9** to build our web pages
  - [Google-fonts](https://fonts.google.com/m)
    - Using **Google-fonts** to get use of fonts
  - [emailjs](http://www.emailjs.com/)
    - We use **emailjs** to allow us receive e-mails with the detials once the form is submited
  - [Google-Maps](https://developers.google.com/maps/documentation/javascript/tutorial)
    - Using **Google Maps** to allow us display maps based on location and add icons for the different venues of interest.
  - [GitHub](https://github.com/)
    - Using **GitHub** a web-based hosting service for version control using Git


## Testing
### Manual testing
- All internal links have been checked and work correctly.
   - **About** link, moves to about section and hover effect works correctly
   - **Contact** link, moves to Contact section and hover effect works correctly
   - **Back to top of page** link, moves to Top section and hover effect works correctly
- Search form
    - Drop down box works as expected.
        -**Ireland** Pans Map over Ireland when selected.
        -**England** Pans Map over England when selected.
        -**Wales** Pans Map over Wales when selected.
        -**Scotland** Pans Map over Scotland when selected.
        -**N. Ireland** Pans Map over N. Ireland when selected.
    - Radio buttons work, Once the submit details button is selected.
        -**Bars** The Bar icon is dropped on the map to show the location of the bars on the area. Works as expected.
        -**Restaurants** The Restaurant icon is dropped on the map to show the location of the bars on the area. Works as expected.
        -**Hotels** The Hotel icon is dropped on the map to show the location of the bars on the area. One issued identified is except in case of smaller locations the hotel option places an icon for businesses that may not be a hotel. For cities it is okay.
        -**Tourist Attractions** The Tourist Attractions icon is dropped on the map to show the location of the bars on the area. Works as expected.
    - Search input box and Autocomplete work as expected (Could not narrow autocomplete to country level, only as go as low as UK. That is why you get English 
      cities proposed even if you had selected Wales, Northern Ireland or Scotland as your country). if city left blank will get error message on screen.
    - Submit button works as expected. Pans to city location and drops icons based on type selected. If no venues of that type available, then will receive error message

- Contact form tests. All work as expected
    - Name is a required field, error message displayed if left blank.
    - email is required field, error message displayed if left blank.
    - details is a required field, error message displayed if left blank.
    - Submit Button clears the screen.
    
- Site viewed and tested in the following browsers (all work as expected):
  - Google Chrome
  - Mozilla Firefox    
  - Opera


### Site has been tested on mobile, tablet and laptop devices as well as testing on chrome for the different sizes.

### Navbar: 
- Stays the same for all devices

### Main page
- On small screen the map displays under the search form. On larger screen it is displayed at the right hand side of the search form
- The about section and the Contact section stay the same on all screens i.e. the contact form will display under the about section.

### Footer 
- Stays the same for all devices


# Deployment

This web site is deployed on the GitHub platform.
https://johnmellaley.github.io/my-second-project/

# Credits

# Media
## Photos       
### Image background on search form   
- travel.png was obtained from www.freepik.com

