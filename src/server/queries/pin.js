var knex = require('../../../db/knex');

module.exports = {
  getPins: function() {
    return knex.select().table('events').innerJoin('event_types', 'events.et_id', 'event_types.et_id');
  }
};