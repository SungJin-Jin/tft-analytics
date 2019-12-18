const axios = require('axios');

const ApiDefault = {
    koUrl: 'https://kr.api.riotgames.com/tft',
    asiaUrl: 'https://asia.api.riotgames.com/tft',
    key: 'RGAPI-824231c7-8d90-477d-adb1-48a0306b4ccd'
};

ApiDefault.korea = axios.create({
    baseURL: ApiDefault.koUrl
});

ApiDefault.asia = axios.create({
    baseURL: ApiDefault.asiaUrl
});

const headers = {headers: {'X-Riot-Token': ApiDefault.key}};

const getTop100Users = async () => {
    console.log(`========== getTop100Users ==========`);

    try {
        const challengers = await ApiDefault.korea.get(`/league/v1/challenger`, headers);

        return challengers.data.entries
            .sort((a, b) => b.leaguePoints - a.leaguePoints)
            .slice(0, 50);
    } catch (e) {
        return [];
    }
};

const getPUUIDsByUsers = async (topUsers) => {
    return await Promise.all(topUsers
        .filter(user => user.summonerId !== undefined && user.summonerId !== "")
        .map(user => getPUUIDBySummonerId(user.summonerId)));
};

const getPUUIDBySummonerId = async (encryptedSummonerId) => {
    console.log(`==== getPUUIDBySummonerId : ${encryptedSummonerId} ====`);

    try {
        const summoner = await ApiDefault.korea.get(`/summoner/v1/summoners/${encryptedSummonerId}`, headers);

        return summoner.data.puuid;
    } catch (e) {
        return "";
    }
};

const getMatchIdsByPuuids = async (puuids) => {
    console.log(`========== getMatchIdsByPuuids ==========`);

    const matchIds = await Promise.all(puuids.map(puuid => getMatchIdsByPUUID(puuid)));

    return matchIds.flatMap(matchId => matchId);
};

const getMatchIdsByPUUID = async (puuid) => {
    console.log(`==== getMatchIdsByPUUID : ${puuid} ====`);

    try {
        const count = 20;
        const matchIds = await ApiDefault.asia.get(`/match/v1/matches/by-puuid/${puuid}/ids?count=${count}`, headers);

        return matchIds.data;
    } catch (e) {
        return [];
    }
};

const getMatchesByMatchIds = async (matchIds) => {
    console.log(`==== Start getMatchesByMatchIds : ${matchIds} ====`);

    let matches = [];

    for (let index = 0; index <= matchIds.length - 1; index++) {
        if (index % 20 === 0) await delay(0.5 * 60 * 1000);

        const matchId = matchIds[index];
        const match = await getMatchById(matchId);

        matches.push(match);
    }

    return matches;
};

const getMatchById = async function (matchId) {
    console.log(`==== Start getMatchById : ${matchId} ====`);

    const match = await ApiDefault.asia.get(`/match/v1/matches/${matchId}`, headers);

    return match.data;
};

const delay = time => new Promise(resolve => setTimeout(resolve, time));

module.exports = {getTop100Users, getPUUIDsByUsers, getMatchIdsByPuuids, getMatchesByMatchIds};

