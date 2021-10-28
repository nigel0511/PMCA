import React from "react";
import MasterHead from "./MasterHead";
import About from "./About";
import MyGallery from "./MyGallery";
import MusicLesson from "./MusicLesson";
import Teachers from "./Teachers";
import Contact from "./Contact";
import WhyLearnMusic from "./WhyLearnMusic";

export default function Home() {
  return (
    <div>
      <MasterHead />
      <WhyLearnMusic />
      <About />
      <MyGallery />
      <MusicLesson />
      <Teachers />
      <Contact />
    </div>
  );
}
