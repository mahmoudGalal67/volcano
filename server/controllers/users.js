const { db } = require("../DB.js");

const getUsers = async (req, res) => {
  const q = "SELECT * FROM users";
  try {
    db.query(q, [req.params.userId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
const deleteUser = async (req, res) => {
  const q = "DELETE FROM users WHERE `id` = ?";
  try {
    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.send("user has been deleted");
    });
  } catch (err) {
    res.status(401).send(err);
  }
};

module.exports={
  deleteUser,
  getUsers
}
