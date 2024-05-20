const router = require("express").Router();

router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "All movies list" });
  } catch (e) {
    next(e);
  }
});

router.post("/", (req, res, next) => {
  try {
    res.json({ msg: "Created new movie" });
  } catch (e) {
    next(e);
  }
});

router.get("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ msg: `Read one movie by ${id}` });
  } catch (e) {
    next(e);
  }
});

router.put("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ msg: `Update one movie by ${id}` });
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ msg: `Delete one movie by ${id}` });
  } catch (e) {
    next(e);
  }
});

router.patch("/:id/seats", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ msg: `Update the seat number of one movie by ${id}` });
  } catch (e) {
    next(e);
  }
});

router.patch("/:id/release-date", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ msg: `Update the release date of one movie by ${id}` });
  } catch (e) {
    next(e);
  }
});

/* (7)
Create
Read only one Movie
Update
Delete
List
Update the seats for one movie
Change the release date of 1 movie
*/

module.exports = router;
