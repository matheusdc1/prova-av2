let matches = [];

exports.createMatch = (req, res) => {
    const newMatch = req.body;
    newMatch.id = matches.length + 1;
    matches.push(newMatch);
    res.status(201).json(newMatch);
};

exports.getMatches = (req, res) => {
    res.json(matches);
};

exports.updateMatch = (req, res) => {
    const matchId = parseInt(req.params.id);
    const { date, location, score, homeTeamId, awayTeamId } = req.body;
    
    // Procurar a partida pelo ID
    const matchIndex = matches.findIndex(match => match.id === matchId);
    if (matchIndex === -1) {
        return res.status(404).json({ error: 'Partida não encontrada' });
    }

    // Atualizar os dados da partida
    matches[matchIndex] = {
        ...matches[matchIndex],
        date: date || matches[matchIndex].date,
        location: location || matches[matchIndex].location,
        score: score || matches[matchIndex].score,
        homeTeamId: homeTeamId || matches[matchIndex].homeTeamId,
        awayTeamId: awayTeamId || matches[matchIndex].awayTeamId
    };

    res.json(matches[matchIndex]);
};

exports.deleteMatch = (req, res) => {
    const matchId = parseInt(req.params.id);
    
    // Procurar a partida pelo ID
    const matchIndex = matches.findIndex(match => match.id === matchId);
    if (matchIndex === -1) {
        return res.status(404).json({ error: 'Partida não encontrada' });
    }

    // Remover a partida da lista
    const deletedMatch = matches.splice(matchIndex, 1);

    res.json(deletedMatch);
};