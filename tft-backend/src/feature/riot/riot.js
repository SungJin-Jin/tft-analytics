const axios = require('axios');

const ApiDefault = {
    url: 'https://kr.api.riotgames.com/tft',
    key: 'RGAPI-ea60c2f9-12e9-4104-8354-320594d413bf'
};

ApiDefault.instance = axios.create({
    baseURL: ApiDefault.url
});

const headers = {headers: {'X-Riot-Token': ApiDefault.key}}

getTop100Users = async function () {
    try {
        const challengers = await ApiDefault.instance.get(`/league/v1/challenger`, headers);

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
        const summoner = await ApiDefault.instance.get(`/summoner/v1/summoners/${encryptedSummonerId}`, headers);

        console.log(summoner.data.puuid);

        return summoner.data.puuid;
    } catch (e) {
        return "";
    }
};

module.exports = {getTop100Users, getPUUIDBySummonerId};

