/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, name: 'Alice', email: 'alice@example.com', password: 'password1'},
    {id: 2, name: 'Bob', email: 'bob@example.com', password: 'password2'},
    {id: 3, name: 'Charlie', email: 'charlie@example.com', password: 'password3'}
  ]);
};
