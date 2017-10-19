const express = require(`express`);
const app = express();
const port = process.env.NODE_ENV || 3000;

const data = {
  name: `Clark`,
  foods: [`pizza`, `breakfast`, `breakfast-pizza`, `kayle`],
  drink: `la Croix`
};

app.set('view engine', 'hbs');

app.listen(port, () => {
  console.log(`hi there`);
});

// when
app.get(`/`, (request, response) => {
  response.render(`index`, data);
  console.log(`index`);
});

app.get(`/about`, (request, response) => {
  response.render(`about`, data);
  console.log(`about`);
});
