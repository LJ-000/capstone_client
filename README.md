# Welcome to Kismet!

<img height="400" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2014%2F04%2F28%2Foffice-desk-accessories-0120wwo.jpg&q=85"></img>

## About Kismet

Kismet is a subscription service app for remembering every upcoming event in life and sending the perfect greeting card -- birthdays, anniversaries, weddings, graduations. Designed to combine the effectiveness of your calendar and the satisfaction in sending a nice card to someone you care about.

This app is a single-page application that houses a React front end and a Ruby backend.

## Login

Secure login authentication built using JWT. If a user does not exist in the database, an alert will prompt them to log in again. If the login credentials are authenticated, the user will be redirected to their My Events page.

## My Events
This page showcases all of a user's events; in the database, events are synonymous with the word subscriptions. A user can edit/delete any existing events and create a new event by giving it a name, event date, as well as a reminder & send-by date for when the greeting card should be signed and sent. This form has a Repeat field to capture the event's likelihood to recur, meaning if this is a one-time event, then you will select a greeting card just this one time. If an event occurs every year, like birthdays or anniversaries, then future iterations of the app will remind you to select, sign, and send a greeting card every year, just in time.


## Greeting Cards

The greeting card page does not require a login. Anyone can be directed to this page from the navbar. This page shows the greeting card library, including an image, price, and theme. Users can use various dropdown search bars to filter cards by event theme, such as birthdays, anniversaries, get well, thank you, etc. The other search filters cards by their intended audience, such as mom, dad, significant other, wife, husband, etc. If a user is logged in and clicks on Add To Cart, that greeting card will be added to their shopping cart.

## Back-End

Feel free to check out the Ruby on Rails back-end repo and Kismet database <a href="https://github.com/LJ-000/capstone_backend">here</a>.
