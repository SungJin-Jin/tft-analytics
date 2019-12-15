const riot = require('../../feature/riot/riot.js');

exports.save = async (ctx) => {
    // Get topUsers
    const topUsers = await riot.getTop100Users();
    const puuids = await Promise.all(topUsers.map(user => riot.getPUUIDBySummonerId(user.summonerId)));

    // Get Matche Ids 10 by PUUID

    // Get Match by id

    console.log(puuids);

    ctx.body = puuids;
};