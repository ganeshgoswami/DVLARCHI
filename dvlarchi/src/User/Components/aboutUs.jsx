import React from "react";

const cardData = [
  {
    name: "Ar. Shravan Puri",
    category: "Senior Architect",
    image:
      "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756725805/shravan_wrwara.jpg",
  },
  {
    name: "Ar. Sajal Sharma",
    category: "Senior Architect",
    image:
      "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756725802/sajal_uqufzg.jpg",
  },
  {
    name: "Ar. Gulapsha Khan",
    category: "Senior Inteior Designer",
    image:
      "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756725992/gulapsha_iuzwwt.jpg",
  },
  {
    name: "Ganesh Goswami",
    category: "Senior Engineer",
    image:
      "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756727602/WhatsApp_Image_2025-09-01_at_5.22.25_PM_zvlp31.jpg",
  },
  {
    name: "Amit",
    category: "Junior Interior Designer",
    image:
      "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756725802/amit_krlhcf.jpg",
  },

  {
    name: "Shushant",
    category: "Junior Engineer",
    image:
      "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756727151/WhatsApp_Image_2025-09-01_at_5.13.20_PM_p7v5vy.jpg",
  },
  {
    name: "Munesh",
    category: "Site Supervisor",
    image:
      "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756726910/munesh_ujdeei.jpg",
  },
];

const AboutUs = () => {
  return (
    <div className="container py-5">
      {/* Workshop Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-5 text-center mb-4 mb-md-0 mt-5">
          <img
            src="https://res.cloudinary.com/dudc9k1bp/image/upload/v1756712950/architecture_desktop_1_jpng8k.jpg"
            alt="Workshop"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-7">
          <h2 className="fw-bold mb-3">D.V.L Architects</h2>
          <p className="text-muted" style={{ textAlign: "justify" }}>
            One of the most trusted and creative architecture and interior
            design firms in Jaipur. We specialize in turning dreams into
            thoughtfully designed spaces that reflect both function and
            aesthetics. With a strong foundation in innovation, tradition, and
            sustainability, our designs are tailored to suit your lifestyle and
            vision. Whether you are building a new home, remodeling a space, or
            planning a commercial or institutional project, we offer a wide
            range of services including architectural design, 3D elevation,
            interior design, landscape planning, and eco-friendly architecture.
            Our team of experts is dedicated to delivering high-quality work
            with attention to detail, client collaboration, and timely
            execution. As the best architect in Jaipur, we aim to blend modern
            trends with timeless cultural elements, creating designs that
            inspire. At D.V.L Architect, your vision becomes our blueprint, and
            your satisfaction is our success.
          </p>
        </div>
      </div>

      {/* Foundation Section */}
      <div className="mb-5">
        <h2 className="fw-bold mb-3">Foundation</h2>
        <p className="text-muted" style={{ textAlign: "justify" }}>
          Our firm is a professional architectural practice committed to
          delivering innovative, functional, and sustainable design solutions.
          Established with a clear vision to provide excellence in architecture
          and planning, we specialize in residential, commercial, and
          institutional projects.
          <br />
          The firm, founded by <b> Ar. LOKESH PRAJAPAT </b>
          (B.Arch.), has designed and executed numerous projects of
          architectural quality both in India .
        </p>
      </div>

      {/* Vision & How We Work Cards */}
      <div className="row g-4 mb-5">
        <h2>
          {" "}
          <b>Dream.Vision.Life (D.V.L)</b>{" "}
        </h2>
        <div className="col-md-4">
          <div className="card h-100 shadow border-0">
            <div className="card-body">
              <h4 className="fw-bold mb-3 text-warning">Dream</h4>
              <p className="text-muted">
                <i>
                  {" "}
                  Every great space begins as a dream — a spark of imagination,
                  a feeling, a desire to create something meaningful. We believe
                  that architecture is born not just from need, but from
                  aspiration. Your dream is the soul of your space.
                </i>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow border-0">
            <div className="card-body">
              <h4 className="fw-bold mb-3 text-info">Vision</h4>
              <p className="text-muted">
                <i>
                  Dreams need clarity to become reality. That’s where vision
                  steps in — translating emotion into structure, ideas into
                  design, and imagination into blueprints. Our role is to align
                  your dreams with a clear, achievable, and inspired vision.
                </i>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow border-0">
            <div className="card-body">
              <h4 className="fw-bold mb-3 text-warning">Life</h4>
              <p className="text-muted">
                <i>
                  {" "}
                  Spaces are not just buildings. They are living environments —
                  where moments unfold, people connect, and stories are made. We
                  don’t just design structures; we shape experiences. Your
                  dream, guided by vision, becomes a life lived in harmony with
                  space.
                </i>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <hr />
        <h3>Images</h3>
        <div className="card h-100">
                  <img
                    src="https://res.cloudinary.com/dudc9k1bp/image/upload/v1756725801/lokesh_rmb1ie.jpg"
                    className="card-img-top"
                    style={{
                      height: "300px",
                      objectFit: "contain", // ✅ 
                      backgroundColor: "#f8f9fa", // thoda light bg taaki empty space clean lage
                      padding: "5px", // thoda gap image ke charo taraf
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Ar. Lokesh Prajapat</h5>
                    <p className="card-text">Principal Architect</p>
                 
                  </div>
                </div>
        <hr />
        <div className="container my-4">
          <div className="row g-4">
            {cardData.map((item, index) => (
              <div key={index} className="col-12 col-md-4">
                <div className="card h-100">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                    style={{
                      height: "250px",
                      objectFit: "contain", // ✅ 
                      backgroundColor: "#f8f9fa", // thoda light bg taaki empty space clean lage
                      padding: "10px", // thoda gap image ke charo taraf
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.category}</p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        {item.updated}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
