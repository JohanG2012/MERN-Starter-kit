const find = (req, res) => {
  res.json(`get user with username ${req.params.username}`);
};

const create = (req, res) => {
  res.json('create user');
};

module.exports = {
  find,
  create
};
