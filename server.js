const express = require("express")

// Initialize the web app instance,
// along with the desired view engine
// for rendering view templates.
const app = express();
app.get('/', (req, res) => {
  res.status(200).send("Hello Sheena!")
})
app.get('/fuck', (req, res) => {
  res.status(200).send({
    'Name': 'Howard',
    'G': 'error'
  })
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

// Potential next steps:
// ---------------------
// 1) Update the views/stylesheets to get a feel for using Pug and static resources
// 2) Add additional routes/views to handle more requests (e.g. /about, /users)
// 3) Add additional middleware to process requests as needed (e.g. JSON bodies, cookie headers)
// 4) Add some front-end JavaScript, reference it from your layout view, and serve the file from the /public directory
// 5) Have fun trying App Service!
