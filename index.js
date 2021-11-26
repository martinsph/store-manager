const express = require('express');
const err = require('./middleware/error');
const root = require('./controllers/root');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use('/', root);
app.use(err);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

// não remova esse endpoint, e para o avaliador funcionar
// app.get('/', (_request, response) => {
//   response.send();
// });
