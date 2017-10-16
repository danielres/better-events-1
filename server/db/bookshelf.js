var knex = require('knex')(require('./knexfile'));
var bookshelf = require('bookshelf')(knex);

var Events = bookshelf.Model.extend({
  tableName: 'events',
});

// var Rooms = bookshelf.Model.extend({
//   tableName: 'rooms',
//   messages: function() {
//     return this.hasMany(Messages);
//   },
// });

// var Messages = bookshelf.Model.extend({
//   tableName: 'messages',
//   room: function() {
//     return this.belongsTo(Rooms);
//   },
// });

Events.where('id', 1)
  // .fetch({ withRelated: ['posts.tags'] })
  .fetch()
  .then(function(event) {
    console.log(event.toJSON());
  })
  .catch(function(err) {
    console.error(err);
  });

// console.log(Messages);
