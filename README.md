# Bill Split

Bill Split is a full-stack CRUD application designed to make group dining experiences more seamless and equitable. Users can sign in to access a shared "Total Bill" for their party, where each member can claim the specific items they ordered. Once an item is claimed, it’s automatically added to that user's "My Bill", allowing them to pay only for what they consumed. This eliminates the hassle of manual itemization or unfairly splitting the bill evenly when everyone ordered differently. Bill Split streamlines the payment process, ensuring accuracy, convenience, and less time spent doing math at the table.

**Link to project:** https://bill-split-8syg.onrender.com

![alt tag](/public/img/Bill-Split.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node, EJS

I built Bill Split as a full-stack web application using JavaScript, Express, Node.js, and EJS templating. The app follows RESTful CRUD principles to manage users, bills, and individual items. Users can sign up and log in to create or join a bill. Once a bill is created, items can be added to the total, and each party member can interactively claim the items they ordered. I used EJS to dynamically render server-side views, enabling real-time updates as users assign items to their individual totals. All data is persisted using a MongoDB database, and routes were built to handle all Create, Read, Update, and Delete operations efficiently. This project demonstrates my ability to build a complete and interactive full-stack solution focused on user experience and functional design.

## Lessons Learned:

*The power of EJS for dynamic rendering*
EJS allowed me to pass data seamlessly from the backend to the frontend and render updates in real time. I gained a deeper understanding of how templating engines can manage stateful interactions in a server-rendered app.

*The importance of clear data modeling*
Building relationships between users, bills, and items taught me how crucial it is to plan data structures up front. Defining how users would interact with shared resources helped avoid logic issues later when assigning items and calculating totals.
## Installation

1. Clone repo
2. run `npm install`

## Usage

1. run `node server.js`
2. Navigate to `localhost:8080`

## Credit

Modified from Scotch.io's auth tutorial