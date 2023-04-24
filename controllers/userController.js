// controllers/userController.js

const User = require('../models/user');

class UserController {
  static async index(req, res) {
    const users = await User.getAll();
    res.json(users);
  }

  static async show(req, res) {
    const id = req.params.id;
    const user = await User.getById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  }

  static async store(req, res) {
    const data = req.body;
    const user = await User.create(data);
    res.status(201).json(user);
  }

  static async update(req, res) {
    const id = req.params.id;
    const data = req.body;
    const user = await User.update(id, data);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  }

  static async destroy(req, res) {
    const id = req.params.id;
    await User.delete(id);
    res.sendStatus(204);
  }
}

module.exports = UserController;
