// models/user.js

class User {
  static async getAll() {
    const users = await knex('users').select();
    return users;
  }

  static async getById(id) {
    const user = await knex('users').where({ id }).first();
    return user;
  }

  static async create(data) {
    const [id] = await knex('users').insert(data);
    const user = await this.getById(id);
    return user;
  }

  static async update(id, data) {
    await knex('users').where({ id }).update(data);
    const user = await this.getById(id);
    return user;
  }

  static async delete(id) {
    await knex('users').where({ id }).del();
    return;
  }
}

module.exports = User;
