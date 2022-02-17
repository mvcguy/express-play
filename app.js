const express = require('express')
const app = express()
var path = require('path');

app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

const port = 3000


app.use(express.static('dist'))

function renderWithLayout(res, view, options) {
  res.render(view, options, (err, html) => {
    console.log(html);
    // res.send(html);
    res.render('layout', {
      html: html
    })
  });
}

app.get('/', (req, res) => {
  renderWithLayout(res, 'index')
})

app.get('/index', (req, res) => {
  res.redirect('.')
})

app.get('/logistics', (req, res, next) => {
  renderWithLayout(res, 'logistics', {
    title: 'Counting to 10'
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})