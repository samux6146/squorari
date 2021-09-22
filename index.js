const axios = require("axios")
const express = require("express")
var path = require('path')


const app = express()

app.use(express.static(path.join(__dirname, 'public')));
//app.listen(process.env.PORT, () => { console.log("start") })
app.listen(8080, () => { console.log("start") })
app.get("/", async (req, res) => {
  let map = await hack()
  const resul0 = map[0]
  const resul1 = map[1]
  res.send(`
  <html>
    <head>
      <title>squorari Stefan</title>
      <link rel='icon' href='/images/favicon.ico' class='js-favicon'>
    </head>
    <body style="background-color:black;">
      <iframe id="pdfviewer" src="http://docs.google.com/gview?embedded=true&url=${resul0}&amp;embedded=true"" frameborder="0" width="100%" height="100%"></iframe>
      <iframe id="pdfviewer" src="http://docs.google.com/gview?embedded=true&url=${resul1}&amp;embedded=true"" frameborder="0" width="100%" height="100%"></iframe>
    </body>
  </html>
  `)
})

async function hack() {
  const url = "https://jozefstefan.org/wp-json/wp/v2/media/"
  const response = await axios.get(url)
  const data = response.data
  return (data.map(d => d.link).filter(s => s.includes("urnik")));
}