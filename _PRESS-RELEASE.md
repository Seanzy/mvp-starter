# Project Name #

<!-- 
> This material was originally posted [here](http://www.quora.com/What-is-Amazons-approach-to-product-development-and-product-management). It is reproduced here for posterities sake.

There is an approach called "working backwards" that is widely used at Amazon. They work backwards from the customer, rather than starting with an idea for a product and trying to bolt customers onto it. While working backwards can be applied to any specific product decision, using this approach is especially important when developing new products or features.

For new initiatives a product manager typically starts by writing an internal press release announcing the finished product. The target audience for the press release is the new/updated product's customers, which can be retail customers or internal users of a tool or technology. Internal press releases are centered around the customer problem, how current solutions (internal or external) fail, and how the new product will blow away existing solutions.

If the benefits listed don't sound very interesting or exciting to customers, then perhaps they're not (and shouldn't be built). Instead, the product manager should keep iterating on the press release until they've come up with benefits that actually sound like benefits. Iterating on a press release is a lot less expensive than iterating on the product itself (and quicker!).

If the press release is more than a page and a half, it is probably too long. Keep it simple. 3-4 sentences for most paragraphs. Cut out the fat. Don't make it into a spec. You can accompany the press release with a FAQ that answers all of the other business or execution questions so the press release can stay focused on what the customer gets. My rule of thumb is that if the press release is hard to write, then the product is probably going to suck. Keep working at it until the outline for each paragraph flows. 

Oh, and I also like to write press-releases in what I call "Oprah-speak" for mainstream consumer products. Imagine you're sitting on Oprah's couch and have just explained the product to her, and then you listen as she explains it to her audience. That's "Oprah-speak", not "Geek-speak".

Once the project moves into development, the press release can be used as a touchstone; a guiding light. The product team can ask themselves, "Are we building what is in the press release?" If they find they're spending time building things that aren't in the press release (overbuilding), they need to ask themselves why. This keeps product development focused on achieving the customer benefits and not building extraneous stuff that takes longer to build, takes resources to maintain, and doesn't provide real customer benefit (at least not enough to warrant inclusion in the press release).
 -->
 
## Heading ##
  Message Sender

## Sub-Heading ##
  A cool way to leave messages for Sean

## Summary ##
  Use this to send a message to Sean and he will get back to you as soon as his secretary has time!

## Problem ##
  It's so hard to get a hold of Sean because he's more popular than the bomb.com. So this is a great way to get in touch with him. Sean can be bribed with ice cream and cookies. 

## Solution ##
  This web app allows you to send a message that gets saved to a database Sean's secretary can check for him when they have time. 

## Quote from You ##
  "Know one thing about everything and everything about one thing"

## How to Get Started ##
  Simply enter a message you would like to send Sean and click 'Send'. 

## Customer Quote ##
  "Wow, I never thought I would be so privileged to communicate with Seanzy. But this web app makes it maybe possible!" -Mark Cuban

## Closing and Call to Action ##
  This is the alpha and the omega of your future internet interactions. 
  
  Setup
  from root in CLI: 
  npm install
  npm install -g webpack --save
  I already have brew
  npm install nodemon --save
  npm run react-dev (minimize)
  npm run server-dev (now visit localhost:3000 or whichever port, each refresh will log to this CL, so put a console log in the first get request)
  
  mongod, then mongo from another CL tab, type db to confirm
  (try http://localhost:27017/)
  db
  use (db from above)
  
Things I Learned
Did I bind my React component methods? 

We need to install the body-parser middleware to handle http post requests in Express. It takes the request and stores it in req.body

When sending an AJAX POST request, you have to specify type: 'POST', (default is GET). Also, send the data in an object of form {key: 'value', key2: 'value2'}, or as a query string, it will be converted to querystring anyway using jquery param. ALso, specify the contentType: 'application/json' to make sure it goes across as a json object
  
  
  
  Things to Do
  Add favicon
  Practice redoing this entire sprint from memory until you can do a presentation with it, 
  Then do it in angular
  
  
Questions
When I click send button, the post request goes in React component or in server file? 

How do I initially render messages from my database to my screen? I have to do a GET request. Okay, so where do I do that? In my React component or in my index.js server and why? Well, the barebones repo had that route already built, so that means I should just call the get request from the react component to that route? And I am supposed to initialize from the constructor. So I guess I will have to add a componentWillMount to my input class. That does not feel right, when am I supposed to be adding to my App class versus when should I be adding to my Component Class? I'm thinking I need to just add an init function to my ComponentDidMount in the App class. There's already an AJAX request pre-coded in there that doesn't have any functionality that affects my app, so I will modify that to handle the get request to my server to get the message data. 

Ohhh, so the GET request to that ROUTE is what calls the selectAll function, so I don't need to worry about accessing selectAll() from within the React component. 

So I wasn't sending null in as a first param when invoking my callback in SelectAll(). Now I need to make the messages show up, which means I need to take that data and pass it to each list item. 

There is a div being rendered for each message, but no message is showing up in the divs. I keep getting this error about objects are not valid as a React child. So then I added a '.toString' and it rendered [object Object] so that's good. 

Why can't I include a second param to send back a status code in addMessage() item.create line ?

How do I make my i counter change each time I do a get request? 
  
  > show dbs
admin    0.000GB
fetcher  0.000GB
local    0.000GB

> use fetcher
switched to db fetcher

> show collections
repos

db.repos.find (repos is your collection)

> db.repos.remove({}) to remove all documents

> db.repos.remove({})
CREATING A COLLECTION
If the collection does not currently exist, insert operations will create the collection.


db.messages.find() to retrieve



