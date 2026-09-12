import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import CourseBrowser from "./components/CourseBrowser";
import AnotherPage from "./components/AnotherPage";
import Footer from "./components/Footer";
import ScrollRestoration from "./components/ScrollRestoration";
import ContactForm from "./components/ContactForm";
import MissionStatement from "./components/MissionStatement";
import NavBar from "./components/NavBar";
import ReactGA from "react-ga4";
import "./app.css";

ReactGA.initialize("G-P5G3ZYM1KL");
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

export default function App() {
  return (
    <Router>
      <div className="appShell">
        <a href="#main-content" className="skipLink">Skip to content</a>
        <ScrollRestoration />
        <NavBar />
        <main id="main-content" className="appMain" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<CourseBrowser />} />
            <Route path="/resources" element={<AnotherPage />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/about" element={<MissionStatement />} />
            <Route path="*" element={
              <section>
                <h1>Page not found</h1>
                <p>This address does not match a page in the resource hub.</p>
                <Link to="/">Browse AP courses</Link>
              </section>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
