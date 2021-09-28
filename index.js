const axios = require("axios")
const express = require("express")
var path = require('path')


const app = express()

app.use(express.static(path.join(__dirname, 'public')));
app.listen(process.env.PORT, () => { console.log("start") })
//app.listen(8080, () => { console.log("start") })

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
    <style>#forkongithub a{background:#000;color:#fff;text-decoration:none;font-family:arial,sans-serif;text-align:center;font-weight:bold;padding:5px 40px;font-size:1rem;line-height:2rem;position:relative;transition:0.5s;}#forkongithub a:hover{background:#008080;color:#fff;}#forkongithub a::before,#forkongithub a::after{content:"";width:100%;display:block;position:absolute;top:1px;left:0;height:1px;background:#fff;}#forkongithub a::after{bottom:1px;top:auto;}@media screen and (min-width:800px){#forkongithub{position:absolute;display:block;top:0;right:0;width:200px;overflow:hidden;height:200px;z-index:9999;}#forkongithub a{width:200px;position:absolute;top:60px;right:-60px;transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);box-shadow:4px 4px 10px rgba(0,0,0,0.8);}}</style><span id="forkongithub"><a href="https://github.com/samux6146/squorari">View me on GitHub</a></span>      <iframe id="pdfviewer" src="https://docs.google.com/gview?embedded=true&url=${resul0}" frameborder="0" width="100%" height="100%"></iframe>
      <iframe id="pdfviewer" src="https://docs.google.com/gview?embedded=true&url=${resul1}" frameborder="0" width="100%" height="100%"></iframe>
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-MMYGPB301S"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
       gtag('config', 'G-MMYGPB301S');
      </script>
    </body>
  </html>
  `)
})

async function hack() {
  const url = "https://jozefstefan.org/wp-json/wp/v2/media/"
  const response = await axios.get(url)
  const data = response.data
  return (data.map(d => d.link).filter(s => s.includes("urnik-za")));
}