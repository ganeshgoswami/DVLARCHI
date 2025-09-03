import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Form, Button } from "react-bootstrap";

const GetBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const [formData, setFormData] = useState({
    description: "",
    image: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  console.log(blogs);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this?");
    if (!confirm) return;

    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/deleteblog/${id}`);
      fetchData();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/getBlogs`);
      setBlogs(res.data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleEditClick = (item) => {
    setEditingItem(item);
    setFormData({
      description: item.description,
      image: null,
    });
    setShowModal(true);
  };

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      const updatedData = new FormData();
      updatedData.append("description", formData.description);
      if (formData.image) {
        updatedData.append("image", formData.image);
      }

      await axios.patch(
        `${process.env.REACT_APP_API_URL}/updateBlog/${editingItem._id}`,
        updatedData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      
      setShowModal(false);
      setFormData({
        description: "",
        image: null,
      });
      fetchData();
    } catch (err) {
      console.error("Update error:", err);
      alert("Error updating blog. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // read more text
  const ReadMoreText = ({ text }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const truncateWords = (str, num) => {
      return (
        str.split(" ").slice(0, num).join(" ") +
        (str.split(" ").length > num ? "..." : "")
      );
    };

    return (
      <div>
        <p className="mb-1">{isExpanded ? text : truncateWords(text, 8)}</p>
        {text.split(" ").length > 8 && (
          <button
            className="btn btn-link p-0"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Interior Data List</h3>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Image</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">
                No data found.
              </td>
            </tr>
          ) : (
            blogs.map((item) => (
              <tr key={item._id}>
                <td>
                  <img
                    className="img-table"
                    src={item.image}
                    alt="interior"
                    width="60"
                    height="60"
                  />
                </td>

                <td>
                  <ReadMoreText text={item.description} />
                </td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEditClick(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* ✅ Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Blogs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Change Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleFormChange}
                accept="image/*"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button 
            variant="primary" 
            onClick={handleUpdate}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Saving...
              </>
            ) : (
              "Save"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default GetBlogs;
