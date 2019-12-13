const match = require('../../../data/mock/match.json');
const matchAnalytics = require('../../feature/analytics/match.js');
const unit = require('../../../data/meta/unit.json');

// 오늘 챌린저 100명의 10게임의 데이터(총 1000게임)을 분석한 결과 반환

exports.today = async (ctx) => {
    // matches 정보는 Riot API 통해서 가져와야함
    // let matches = [match, match];
    // ctx.body = await matchAnalytics(matches);

    ctx.body = unit;
};