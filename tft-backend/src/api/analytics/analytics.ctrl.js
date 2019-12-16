const riot = require('feature/riot/riot.js');
const matchAnalytics = require('feature/analytics/match.js');
const Summary = require('models/summary');

exports.process = async(ctx) => {
    const topUsers = await riot.getTop100Users();
    const puuids = await riot.getPUUIDsByUsers(topUsers);
    const matchIds = await riot.getMatchIdsByPuuids(puuids);
    const matches = await riot.getMatchesByMatchIds(matchIds);

    const summary = new Summary({
        summary: matchAnalytics.summaryUnits(matches),
        date: Date.now()
    });

    try {
        await summary.save();
    } catch (e) {
        return ctx.throw(500, e);
    }

    ctx.body = summary;
};