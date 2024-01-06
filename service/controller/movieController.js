
const MOVIE = require('./MOVIE.json')
const findAll = async (req, res) => {
  return res.json({
    message: "success",
    status: 200,
    data: MOVIE,
  });
};

module.exports = {
  findAll,

};
