const express = require('express');
const bodyParser = require('body-parser');
const playerRoutes = require('./routes/playerRoutes');
const teamRoutes = require('./routes/teamRoutes');
const matchRoutes = require('./routes/matchRoutes');

const app = express();
const PORT = 3333;

app.use(bodyParser.json());

// Rotas para jogadores, times e partidas
app.use('/api', playerRoutes);
app.use('/api', teamRoutes);
app.use('/api', matchRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
