// const {Interiorlist} = require('../modals/Interiormodal')



// exports.getInteriors = async (req, res) => {
//   try {
//     const data = await Interiorlist.find().sort({ createdAt: -1 }); // latest first
//     res.status(200).json(data);
    
//   } catch (error) {
//     console.error("Fetch Error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // POST a new interior
// exports.interiordata = async (req, res) => {
//   try {
//     const { category, address, desc, Area, status } = req.body;
//     const image = req.file ? req.file.filename : null;

//     const newInterior = new Interiorlist({
//       category,
//       address,
//       desc,
//       Area,
//       status,
//       image,
//     });

//     await newInterior.save();
//     res.status(201).json(newInterior);
//   } catch (err) {
//     res.status(400).json({ error: "Invalid Data" });
//   }
// };


// exports.deleteInterior = async (req, res) => {
//   try {
//     await Interiorlist.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting", error });
//   }
// };

//  exports.updateinterior = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const updateData = {
//       category: req.body.category,
//       address: req.body.address,
//       Area: req.body.Area,
//       status: req.body.status,
//       desc: req.body.desc,
//     };

//     if (req.file) {
//       updateData.image = req.file.filename;
//     }

//     const updatedInterior = await Interiorlist.findByIdAndUpdate(
//       id,
//       updateData,
//       { new: true }
//     );

//     if (!updatedInterior) {
//       return res.status(404).json({ message: "Interior not found" });
//     }

//     res.status(200).json(updatedInterior);
//   } catch (error) {
//     console.error("Update error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };


// exports.interiorcategory = async (req, res) => {
//   try {
//     let { category } = req.params;

//     if (!category) {
//       return res.status(400).json({
//         statusCode: 400,
//         message: "Category name is required.",
//       });
//     }

//     const result = await Interiorlist.find({ category: category })

//     if (!result.length) {
//       return res.status(404).json({
//         statusCode: 404,
//         message: `No Data Found In Category: ${category}`,
//       });
//     }

//     res.status(200).json({
//       statusCode: 200,
//       message: `Data Found In Category: ${category}`,
//       data: result,
//     });
//   } catch (err) {
//     res.status(500).json({
//       statusCode: 500,
//       message: `Internal server error: ${err.message}`,
//     });
//   }
// };