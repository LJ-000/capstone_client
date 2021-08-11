# Welcome to Kismet!

<img height="400" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2014%2F04%2F28%2Foffice-desk-accessories-0120wwo.jpg&q=85"></img>

## About Kismet

Kismet is a subscription service app for remebering every upcoming event in life and sending the perfect greeting card -- birthdays, anniversaries, weddings, graduations, the people in your life can't wait to hear from you. 

This app is a single page application that houses a React front end, and a Ruby backend.

## Login

Login authentication built using JWT. If user does not exist in the database, an alert will prompt them to try logging in again. If the login credentials are authenticated, the user will be redirected to their My Events page.

## My Events



## Greeting Cards

The greeting card page does not require a login. Anyone can be directed to this page from the navbar. This page shows the greeting card library including an image, price, and theme. Users can use various dropdown search bars to filter cards by event theme, such as, birthdays, anniversaries, get well, thank you, etc. etc. The other search filters cards by their intended audience, such as, mom, dad, significant other, wife, husband, etc, etc. If a user is logged in and they click Add To Cart, that greeting card will be added to their shopping cart. 

## Back-End

Feel free to check out the Ruby on Rails back-end repo and Kismet database <a href="https://github.com/LJ-000/capstone_backend">here</a>.
