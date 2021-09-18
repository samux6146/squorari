const axios = require("axios")
const express = require("express")

const app = express()

app.get("/", async (req, res) => {
  const resul = await hack()
  res.send(`
  <html>
    <head>
      <title>Test orari</title>
    </head>
    <body>
      <iframe src="${resul}" width="100%" height="100%"></iframe>
    </body>
  </html>
  `)
})
app.listen(80, () => { console.log("start") })

async function hack() {
  const url = "https://jozefstefan.org/wp-json/wp/v2/media/"
  const response = await axios.get(url)
  const data = response.data
  return (data.map(d => d.link).find(s => s.includes("urnik")));
}