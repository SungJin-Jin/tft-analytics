const units = require('../../../data/meta/unit.json');
const moment = require('moment');
const Summary = require('models/summary');

exports.today = async(ctx) => {
    let summary;

    try {
        const today = moment().startOf('day');

        let summaries = await Summary.find({
            "date": {
                "$gte": today,
                "$lt": moment(today).endOf('day').toDate()
            }
        }).sort({_id: -1})
            .limit(1)
            .exec();

        summary = summaries[0].summary
            .slice(0, 10)
            .map(data => {
                const unit = units.find(unit => unit.name === data.name);
                unit.count = data.count;
                return unit;
            });
    } catch (e) {
        return ctx.throw(500, e);
    }

    ctx.body = summary;
};