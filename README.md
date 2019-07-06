
[![Build Status](https://travis-ci.com/caputocode/wine-bar.svg?branch=master)](https://travis-ci.com/caputocode/wine-bar)

# Mistral Wine Bar and Shop

The Mistral wine bar and shop web application has been designed for people seeking information about a new real world wine bar which opened in Chester, UK last year. The site provides information about the bar, the story behind it and the opportunity to buy wine online.

## UX

As a user interested in wine, or new to Chester I would want to know what the bar entails. This provides relevant information about the atmosphere or ‘vibe’ of the bar itself. The web app contains an initial landing page which is presented to the user straight away. This informs them that Mistral Wine bar has in fact a ‘bar’, and a ‘wine shop’.
If the user clicks on the ‘bar’ they are directed to the ‘about us’ section. This page delivers a concise section on what Mistral wine bar is, and why the user should visit/buy wine. Once at this part of the site, the user then has the opportunity to browse the site using the nav bar. As a user I want this to be clear and obvious what sections are available. The navbar provides users with links to the following pages;

Events: as a user I would want to know if the bar provides any exclusive use, live music or wine tastings. This information is provided here in a visually appealing way. The image used in the background on this page has been carefully chosen, aiming to entice the user by creating a ‘celebratory’ feel using fizz. This fits in well with the basis of the page, which has the main title of ‘special occasion?’.

Shop wine: as a user I would like to be able to buy wine from the website. I would like to see this presented in a clear way which shows the image of the bottle, information regarding the grape and alcohol content, along with price.
Search function: the site provides a clear search symbol in the nav bar. The placeholder informs the user of recommended search cues to aid with a successful search result. The site has been built to search for wine by grape, colour/type (ie red, white, rose, sparkling) and name of wine.

Menu: as a user I would want to be given an example of what is served at the bar. This page contains a visually appealing display of wines on offer by the glass, and the 'nibbles' that Mistral provides, with reference to the fact that the menu changes frequently. This menu is highlighted to encourage users to visit this page based on the theory if a user can view a menu they are more likely to try the bar/shop. 

Blog page: as a user I would like an interactive component to the web app, by being able to submit blogposts this gives a 'community' feel to the website. This can be controlled by the superuser and be deleted if inappropriate etc. I would also want to be able to edit my posts.  

If, as a user i was logged in, I would want to be able to:
* view my profile and look at any previous purchases
* view any blogposts I had created, along with an opportunity to create more with ease
* add items (wine) to my basket
* view my basket
* proceed easily to checkout, with a summary of my order and a total sum to pay 
* checkout easily with notifaction that my payment has been successful

If, as a user I was not logged in, I would want to be able to:
* navigate to a login/registration form quickly
* browse wines
* access informative parts of the website such as 'contact us/about/events etc' pages


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
* Contact Page - providing info on location, using google maps, hours of opening, and a contact form  

### Features left to implement

* I would like users to be able to delete their blogposts, at the moment this can only be carried out by admin, the superuser
* The addition of more wines
* More detail on the Profile Orders page, at the moment the table only contains wine purchased, and the quantity along with the date. A total would be beneficial, as well as a feature to re-order collection.
* A subscription model would improve the business model overall, creating a way for users to purchase monthly/quarterly etc boxes of wine
* implement EmailJS to create communication between the company and the user.

## Technologies used

Technology | Use in Project
--- | ---
HTML5 | Used throughout web app to build the foundations
CSS3 | Styling front end of project 
Javascript/JQuery | DOM manipulation, google map implementation and activating Bootstrap elements
Bootstrap | Opensource framework for developing the front end of the site
Font Awesome | Provides icons throughout the site including socials and login/register etc
Django | Framework built on python using standard forms, models and views and used for authentication purposes 
Stripe | Used to process payments
Amazon Web Services S3 | hosting purposes.
Git | version control.
Heroku | deployment/hosting project

## Testing

The web app was tested continuously during development. This was done predominantly through django's own error template notifactions. Any errors that occurred in my code were revealed when typing 'run' in the console, and opening the link to the site on cloud9.
I used chrome developer tools constantly to ensure the look and feel of the website worked, and was responsive, testing the site on all devices.
Friends and family were asked to test site to ensure the user experience was positive. Good feedback was received and logins and registrations/blogposts were successful. This did reveal an issue with users adding to basket when they were not logged in, sending the user to login page (with use of @login_required) however upon login an error was thrown. I did not solve the issue directly but created a work-around by addding template language in 
Error messages display when user actions fail such as registration/login/payment/forms.

This project was manually tested continuosly throughout the project. This took place in chrome developer tools and the site has been 
tested on several screen sizes to ensure the site is responsive on different devices. 
In the real world this has been tested on a mac laptop and several mobile phones and ipads. 
The site has also been tested in different browsers.
The console in chrome devs has 1 error regarding google map JS

All links have been checked thoroughly ensuring they provide the correct navigation around the site. 
Wine Collection page: click on 'add' icon. Prompt occurs if no quantity entered. Once number of bottles required hit 'add' icon and 
basket should increase by number added. User is redirected to Basket page. 

Login and Registration have been tested numerous times with success and no issues have been found with password reset. 
To test these, navigate to Login / Register and create a new account. Alert message to occur if successful or failed.

In order for a user to add to basket they must be logged in. There were some issues once number of wines had been added to 
basket, redirect to login page appeared successfully but login submission threw an error. I was unable to determine why, 
however I managed to get around this by entering template language in the products.html. If user is logged in 'add_to_cart', if 
user is not logged in direct to 'login' page. 

CSS was tested using the W3C CSS Validation service with no resulting errors.
Javascript was tested using JShint resulting in no errors. 

Testing my number of views function for blogposts was checked by ensuring the number incremented each time the page was refreshed/visited.

Django error pages were used to determine problems with my code. These were helpful in determining where I had gone wrong.

My github repository was connected to Travis CI, and a successful build tag is present to show all tests passed Travis' tests. 


### Testing User functionality
The following accounts have been created to use as an existing test:
username: heather
password: heather1@£

username: david
password: david1@£

username: polly
password: polly

User functionality testing was consistently tested throughout developement. Users were created and logins/logouts checked with a variety of users, whilst also checking blogposts/orders were user specific. All links/buttons were checked and python code was tested manually by ensuring site functioned as intended.

### Testing Stripe
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
I created a dynamic ‘add to basket / update basket’ button (inspiration from codepen). This works well on larger screens but did need some adjusting for smaller screens due to size. 
I addressed this issue by hiding the visibility of the button and creating a new simpler ‘update / plus’ button for mobile screens. This works fine on all devices in chrome dev, 
however in real world both seem to be visible on the android safari. I have not found a way round this yet due to time constraints, however this will need addressing in the near future.

## Deployment

### Deployment to Heroku

This project has been deployed to Heroku and can be found <a href="https://mistral-wine-bar.herokuapp.com/">here</a>.

* Ensure the following are installed:
```pip3 install dj-database-url```
```pip3 install psycopg2```
```pip3 install django-storages```
```pip3 install boto3```
```pip3 install gunicorn```
```pip3 freeze > requirements.txt```

* In settings.py: add heroku app to allowed hosts
* In env.py file add postgres url as env var; os.environ.setdefault("DATABASE_URL", "postgres...)
* In settings.py: Database config;
```
if "DATABASE_URL" in os.environ:
    DATABASES = {'default': dj_database_url.parse(os.environ.get('DATABASE_URL'))}
else:
    print("Database URL not found. Using SQLite instead")
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
        }
    }
```
* Sync the Heroku app with GitHub repo
* Ensure requirements.txt and Procfile have been created to allow heroku to install correct packages and run project successfully
* Create a postgres DB on Heroku
* Add AWS / env vars from env.py file; 
* add DISABLE_COLLECTSTATIC set to 1

* Use ```git push origin master``` to push to github and heroku

(Static files were added to AWS S3 bucket)


## Credits

Content
* The text used in the blogs has in parts been taken from the real blog of <a href="https://www.paulcaputo.co.uk/">Paul Caputo</a>, with permission.
* The main content of the website has been taken from the original <a href="https://www.mistralwine.co.uk/">Mistral wine bar website</a>.
* <a href="https://snazzymaps.com">Snazzy Maps</a> was used for the colour scheme of the google map on the contact page

Media
* The photos used in this site were obtained from <a href="https://www.pexels.com/">pexels</a>.

Acknowledgements

* I received inspiration for this project from the original site, linked above
* CodePen was used for some design inspiration such as the add to basket buttons
