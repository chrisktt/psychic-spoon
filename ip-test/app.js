const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

// const server = app.listen(3000, '0.0.0.0', () => {
const server = app.listen(3000, '127.0.0.1', () => {
    // const server = app.listen(3000, '::', () => {
    // const server = app.listen(3000, '::1', () => {
    const address = server.address();
    const appName = path.basename(process.argv[1]);
    // console.log(`Express server listening on address ${address.address}:${address.port}`);
    console.log(`Express server for "${appName}" listening on ${JSON.stringify(address)}`);
});
app.use(morgan('common'));

app.get('/', (req, res) => {
    console.log('path /');
    res.send(`Hello World!  ${time_now()}`);
    // res.status(200).send(responseString);
    // res.status(200).send(`Hello World!  ${time_now()}`);
});

function time_now() {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    console.log(formattedTime);

    return formattedTime;
}
