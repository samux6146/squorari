const axios = require("axios")
const express = require("express")

const app = express()

app.get("/", async (req, res) => {
  const resul = await hack()
  res.send(`
  <html>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
    <head>
      <title>Test orari</title>
    </head>
    <body>
      <iframe id="pdfviewer" src="http://docs.google.com/gview?embedded=true&url=${resul}&amp;embedded=true" frameborder="0" width="100%" height="100%"></iframe>
    </body>
  </html>
  `)
})
app.listen(process.env.PORT, () => { console.log("start") })

async function hack() {
  const url = "https://jozefstefan.org/wp-json/wp/v2/media/"
  const response = await axios.get(url)
  const data = response.data
  return (data.map(d => d.link).find(s => s.includes("urnik")));
}