# Conference API

This is a simple conference API to add a talk and an attendee as well as remove a talk.

It's made in Node.js, Express, Mongoose and MongoDB.

When I was looking for backend interview assignments, I came across a repo on GitHub that asked the candidates to make a conference API. I thought I should try it for practice and this repo you are right now in is the result of that attempt.

One thing I did different here is structuring the project by components. Instead of creating separate folders for routes, models, services & controllers, I kept all routes, models, services and controllers files related to attendees in the attendees folder and all the files related to talks in the talks folder. This is one of the project structures recommended in [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices). It was a bit of challenge implementing this for the first time after doing the routes-models-controllers structue for a long period and I believe it will be easier next time.
