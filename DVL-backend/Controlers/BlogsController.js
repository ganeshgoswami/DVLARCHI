const Blog = require("../modals/Blogs"); 

exports.addBlogs = async (req, res) => {
  try {
    // Use Cloudinary URL from router
    const imageUrl = req.body.imageUrl || "";

    const newBlog = new Blog({
      image: imageUrl, // ✅ store cloudinary link, not local path
      description: req.body.description,
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




exports.getBlogs = async (req, res) => {
  try {
    const data = await Blog.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(data);
    
  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteblog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    console.log()
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting", error });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;

    // Find existing blog
    const existingBlog = await Blog.findById(id);
    if (!existingBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const updatedFields = {
      description: req.body.description || existingBlog.description,
    };

    // Handle image update - use Cloudinary URL if new image uploaded
    if (req.body.imageUrl) {
      updatedFields.image = req.body.imageUrl; // Cloudinary URL from router
    } else {
      updatedFields.image = existingBlog.image; // Keep existing image
    }

    const updated = await Blog.findByIdAndUpdate(id, updatedFields, { new: true });
    console.log('Updated blog:', updated);
    res.status(200).json({
      message: "Blog updated successfully",
      data: updated
    });
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ message: "Update failed", error: err.message });
  }
};
