const Blog = require("../modals/Blogs"); 

exports.addBlogs = async (req, res) => {
  try {
    const imagePath = req.file ? `/images/blogs/${req.file.filename}` : "";

    const newBlog = new Blog({
      image: imagePath,
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

    const updatedFields = {
      description: req.body.description,
    };

  if (req.file) {
  updatedFields.image = `/images/blogs/${req.file.filename}`;
}


    const updated = await Blog.findByIdAndUpdate(id, updatedFields, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
};
