exports.up = (knex, Promise) => {
  return knex.schema.createTable('events', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('name').notNullable();
    table
      .string('slug')
      .notNullable()
      .unique();
    table.jsonb('attrs');
    table.dateTime('createdAt').defaultTo(knex.raw('now()'));
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('events');
};
