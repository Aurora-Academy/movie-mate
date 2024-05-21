const router = require("express").Router();
const movieController = require("./movie.controller");
const { secure } = require("../../utils/secure");

router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "All movies list" });
  } catch (e) {
    next(e);
  }
});

router.post("/", secure(["admin"]), async (req, res, next) => {
  try {
    const result = await movieController.create(req.body);
    res.json({ msg: "Created new movie", data: result });
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await movieController.getById(id);
    res.json({ msg: `Read one movie by ${id}`, data: result });
  } catch (e) {
    next(e);
  }
});

router.put("/:id", secure(["admin"]), async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await movieController.update(id, req.body);
    res.json({ msg: `Update one movie by ${id}`, data: result });
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", secure(["admin"]), async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await movieController.remove(id);
    res.json({ msg: `Delete one movie by ${id}`, data: result });
  } catch (e) {
    next(e);
  }
});

router.patch("/:id/seats", secure(["admin"]), async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await movieController.updateSeats(id, req.body);
    res.json({
      msg: `Update the seat number of one movie by ${id}`,
      data: result,
    });
  } catch (e) {
    next(e);
  }
});

router.patch("/:id/release-date", secure(["admin"]), async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await movieController.updateReleaseDate(id, req.body);
    res.json({
      msg: `Update the release date of one movie by ${id}`,
      data: result,
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
