
[![Build Status](https://travis-ci.com/caputocode/wine-bar.svg?branch=master)](https://travis-ci.com/caputocode/wine-bar)

# Mistral Wine Bar and Shop

## UX

The Mistral wine bar and shop web application has been designed for people seeking information about a new real world wine bar which opened in Chester, UK last year. The site provides information about the bar, the story behind it and the opportunity to buy wine online.
As a user interested in wine, or new to Chester I want to be able to know what the bar is about. This provides relevant information about the atmosphere or ‘vibe’ of the bar itself. Straight away the user is presented with a landing page which informs them that Mistral Wine bar has in fact a ‘bar’, and a ‘wine shop’.
If the user clicks on the ‘bar’ they are directed to the ‘about us’ section. This page delivers a concise section on what Mistral wine bar is, and why the user should visit/buy wine.
Once at this part of the site, the user then has the opportunity to browse the site using a nav bar. As a user I want this to be clear and obvious what sections are available. The navbar provides users with links to the following pages;
Events: as a user I would want to know if the bar provides any exclusive use, live music or wine tastings. This information is provided here in a visually appealing way. The image used in the background on this page has been carefully chosen, aiming to entice the user by creating a ‘celebratory’ feel using fizz. This fits in well with the basis of the page, which has the main title of ‘special occasion?’.
Shop wine: as a user I would like to be able to buy wine from the website. I would like to see this presented in a clear way which shows the image of the bottle, information regarding the grape and alcohol content, along with price.
Search function: the site provides a clear search symbol in the nav bar. The placeholder informs the user of recommended search cues to aid with a successful search result. The site has been built to search for wine by grape, colour/type (ie red, white, rose, sparkling) and name of wine.

## Features
### Existing Features

Currently the website contains the following features:

* User login / Registration using Django's authentication feature. Password reset also available.
* User Profile Page containing Purchase history, and blogposts created by that specific user.
* Landing Page with option to view description about the Bar, or enter straight to the Wine Collection page (shop).
* About us page
* Wine collection page displaying all wine
* Search function in the navbar - able to search wine by grape, colour (ie red, white, rose, sparklng) and name of wine
* Events Page - informing users they are able to hire space / attend wine events, with active links to the Contact us page
* Contact Page - providing info on location, using google maps, hours of opening, and 

### Features left to implement

* I would like users to be able to delete their blogposts, at the moment this can only be carried out by admin, the superuser
* The addition of more wines
* More detail on the Profile Orders page, at the moment the table only contains wine purchased, and the quantity along with the date. A total would be beneficial, as well as a feature to re-order collection.
* A subscription model would improve the business model overall, creating a way for users to purchase monthly/quarterly etc boxes of wine



## Testing

The web app was tested continuously during development. This was done predominantly through django's own error template notifactions. Any errors that occurred in my code were revealed when typing 'run' in the console, and opening the link to the site on cloud9.
I used chrome developer tools constantly to ensure the look and feel of the website worked, and was responsive, testing the site on all devices.

## Testing User functionality
The following accounts have been created to use as an existing test:
username: heather
password: heather1@£

username: david
password: david1@£

username: polly
password: polly

## Testing Stripe
The ecommerce section of this site has been set up using <a href="https://stripe.com/gb">Stripe</a>. To test the payment works, follow the steps below:

1. Once items are in basket, proceed to checkout
2. Enter user details ()
3. Enter credit card number 4242 4242 4242 4242
4. Enter security code number 111
5. Enter expiry date (any date in the future)
6. Click Submit payment
7. Wait for notification message to inform of successful payment / error

nb. I had some issues implementing Stripe initially, and had to reorder my jquery in order for this to work

### Remaining Issues
I created a dynamic ‘add to basket / update basket’ button (inspiration from codepen). This works well on larger screens but did need some adjusting for smaller screens due to size. I addressed this issue by hiding the visibility of the button and creating a new simpler ‘update / plus’ button for mobile screens. This works fine on all devices in chrome dev, however in real world both seem to be visible on the android safari. I have not found a way round this yet due to time constraints, however this will need addressing in the near future.

## Credits

Content
•	The text used in the blogs has in parts been taken from the real blog of <a href="https://www.paulcaputo.co.uk/">Paul Caputo, with permission</a>.
•	The main content of the website has been taken from the original <a href="https://www.mistralwine.co.uk/">Mistral wine bar website</a>.

Media
•	The photos used in this site were obtained from <a href="https://www.pexels.com/">pexels</a>.
Acknowledgements

•	I received inspiration for this project from the original site, linked above.
