import './App.css';
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";


import Addarchitecturedata from "./AdminPenal/addData/Addarchitecturedata";
import AdminHome from "./AdminPenal/adminHome/adminhome";
import ViewArchitectureList from "./AdminPenal/getAllData/getarchitecturedata";

import AdminNavbar from "./AdminPenal/adminNavbar/adminNavbar";
import Footer from "./AdminPenal/adminFooter/adminFooter";
import Login from "./AdminPenal/LoginPage/Login";

import HomePage from "./User/Components/homepage";
import UserNavbar from "./User/UserNavbar/userNavbar";
import { AdminAuthContext } from "./AdminAuthContext/AdminAuthContext";
import WhatsAppIcon from './WhatsAppIcon/WhatsAppIcon';
import AboutUs from './User/Components/aboutUs';
import ContactUs from './User/Components/contactUs';
import AddBlogs from './AdminPenal/addData/addBlogs';
import ArchitectureType from './User/Components/architecture-category';
import GetBlogs from './AdminPenal/getAllData/getblogs';
import Blogs from './User/Components/blogs';
import ImageGallery from './User/Components/imageGallery';

function App() {
  const { isAdminLoggedIn } = useContext(AdminAuthContext);

  return (
    <div className="App">
      {isAdminLoggedIn ? <AdminNavbar /> : <UserNavbar />}
         <WhatsAppIcon />

      <Routes>
        {!isAdminLoggedIn && <Route path="/admin" element={<Login />} />}
        <Route path="/home" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/image-gallery/:id" element={<ImageGallery />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/architect-category/:architecturetype" element={<ArchitectureType />} />
         <Route path="/" element={<HomePage />} />
        {isAdminLoggedIn && (
          <>
            <Route path="/adminhome" element={<AdminHome />} />
            <Route path="/blogslist" element={<GetBlogs />} />
            <Route path="/addarchitecture" element={<Addarchitecturedata />} />
            <Route path="/architectureslist" element={<ViewArchitectureList />} />
            <Route path="/Addblogs" element={<AddBlogs />} />
          </>
        )}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
