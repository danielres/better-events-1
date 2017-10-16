var knex = require('knex')(require('./knexfile'));
var bookshelf = require('bookshelf')(knex);

var Events = bookshelf.Model.extend({
  tableName: 'events',
});

Events
  // .fetch({ withRelated: ['posts.tags'] })
  .fetchAll()
  .then(function(event) {
    console.log(event.toJSON());
  })
  .catch(function(err) {
    console.error(err);
  });
