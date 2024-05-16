let players = [];

exports.createPlayer = (req, res) => {
    const newPlayer = req.body;
    newPlayer.id = players.length + 1;
    players.push(newPlayer);
    res.status(201).json(newPlayer);
};

exports.getPlayers = (req, res) => {
    res.json(players);
};

exports.updatePlayer = (req, res) => {
    const playerId = parseInt(req.params.id);
    const { name, age, position, nationality, teamId } = req.body;
    
    // Procurar o jogador pelo ID
    const playerIndex = players.findIndex(player => player.id === playerId);
    if (playerIndex === -1) {
        return res.status(404).json({ error: 'Jogador não encontrado' });
    }

    // Atualizar os dados do jogador
    players[playerIndex] = {
        ...players[playerIndex],
        name: name || players[playerIndex].name,
        age: age || players[playerIndex].age,
        position: position || players[playerIndex].position,
        nationality: nationality || players[playerIndex].nationality,
        teamId: teamId || players[playerIndex].teamId
    };

    res.json(players[playerIndex]);
};

exports.deletePlayer = (req, res) => {
    const playerId = parseInt(req.params.id);
    
    // Procurar o jogador pelo ID
    const playerIndex = players.findIndex(player => player.id === playerId);
    if (playerIndex === -1) {
        return res.status(404).json({ error: 'Jogador não encontrado' });
    }

    // Remover o jogador da lista
    const deletedPlayer = players.splice(playerIndex, 1);

    res.json(deletedPlayer);
};

exports.associatePlayerToTeam = (req, res) => {
    const playerId = parseInt(req.params.id);
    const { teamId } = req.body;
    
    // Procurar o jogador pelo ID
    const player = players.find(player => player.id === playerId);
    if (!player) {
        return res.status(404).json({ error: 'Jogador não encontrado' });
    }

    // Associar o jogador ao time
    player.teamId = teamId;

    res.json(player);
};