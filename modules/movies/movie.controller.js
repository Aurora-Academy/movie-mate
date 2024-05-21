const movieModel = require("./movie.model");

// movie create (create)
const create = async (payload) => {
  // create slug from title (slugify)
  const slug = "";
  // check if the slug exists in db
  const movie = await movieModel.findOne({ slug });
  if (movie) throw new Error("Movie title is already in use");
  // create the movie
  payload.slug = slug;
  return movieModel.create(payload);
};

// movie list (list)
const list = () => {
  return movieModel.find();
};

// get one movie (getById)
const getById = (id) => {
  return movieModel.findOne({ _id: id });
};

// update release Date (updateReleaseDate)
const updateReleaseDate = (id, payload) => {
  // check releaseDate is less than today (moment, luxon, date-fns)
  return movieModel.findOneAndUpdate({ _id: id }, payload, { new: true });
};

// update Movie Detail (update)
const update = (id, payload) => {
  return movieModel.updateOne({ _id: id }, payload);
};

// update Seat Number (updateSeats)
const updateSeats = (id, payload) => {
  // check if the movie seats are less than defined number
  return movieModel.findOneAndUpdate({ _id: id }, payload, { new: true });
};

// delete movie (remove)
const remove = (id) => {
  // movie ticket should not be sold
  // movie should not be ongoing (should not be in betwn release date & end Date)
  return movieModel.deleteOne({ _id: id });
};

module.exports = {
  create,
  list,
  getById,
  updateReleaseDate,
  update,
  updateSeats,
  remove,
};
