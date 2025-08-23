const express = require("express");
const router = express.Router();
const Request = require("./request");

const pageSize = 20;

// create new request
router.put("/", async (req, res) => {
  try {
    const { requestorName, itemRequested } = req.body;
    const newRequest = await Request.create({ requestorName, itemRequested });
    res.status(201).json(newRequest);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// get requests
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const status = req.query.status;

    let filter = {};
    if (status) {
      filter.status = status;
    }
    
    const requests = await Request.find(filter).sort({ createdDate: -1 }).skip((page - 1) * pageSize).limit(pageSize);

    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// update status
router.patch("/", async (req, res) => {
  try {
    const { id, status } = req.body;
    const updated = await Request.findByIdAndUpdate(id, {status, lastEditedDate: new Date()}, {new: true}
);
    if (!updated) {
        return res.status(404).json({ error: "Request not found" });
    }
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


module.exports = router;
