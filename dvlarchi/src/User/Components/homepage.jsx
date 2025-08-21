import React, { useEffect, useState } from "react";
import img1 from "../../architercter-img/building img 1.jpg";
import img2 from "../../architercter-img/Interior 2.jpg";
import img3 from "../../architercter-img/Construction1.jpg";
import img4 from "../../architercter-img/Building img.jpg";
import img5 from "../../architercter-img/pexels-marek-piwnicki-3907296-8991517.jpg";
import img6 from "../../architercter-img/pexels-pixabay-262347.jpg";
import img7 from "../../architercter-img/pexels-pixabay-271816.jpg";
import img8 from "../../architercter-img/pexels-enginakyurt-2036686.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  const cards = [
    {
      title: "Architecture",
      img: img1,
      textColor: "text-white",
    },
    {
      title: "Interior",
      img: img2,
      textColor: "text-primary",
    },

    {
      title: "Warehouse",
      img: img3,
      textColor: "text-warning",
    },
    {
      title: "Cafe",
      img: img5,
      textColor: "text-danger",
    },
    {
      title: "Landscaping",
      img: img6,
      textColor: "text-warning-emphasis",
    },

  ];

  const images = [
    require("../../architercter-img/Interior 2.jpg"),
    require("../../architercter-img/Interior 3.jpg"),
    require("../../architercter-img/Interior 4.jpg"),
    require("../../architercter-img/Interior 5.jpg"),
    require("../../architercter-img/Interior 6.jpg"),
    require("../../architercter-img/Interior 7.jpg"),
    require("../../architercter-img/Interior 8.jpg"),
  ];
  const sketchesData = [
    require("../../architercter-img/sketches2.jpg"),
    require("../../architercter-img/sketches3.jpg"),
    require("../../architercter-img/sketches4.jpg"),
    require("../../architercter-img/sketches5.jpg"),
    require("../../architercter-img/sketches6.jpg"),
    require("../../architercter-img/sketches7.jpg"),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  console.log(cards)

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
