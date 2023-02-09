const express = require('express')
const app = express()
const routes = require('./routes')
const PORT = process.env.PORT || 3000

app.use(express.static("public"))
app.use(express.json())
app.use(routes)

require('./routes/apiRoutes/api.js')(app);
require('./routes/index.js')(app);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
});