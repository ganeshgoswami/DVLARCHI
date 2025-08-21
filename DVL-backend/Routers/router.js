const express = require('express');
const router = express.Router();
const path = require("path");
const multer = require("multer");
const architecturecontroller = require('../Controlers/Architecturecontroler'); 
const blogController = require('../Controlers/BlogsController'); 
const contactController = require('../Controlers/ContactController'); 
const adminAPI = require("../Controlers/Adminlogin");

// const upload = multer({ dest: "uploads/" });




const blogStorage = multer.diskStorage({
 destination: (req, file, cb) => {
  cb(null, "images/blogs"); // ✅ sahi folder
},
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname); // file extension nikalega (.jpg/.png)
    cb(null, Date.now() + "-" + file.originalname); // ya ext jod ke save karo
    // cb(null, crypto.randomBytes(16).toString("hex") + ext); // agar random naam chahiye to
  },
});

const blogs = multer({ storage: blogStorage });


const architectureStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: architectureStorage });

// admin Login 
router.post("/adminlogin",adminAPI.adminlogin)

// contact Form 
router.post("/contact", contactController.contactForm);

// Blogs 
router.post("/addblogs", blogs.single("image"), blogController.addBlogs);
router.get("/getBlogs", blogController.getBlogs);
router.delete("/deleteblog/:id", blogController.deleteblog);
router.patch("/updateBlog/:id", blogs.single("image"), blogController.updateBlog);

// Architecture data  
router.get("/getArchitectures", architecturecontroller.getArchitectures);
router.get("/architecturecategory/:architecureType", architecturecontroller.architecturecategory);
router.get("/architectureSearchId/:id", architecturecontroller.architectureSearchId);
// router.post("/architecturedata", upload.array("image",10), architecturecontroller.architecturedata);
router.delete("/deletearchitecturedata/:id", architecturecontroller.deletearchitecturedata);
// router.patch("/updateArchitecturedata/:id", upload.array("image",10), architecturecontroller.updateArchitecture);
router.post("/architecturedata", upload.array("images", 10), architecturecontroller.architecturedata);
router.patch("/updateArchitecturedata/:id", upload.array("images", 10), architecturecontroller.updateArchitecture);



module.exports = router;
