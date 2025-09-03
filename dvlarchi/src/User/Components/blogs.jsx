import React, { useEffect, useState } from "react";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch blog data
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/getBlogs`);
      setBlogs(res.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };
console.log(blogs)
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="container my-4">
  {blogs.map((blog) => (
    <div className="row mb-4" key={blog._id}>
      <div className="col-12">
        <div className="card mb-3" style={{ maxWidth: "100%" }}>
          <div className="row g-0 align-items-center">
            <div className="col-md-4 col-12">
              <img
                src={blog.image}
                className="img-fluid rounded-start"
                alt={blog.title}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="col-md-8 col-12">
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
                <p className="card-text">
                  <small className="text-muted">
                    Last updated {new Date(blog.updatedAt).toLocaleDateString()}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

  );
};

export default Blogs;
