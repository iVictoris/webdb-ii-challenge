
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    // creates a primary key called id
    table.increments();

    table.string('vin', 60).unique().notNullable();
    table.string('make', 60).notNullable();
    table.string('model', 60).notNullable();
    table.string('mileage', 60).notNullable();
    table.string('transmissionType', 60);
    table.string('titleStatus', 60);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
