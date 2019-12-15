const axios = require('axios');

const ApiDefault = {
    koUrl: 'https://kr.api.riotgames.com/tft',
    asiaUrl: 'https://asia.api.riotgames.com/tft',
    key: 'RGAPI-ea60c2f9-12e9-4104-8354-320594d413bf'
};

ApiDefault.korea = axios.create({
    baseURL: ApiDefault.koUrl
});

ApiDefault.asia = axios.create({
    baseURL: ApiDefault.asiaUrl
});

const headers = {headers: {'X-Riot-Token': ApiDefault.key}}

getTop100Users = async function () {
    try {
        const challengers = await ApiDefault.korea.get(`/league/v1/challenger`, headers);

        // TODO : slice 10 to 100
        return challengers.data.entries
            .sort((a, b) => b.leaguePoints - a.leaguePoints)
            .slice(0, 10);
    } catch (e) {
        return [];
    }
};

getPUUIDBySummonerId = async function (encryptedSummonerId) {
    try {
        const summoner = await ApiDefault.korea.get(`/summoner/v1/summoners/${encryptedSummonerId}`, headers);

        return summoner.data.puuid;
    } catch (e) {
        return "";
    }
};

getPUUIDsByUsers = async function (topUsers) {
    return await Promise.all(topUsers.map(user => getPUUIDBySummonerId(user.summonerId)));
};

getMatchIdsByPUUID = async function (puuid) {
    try {
        const count = 1;
        const matchIds = await ApiDefault.asia.get(`/match/v1/matches/by-puuid/${puuid}/ids?count=${count}`, headers);

        return matchIds.data;
    } catch (e) {
        return [];
    }
};

getMatchIdsByPuuids = async function (puuids) {
    let matchIds = await Promise.all(puuids.map(puuid => getMatchIdsByPUUID(puuid)));
    return matchIds.flatMap(matchId => matchId);
};

module.exports = {getTop100Users, getPUUIDsByUsers, getMatchIdsByPuuids};

