const router = require("express").Router();

router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "List all orders", data: req.body });
  } catch (e) {
    next(e);
  }
});

router.post("/", (req, res, next) => {
  try {
    res.json({ msg: "Created one order" });
  } catch (e) {
    next(e);
  }
});

router.get("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ msg: `Get one Order by ${id}` });
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ msg: `Delete one Order by ${id}` });
  } catch (e) {
    next(e);
  }
});

router.patch("/:id/status", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ msg: `Change status of one Order by ${id}` });
  } catch (e) {
    next(e);
  }
});

router.put("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ msg: `update one Order by ${id}` });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
