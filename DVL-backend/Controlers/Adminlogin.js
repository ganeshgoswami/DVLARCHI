const { Admin } = require("../modals/admin");

exports.adminlogin = async (req, res) => {
  const { username, password } = req.body;

try {
    // Make sure field names match exactly
    const loginAdmin = await Admin.findOne({ username: username });
   
    if (!loginAdmin) {
      return res.status(404).json({
        message: "Username not found",
        status: 404,
      });
    }
 

    if (loginAdmin.password !== password) {
      return res.status(401).json({
        message: "Incorrect password",
        status: 401,
        data: null,
      });
    }

    return res.status(202).json({
      message: "Login successful",
      status: 202,
      data: loginAdmin,
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({
      message: "Internal Server Error",
      status: 500,
    });
  }
};
