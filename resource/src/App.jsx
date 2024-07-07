import { useState } from "react";
import ResourceCard from "./components/ResourceCard";
import OuterComponent from "./components/OuterComponent";
import Title from "./components/Title";

import "./app.css";
function App() {
  const apClasses = [
    {
      name: "AP Art History",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiAyi0yWdBdQf53dMpJ8GcN2msCdLizK2CAg&s",
    },
    { name: "AP Biology", image: "https://example.com/biology.jpg" },
    { name: "AP Calculus AB", image: "https://example.com/calculus-ab.jpg" },
    { name: "AP Calculus BC", image: "https://example.com/calculus-bc.jpg" },
    { name: "AP Chemistry", image: "https://example.com/chemistry.jpg" },
    {
      name: "AP Chinese Language and Culture",
      image: "https://example.com/chinese.jpg",
    },
    {
      name: "AP Comparative Government and Politics",
      image: "https://example.com/comparative-government.jpg",
    },
    {
      name: "AP Computer Science A",
      image: "https://example.com/computer-science-a.jpg",
    },
    {
      name: "AP Computer Science Principles",
      image: "https://example.com/computer-science-principles.jpg",
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
      name: "AP Physics 1: Algebra-Based",
      image: "https://example.com/physics-1.jpg",
    },
    {
      name: "AP Physics 2: Algebra-Based",
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
      <OuterComponent apClasses={apClasses} />
    </div>
  );
}

export default App;
