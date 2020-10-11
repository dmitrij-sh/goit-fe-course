const joi = require('joi'); // подключение библиотеки для пользования
const shortid = require('shortid');
const express = require('express');

const passwordSchema = joi.string().min(3).max(10).alphanum();
console.log(passwordSchema.validate('qwd'));
console.log(shortid.generate());

const app = express();

app.use('*', (req, res) => {
  res.send('<h1>Hi my name is server</h1>');
});
const listener = app.listen(1610, () => {
  console.log(`сервер запущен ${listener.address().port}`);
});
