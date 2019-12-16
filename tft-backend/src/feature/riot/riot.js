const axios = require('axios');

const ApiDefault = {
    koUrl: 'https://kr.api.riotgames.com/tft',
    asiaUrl: 'https://asia.api.riotgames.com/tft',
    key: 'RGAPI-ac4276d8-538c-477f-ba51-2ad44d74347b'
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
    const matchIds = await Promise.all(puuids.map(puuid => getMatchIdsByPUUID(puuid)));
    return matchIds.flatMap(matchId => matchId);
};

getMatchById = async function (matchId) {
    const match = await ApiDefault.asia.get(`/match/v1/matches/${matchId}`, headers);

    return match.data;
};

getMatchesByMatchIds = async function (matchIds) {
    const matches = await Promise.all(matchIds.map(id => getMatchById(id)));

    return matches;
};

module.exports = {getTop100Users, getPUUIDsByUsers, getMatchIdsByPuuids, getMatchesByMatchIds};

