const riot = require('../../feature/riot/riot.js');

exports.save = async (ctx) => {
    const topUsers = await riot.getTop100Users();
    const puuids = await riot.getPUUIDsByUsers(topUsers);
    const matchIds = await riot.getMatchIdsByPuuids(puuids);
    const matches = await riot.getMatchesByMatchIds(matchIds);

    ctx.body = matches;
};