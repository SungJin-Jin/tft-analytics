const process = (matches) => {
    let topUnits = matchesToTopUnits(matches);

    return topUnits;
};

const matchesToTopUnits = (matches) => {
    return matches.flatMap(match => findTopParticipants(match).units);
};

const matchesToTopTraits = (matches) => {
    return matches.flatMap(match => findTopParticipants(match).traits);
};

const findTopParticipants = (match) => {
    return match.info.participants.find(participants => participants.placement === 1);
};

module.exports = process;
