import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MacBookAir1 from "./pages/MacBookAir1";
import Linkedin from "./pages/Linkedin";
import Twitter from "./pages/Twitter";
import FacebookF from "./pages/FacebookF";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/linkedin":
        title = "";
        metaDescription = "";
        break;
      case "/twitter":
        title = "";
        metaDescription = "";
        break;
      case "/facebookf":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MacBookAir1 />} />
      <Route path="/linkedin" element={<Linkedin />} />
      <Route path="/twitter" element={<Twitter />} />
      <Route path="/facebookf" element={<FacebookF />} />
    </Routes>
  );
}
export default App;
