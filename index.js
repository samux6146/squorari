const axios = require("axios")
const express = require("express")


const app = express()

app.get("/", async (req, res) => {
  let map = await hack()
  const resul0 = map[0]
  const resul1 = map[1]
  res.send(`
  <html>
    <head>
      <title>squorari Stefan</title>
    </head>
    <body style="background-color:black;">
      <iframe id="pdfviewer" src="http://docs.google.com/gview?embedded=true&url=${resul0}&amp;embedded=true"" frameborder="0" width="100%" height="100%"></iframe>
      <iframe id="pdfviewer" src="http://docs.google.com/gview?embedded=true&url=${resul1}&amp;embedded=true"" frameborder="0" width="100%" height="100%"></iframe>
    </body>
  </html>
  `)
})
//app.listen(process.env.PORT, () => { console.log("start") })
app.listen(8080, () => { console.log("start") })

async function hack() {
  const url = "https://jozefstefan.org/wp-json/wp/v2/media/"
  const response = await axios.get(url)
  const data = response.data
  return (data.map(d => d.link).filter(s => s.includes("urnik")));
}