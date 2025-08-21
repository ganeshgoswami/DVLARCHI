const { Architecturelist } = require("../modals/Architecturemodal");

exports.getArchitectures = async (req, res) => {
  try {
    const data = await Architecturelist.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(data);
  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.architecturedata = async (req, res) => {
  try {
    const { formType, category, address, desc, Area, status } = req.body;

    // If multiple images are uploaded, req.files will be an array
    const images = req.files ? req.files.map((file) => file.filename) : [];

    const newData = new Architecturelist({
      formType,
      category,
      address,
      desc,
      Area,
      status,
      images, // store as array in MongoDB
    });

    await newData.save();
    res.status(201).json({
      message: "Architecture data added successfully",
      data: newData,
    });
  } catch (error) {
    console.error("Error adding architecture data:", error);
    res.status(500).json({
      message: "Failed to add architecture data",
      error,
    });
  }
};

exports.deletearchitecturedata = async (req, res) => {
  try {
    await Architecturelist.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting", error });
  }
};

// PATCH route to update architecture by ID
exports.updateArchitecture = async (req, res) => {
  try {
    const { id } = req.params;

    // Find existing record
    const existingData = await Architecturelist.findById(id);
    if (!existingData) {
      return res.status(404).json({ message: "Data not found" });
    }

    // Replace old images with new images if uploaded
    let updatedImages = [];
    if (req.files && req.files.length > 0) {
      updatedImages = req.files.map((file) => file.filename); // new images only
    }

    // Prepare updated fields
    const updatedFields = {
      formType: req.body.formType || existingData.formType,
      category: req.body.category || existingData.category,
      address: req.body.address || existingData.address,
      desc: req.body.desc || existingData.desc,
      Area: req.body.Area || existingData.Area,
      status: req.body.status || existingData.status,
      images: updatedImages,
    };

    const updated = await Architecturelist.findByIdAndUpdate(
      id,
      updatedFields,
      { new: true }
    );
    res.status(200).json(updated);
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ message: "Update failed", error: err.message });
  }
};

// Controller: architectureController.js

exports.architecturecategory = async (req, res) => {
  try {
    let { architecureType } = req.params; // URL param

    if (!architecureType) {
      // ✅ same variable name
      return res.status(400).json({
        statusCode: 400,
        message: "Type Architecture is required.",
      });
    }

    const findarchitecturedata = await Architecturelist.find({
      formType: architecureType,
    }).sort({ createdAt: -1 });

    if (!findarchitecturedata.length) {
      return res.status(404).json({
        statusCode: 404,
        message: `No Data Found In Category: ${architecureType}`, // ✅ fixed variable
      });
    }

    res.status(200).json({
      statusCode: 200,
      message: `Data Found In Category: ${architecureType}`, // ✅ fixed variable
      data: findarchitecturedata,
    });
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: `Internal server error: ${err.message}`,
    });
  }
};

exports.architectureSearchId = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        statusCode: 400,
        message: "id is required.",
      });
    }

    const findarchitecturedata = await Architecturelist.findById(id);

    if (!findarchitecturedata) {
      return res.status(404).json({
        statusCode: 404,
        message: `No Data Found for ID: ${id}`,
      });
    }

    res.status(200).json({
      statusCode: 200,
      message: `Data Found for ID: ${id}`,
      data: findarchitecturedata,
    });
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: `Internal server error: ${err.message}`,
    });
  }
};
