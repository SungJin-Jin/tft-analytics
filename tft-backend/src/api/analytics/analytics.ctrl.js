const riot = require('../../feature/riot/riot.js');

exports.save = async (ctx) => {
    // Get topUsers
    const topUsers = await riot.getTop100Users();

    // Get Matche Ids 10 by PUUID

    // Get Match by id

    console.log(topUsers);

    ctx.body = topUsers;
};