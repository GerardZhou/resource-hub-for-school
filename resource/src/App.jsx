import { useState } from "react";
import ResourceCard from "./components/ResourceCard";
import OuterComponent from "./components/OuterComponent";
import Title from "./components/Title";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnotherPage from "./components/AnotherPage";
import Footer from "./components/Footer";
import ScrollRestoration from "./components/ScrollRestoration";
import VisitorCounter from "./components/VisitorCounter";
import ContactForm from "./components/ContactForm";
import MissionStatement from "./components/MissionStatement";
import NavBar from "./components/NavBar";

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
        "https://veritaspress.com/images/blog/_800x450_crop_center-center_100_none/Depositphotos_173276132_l-2015.jpg",
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
        "https://rimmeysapgov.weebly.com/uploads/1/0/3/0/10305918/990930.jpg?372",
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
      image:
        "https://mariahmccune.weebly.com/uploads/1/9/2/8/19282013/header_images/1465222900.jpg",
    },
    {
      name: "AP English Literature and Composition",
      image:
        "https://excelsiorecampus.com/wp-content/uploads/2018/11/AP-English-Lit.png",
    },
    {
      name: "AP Environmental Science",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5WwhF7AWOzLkDS8nCzM-Mi1z7E2ZirWgzTA&s",
    },
    {
      name: "AP European History",
      image:
        "https://www.mrtredinnick.com/uploads/7/2/1/5/7215292/ap-euro-01_2_orig.png",
    },
    {
      name: "AP French Language and Culture",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Baguettes%2C_Paris%2C_France_-_panoramio.jpg/1200px-Baguettes%2C_Paris%2C_France_-_panoramio.jpg",
    },
    {
      name: "AP German Language and Culture",
      image: "https://cdn.mos.cms.futurecdn.net/sUZ2PzB275ZMBPoWJgqDxD.jpg",
    },
    {
      name: "AP Human Geography",
      image:
        "https://study.com/cimages/course-image/human-geography-textbook_137698_large.jpg",
    },
    {
      name: "AP Italian Language and Culture",
      image:
        "https://eatingarounditaly.com/wp-content/uploads/2023/03/breaking-pasta-scaled.jpg",
    },
    {
      name: "AP Japanese Language and Culture",
      image:
        "https://www.japanshoreexcursions.com/wp-content/uploads/Japanese-traditional-culture-facts.jpg",
    },
    {
      name: "AP Latin",
      image:
        "https://www.collegetransitions.com/wp-content/uploads/2024/02/ap-latin.jpg",
    },
    {
      name: "AP Macroeconomics",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VKRlvL4dsYAcGXdW6Xk7zlPi0Chshgh76w&s",
    },
    {
      name: "AP Microeconomics",
      image:
        "https://images.theconversation.com/files/418067/original/file-20210826-21-1sf8j51.png?ixlib=rb-4.1.0&rect=0%2C8%2C997%2C788&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
    },
    {
      name: "AP Music Theory",
      image: "https://enthu.com/blog/wp-content/uploads/2023/10/image2-13.png",
    },
    {
      name: "AP Physics 1",
      image:
        "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/672f46420dea.jpg",
    },
    {
      name: "AP Physics 2",
      image: "https://i.ytimg.com/vi/-Wvrwn1h784/maxresdefault.jpg",
    },
    {
      name: "AP Physics C: Electricity and Magnetism",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNv4pANNAWsL3SEOq2TdqNeOi_QoeU9w1CIg&s",
    },
    {
      name: "AP Physics C: Mechanics",
      image:
        "https://vt-vtwa-assets.varsitytutors.com/vt-vtwa/uploads/problem_question_image/image/3682/PS0_CapacitorCircuit.png",
    },
    {
      name: "AP Psychology",
      image:
        "https://www.american.edu/cas/psychology/images/colorful-marketing-brain-psych-mob-1710.jpg",
    },
    {
      name: "AP Research",
      image: "https://i.ytimg.com/vi/EzH-WmHPoCM/maxresdefault.jpg",
    },
    {
      name: "AP Seminar",
      image: "https://i.ytimg.com/vi/0gXjxvpBwS8/hqdefault.jpg",
    },
    {
      name: "AP Spanish Language and Culture",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7K4qhR__pJVUBz01f-9WP_FYaPtYt2P4coA&s",
    },
    {
      name: "AP Spanish Literature and Culture",
      image:
        "https://static.wixstatic.com/media/508373_593a49579dec43d1b336c89c52f44ff0~mv2.jpg/v1/fill/w_420,h_234,al_c,lg_1,q_80,enc_auto/508373_593a49579dec43d1b336c89c52f44ff0~mv2.jpg",
    },
    {
      name: "AP Statistics",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Standard_Normal_Distribution.png/800px-Standard_Normal_Distribution.png",
    },
    {
      name: "AP Studio Art: 2-D Design",
      image:
        "https://gwhsnews.org/wp-content/uploads/2017/02/KelleyDualSis-900x582.jpg",
    },
    {
      name: "AP Studio Art: 3-D Design",
      image:
        "https://www.agerart.com/uploads/1/2/7/9/12795042/unnamed-3_2_orig.jpg",
    },
    {
      name: "AP Studio Art: Drawing",
      image:
        "https://chhsart.weebly.com/uploads/1/3/3/0/13308104/7940002_orig.jpg",
    },
    {
      name: "AP United States Government and Politics",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHMHjkebZK7xL5Z_zw_zMdFL9P7gKAwHvzCQ&s",
    },
    {
      name: "AP United States History",
      image:
        "https://res.cloudinary.com/highereducation/images/w_1024,h_683,c_scale/f_auto,q_auto/v1659634390/BestColleges.com/BC_Resources_Colleges-Planning_test-Prep_AP-US_History_3.4.22_FTR_24329d5eb0/BC_Resources_Colleges-Planning_test-Prep_AP-US_History_3.4.22_FTR-1024x683.jpg",
    },
    {
      name: "AP World History",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOde7Hgu5I_5KioxORAKvtCB2h6qNhuYXGNQ&s",
    },
  ];

  return (
    <div>
      <Title />
      <Router>
        <ScrollRestoration />
        <NavBar />
        <Routes>
          <Route path="/" element={<OuterComponent apClasses={apClasses} />} />
          <Route path="/resources" element={<AnotherPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/mission-statement" element={<MissionStatement />} />
        </Routes>
      </Router>
      {/* <VisitorCounter /> */}
      <Footer />
    </div>
  );
}

export default App;
