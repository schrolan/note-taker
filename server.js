const express = require('express')
const app = express()
const routes = require('./routes')
const PORT = process.env.PORT || 3000

app.use(express.static("public"))
app.use(express.json())
app.use(routes)

require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
});