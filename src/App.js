import { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import Banners from "./components/Banners";
import Sections from "./components/Sections";
import Navbar from "./components/Navbar";
import { links, sections, moreSections } from "./data";
import MoreSection from "./components/MoreSection";

export default function App() {
  const [currentNav, setCurrentNav] = useState(2);
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <div className="App">
      <Header openSearch={openSearch} setOpenSearch={setOpenSearch} />
      <Banners links={links} />
      <Sections sections={sections} />
      <img
        className="second-banner"
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fashion-sale-banner-template-design-389dc7a74f096738d1d425314404a2cd_screen.jpg?ts=1605613724"
        alt="sale-banner"
      />
      <div className="page-text">There is something For Everyone.</div>
      <MoreSection sections={moreSections} />
      <div className="divider"></div>
      <Navbar
        currentNav={currentNav}
        setCurrentNav={setCurrentNav}
        setOpenSearch={setOpenSearch}
      />
    </div>
  );
}
