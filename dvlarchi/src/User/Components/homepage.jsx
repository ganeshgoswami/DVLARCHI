import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";


const HomePage = () => {
  const cards = [
    {
      title: "Architecture",
      img: "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756709814/architecture_desktop_1_f1fvas.jpg",
      textColor: "text-white",
    },
    {
      title: "Interior",
      img: "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756709785/interior_desktop_m8xm8d.jpg",
      textColor: "text-white",
    },

    {
      title: "Warehouse",
      img: "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756714782/warehouse_t9ndkf.jpg",
      textColor: "text-white",
    },
    {
      title: "Cafe",
      img: "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756714782/cafe_k6p35f.jpg",
      textColor: "text-white",
    },
    {
      title: "Landscaping",
      img: "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756714907/landscaping_ff7tbd.jpg",
      textColor: "text-white",
    },

  ];

  const images = [
    
    "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756717315/Living_Dining_2_rt1if1.png",
    "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756717314/pawan_scene_2_psd_fkakyh.jpg",
    "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756717310/Living_Dining_1_dhspg7.png",
    "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756717309/Living_Dining_7_glbp9h.png",
    "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756717308/Living_Dining_3_rbzdeb.png",
    "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756717306/cabin_2_2_psd_tpioqi.jpg",
    "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756717303/cabin_1_scene_11_psd_gjh8aa.jpg",
    "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756717302/bedroom_1_scene_1_revise_psd_rlvh4i.jpg",
    "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756717298/pawan_room_scene_1_psd_lbhi0k.jpg",
    "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756717296/cabin_1_scene_2_psd_dfna79.jpg",
    "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756717296/bedroom_scene1_psd_xlvkfs.jpg",
    "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756717133/bedroom_2_scene_2_revise_psd_p7j2ts.jpg",
    "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756717133/Living_Dining_5_halrlx.png",
    "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756717132/bedroom_1_psd_yhmo2u.jpg"
  ];
  const sketchesData = [
    "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756723837/PhotoFunia-1756720146_mzl1k1.jpg",
    "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756723835/WhatsApp_Image_2025-09-01_at_3.31.15_PM_xkmccd.jpg",
    "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756723833/WhatsApp_Image_2025-09-01_at_3.31.15_PM_1_kcdndz.jpg",
    "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756723831/PhotoFunia-1756723753_xe34yt.jpg",
    "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756723831/WhatsApp_Image_2025-09-01_at_3.44.36_PM_cue1gr.jpg",
    "https://res.cloudinary.com/dudc9k1bp/image/upload/v1756723830/WhatsApp_Image_2025-09-01_at_3.47.42_PM_srkg7e.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="container my-5">
      <p className="mt-4 text-sm leading-relaxed text-success">
            At DVL Architects, we're here to make your architectural dreams
            come true!
          </p>
      <div className="row g-4 mb-2 d-flex justify-content-center">
        {cards.map((card, index) => (
          <div className="col-12 col-md-6" key={index}>
            <Link
              to={`/architect-category/${card.title}`}
              className="card text-white shadow border-0 rounded overflow-hidden position-relative card-height"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              <div
                className="position-absolute top-50 start-50 translate-middle text-center px-3"
                style={{ width: "100%" }}
              >
                <p
                  className={
                    "text-uppercase fw-bold font-size-60 " + card.textColor
                  }
                >
                  {card.title}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="m-4">
        <hr />
        <h3 className="m-3 p-3">
          {" "}
          <b>Concepts</b>{" "}
        </h3>
        <hr />
      </div>
      <div className="carousel-container height-200 mt-3">
        <img
          src={images[currentIndex]}
          alt="carousel"
          className="carousel-image"
        />
      </div>

      <div className="container text-center mt-2">
        <hr />
        <h3 className="m-4 p-3">Sketches Carousel</h3>
        <hr />
        <div className="d-flex justify-content-center align-items-center my-4">
          <div className="d-flex flex-wrap justify-content-center">
            {sketchesData.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`sketch-${index}`}
                style={{
                  width: "300px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
