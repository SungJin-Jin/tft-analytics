const summaryUnits = (matches) => {
    return summaryByName(matches.flatMap(match => findTopParticipants(match).units));
};

const summaryTraits = (matches) => {
    return summaryByName(matches.flatMap(match => findTopParticipants(match).traits));
};

const summaryByName = (units) => {
    return toSet(units.map(unit => unit.name))
        .filter(name => name !== undefined && name !== "")
        .map(name => {
            return {
                name: name,
                count: units.filter(unit => unit.name === name).length
            }
        })
        .sort((a, b) => b.count - a.count);
};

const findTopParticipants = (match) => {
    return match.info.participants.find(participants => participants.placement === 1);
};

const toSet = (array) => {
    return Array.from(new Set(array));
};

module.exports = {summaryUnits, summaryTraits};
