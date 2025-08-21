import React from "react";
import img1 from "../../architercter-img/building img 1.jpg";
import img2 from "../../architercter-img/bulding img 3.jpg";
import img3 from "../../architercter-img/building img 2.jpg";
import img4 from "../../architercter-img/bulding img 4.jpg";

const AdminHome = () => {
  return (
    <div className=" flex items-center justify-center overflow-hidden text-center">
      <img
        src={img1}
        alt="Architect Office"
        className="home-image  object-contain m-2"
      />
      <img
        src={img2}
        alt="Architect Office"
        className="home-image  object-contain m-2"
      />
      <img
        src={img3}
        alt="Architect Office"
        className="home-image  object-contain m-2"
      />
      <img
        src={img4}
        alt="Architect Office"
        className="home-image  object-contain m-2"
      />
    </div>
  );
};

export default AdminHome;
