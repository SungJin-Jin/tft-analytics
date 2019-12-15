const axios = require('axios');

const ApiDefault = {
    url: 'https://kr.api.riotgames.com',
    key: 'RGAPI-ea60c2f9-12e9-4104-8354-320594d413bf'
};

ApiDefault.instance = axios.create({
    baseURL: ApiDefault.url
});

getTop100Users = async function () {
    try {
        const challengers = await ApiDefault.instance
            .get(`/tft/league/v1/challenger`, {
                headers: {
                    'X-Riot-Token': ApiDefault.key,
                }
            });

        return challengers.data.entries
            .sort((a, b) => b.leaguePoints - a.leaguePoints)
            .slice(0, 100);
    } catch (e) {
        return {};
    }
};

module.exports = {getTop100Users};

