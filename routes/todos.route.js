const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {});
router.get("/:todoId", (request, response) => {});
router.post("/", (request, response) => {});
router.put("/", (request, response) => {});

module.exports = router;
