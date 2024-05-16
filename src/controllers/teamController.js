let teams = [];

exports.createTeam = (req, res) => {
    const newTeam = req.body;
    newTeam.id = teams.length + 1;
    teams.push(newTeam);
    res.status(201).json(newTeam);
};

exports.getTeams = (req, res) => {
    res.json(teams);
};

exports.updateTeam = (req, res) => {
    const teamId = parseInt(req.params.id);
    const { name, foundationYear, country, coach } = req.body;
    
    // Procurar o time pelo ID
    const teamIndex = teams.findIndex(team => team.id === teamId);
    if (teamIndex === -1) {
        return res.status(404).json({ error: 'Time não encontrado' });
    }

    // Atualizar os dados do time
    teams[teamIndex] = {
        ...teams[teamIndex],
        name: name || teams[teamIndex].name,
        foundationYear: foundationYear || teams[teamIndex].foundationYear,
        country: country || teams[teamIndex].country,
        coach: coach || teams[teamIndex].coach
    };

    res.json(teams[teamIndex]);
};

exports.deleteTeam = (req, res) => {
    const teamId = parseInt(req.params.id);
    
    // Procurar o time pelo ID
    const teamIndex = teams.findIndex(team => team.id === teamId);
    if (teamIndex === -1) {
        return res.status(404).json({ error: 'Time não encontrado' });
    }

    // Remover o time da lista
    const deletedTeam = teams.splice(teamIndex, 1);

    res.json(deletedTeam);
};
