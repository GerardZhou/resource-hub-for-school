import { useState } from "react";
import ResourceCard from "./components/ResourceCard";
import OuterComponent from "./components/OuterComponent";
import Title from "./components/Title";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnotherPage from "./components/AnotherPage";

import "./app.css";
function App() {
  const apClasses = [
    {
      name: "AP Art History",
      image:
        "https://about.jstor.org/wp-content/uploads/2013/10/armnig_10313257933.jpg",
    },
    {
      name: "AP Biology",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e0/Honeybee_landing_on_milkthistle02.jpg?20070128232536",
    },
    {
      name: "AP Calculus AB",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/Tangent_to_a_curve.svg",
    },
    {
      name: "AP Calculus BC",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/1e/Washer_method.png?20210731115654",
    },
    {
      name: "AP Chemistry",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/1V-LSD_Chemical_Structure.svg",
    },
    {
      name: "AP Chinese Language and Culture",
      image: "https://i.ytimg.com/vi/bIhqugVuSV4/mq2.jpg",
    },
    {
      name: "AP Comparative Government and Politics",
      image:
        "https://live-production.wcms.abc-cdn.net.au/f86a523451394147d052369ec3becf01?impolicy=wcms_crop_resize&cropH=450&cropW=800&xPos=0&yPos=0&width=862&height=485",
    },
    {
      name: "AP Computer Science A",
      image:
        "https://scriptmag.com/.image/t_share/MTY3Mzc4OTk2NTUwNDQ0NjU2/image-placeholder-title.jpg",
    },
    {
      name: "AP Computer Science Principles",
      image:
        "https://theforage.wpengine.com/wp-content/uploads/2022/12/what-is-cybersecurity.jpg",
    },
    {
      name: "AP English Language and Composition",
      image: "https://example.com/english-language.jpg",
    },
    {
      name: "AP English Literature and Composition",
      image: "https://example.com/english-literature.jpg",
    },
    {
      name: "AP Environmental Science",
      image: "https://example.com/environmental-science.jpg",
    },
    {
      name: "AP European History",
      image: "https://example.com/european-history.jpg",
    },
    {
      name: "AP French Language and Culture",
      image: "https://example.com/french.jpg",
    },
    {
      name: "AP German Language and Culture",
      image: "https://example.com/german.jpg",
    },
    {
      name: "AP Human Geography",
      image: "https://example.com/human-geography.jpg",
    },
    {
      name: "AP Italian Language and Culture",
      image: "https://example.com/italian.jpg",
    },
    {
      name: "AP Japanese Language and Culture",
      image: "https://example.com/japanese.jpg",
    },
    { name: "AP Latin", image: "https://example.com/latin.jpg" },
    {
      name: "AP Macroeconomics",
      image: "https://example.com/macroeconomics.jpg",
    },
    {
      name: "AP Microeconomics",
      image: "https://example.com/microeconomics.jpg",
    },
    { name: "AP Music Theory", image: "https://example.com/music-theory.jpg" },
    {
      name: "AP Physics 1",
      image: "https://example.com/physics-1.jpg",
    },
    {
      name: "AP Physics 2",
      image: "https://example.com/physics-2.jpg",
    },
    {
      name: "AP Physics C: Electricity and Magnetism",
      image: "https://example.com/physics-c-em.jpg",
    },
    {
      name: "AP Physics C: Mechanics",
      image: "https://example.com/physics-c-mechanics.jpg",
    },
    { name: "AP Psychology", image: "https://example.com/psychology.jpg" },
    { name: "AP Research", image: "https://example.com/research.jpg" },
    { name: "AP Seminar", image: "https://example.com/seminar.jpg" },
    {
      name: "AP Spanish Language and Culture",
      image: "https://example.com/spanish-language.jpg",
    },
    {
      name: "AP Spanish Literature and Culture",
      image: "https://example.com/spanish-literature.jpg",
    },
    { name: "AP Statistics", image: "https://example.com/statistics.jpg" },
    {
      name: "AP Studio Art: 2-D Design",
      image: "https://example.com/studio-art-2d.jpg",
    },
    {
      name: "AP Studio Art: 3-D Design",
      image: "https://example.com/studio-art-3d.jpg",
    },
    {
      name: "AP Studio Art: Drawing",
      image: "https://example.com/studio-art-drawing.jpg",
    },
    {
      name: "AP United States Government and Politics",
      image: "https://example.com/us-government.jpg",
    },
    {
      name: "AP United States History",
      image: "https://example.com/us-history.jpg",
    },
    {
      name: "AP World History",
      image: "https://example.com/world-history.jpg",
    },
  ];

  return (
    <div>
      <Title />
      <Router>
        <Routes>
          <Route path="/" element={<OuterComponent apClasses={apClasses} />} />
          <Route path="/another-page" element={<AnotherPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
