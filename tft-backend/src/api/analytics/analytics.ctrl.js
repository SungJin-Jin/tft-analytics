const riot = require('../../feature/riot/riot.js');
const matchAnalytics = require('../../feature/analytics/match.js');

exports.save = async (ctx) => {
    const topUsers = await riot.getTop100Users();
    const puuids = await riot.getPUUIDsByUsers(topUsers);
    const matchIds = await riot.getMatchIdsByPuuids(puuids);
    const matches = await riot.getMatchesByMatchIds(matchIds);
    const summaryUnits = matchAnalytics.summaryUnits(matches);

    // Todo : save the units to mongodb

    ctx.body = summaryUnits;
};