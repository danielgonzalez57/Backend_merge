// const app = require("./app/app");

// const port = process.env.PORT || 3001

// app.listen(port, () =>{
//     console.log(`-------------- SERVER RUNNING ON PORT ${port} -------------------`)
// })

const app = require("./app/app");
const fs = require('fs');
const https = require('https');

const options = {
    key: fs.readFileSync('./ssl/teelspay.com.key'),
    cert: fs.readFileSync('./ssl/teelspay.com.crt'),
};

const port = process.env.PORT || 3001

app.listen(3002, () =>{
    console.log(`-------------- SERVER RUNNING ON PORT 3002 -------------------`)
})

// Creamos el servidor HTTPS
https.createServer(options, app).listen(port, () => {
    console.log(`-------------- SERVER RUNNING ON PORT ${port} -------------------`)
  });