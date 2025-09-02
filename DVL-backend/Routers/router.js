const express = require("express");
const router = express.Router();
const architecturecontroller = require("../Controlers/Architecturecontroler");
const blogController = require("../Controlers/BlogsController");
const contactController = require("../Controlers/ContactController");
const adminAPI = require("../Controlers/Adminlogin");
const multer = require("multer");
const cloudinary = require("../Config/cloudinary"); // 👈 your config

// Use memory storage (no temp folder needed)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Helper function for Cloudinary upload from buffer
const uploadToCloudinary = (fileBuffer, folder) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream({ folder }, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
    stream.end(fileBuffer);
  });
};

// ================= ADMIN =================
router.post("/adminlogin", adminAPI.adminlogin);

// ================= CONTACT =================
router.post("/contact", contactController.contactForm);

// ================= BLOGS =================
router.post("/addblogs", upload.single("image"), async (req, res) => {
  try {
    let imageUrl = "";
    if (req.file) {
      console.log(req.file)
      const result = await uploadToCloudinary(req.file.buffer, "images/blogs");
      imageUrl = result.secure_url;
    }
    req.body.imageUrl = imageUrl;
    await blogController.addBlogs(req, res);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/getBlogs", blogController.getBlogs);
router.delete("/deleteblog/:id", blogController.deleteblog);

router.patch("/updateBlog/:id", upload.single("image"), async (req, res) => {
  try {
    let imageUrl;
    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, "images/blogs");
      imageUrl = result.secure_url;
    }
    req.body.imageUrl = imageUrl;
    await blogController.updateBlog(req, res);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ================= ARCHITECTURE =================
router.get("/getArchitectures", architecturecontroller.getArchitectures);
router.get("/architecturecategory/:architecureType", architecturecontroller.architecturecategory);
router.get("/architectureSearchId/:id", architecturecontroller.architectureSearchId);
router.delete("/deletearchitecturedata/:id", architecturecontroller.deletearchitecturedata);

router.post("/architecturedata", upload.array("images", 10), async (req, res) => {
  try {
    const imageUrls = [];
    for (let file of req.files) {
      const result = await uploadToCloudinary(file.buffer, "images/uploads");
      imageUrls.push(result.secure_url);
    }
    req.body.images = imageUrls;
    await architecturecontroller.architecturedata(req, res);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.patch("/updateArchitecturedata/:id", upload.array("images", 10), async (req, res) => {
  try {
    const imageUrls = [];
    if (req.files && req.files.length > 0) {
      for (let file of req.files) {
        const result = await uploadToCloudinary(file.buffer, "images/uploads");
        imageUrls.push(result.secure_url);
      }
    }
    req.body.images = imageUrls;
    await architecturecontroller.updateArchitecture(req, res);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
