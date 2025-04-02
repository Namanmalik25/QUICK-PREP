
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Welcome from "./components/WelcomePage/Welcome";
// import SwiperSec from "./components/WelcomePage/SwiperSec";
// import Modal from "react-modal";
// Modal.setAppElement("#root");
import Auth from "./components/Authentication/Auth"

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Welcome />} />
    //     <Route path="/Welcome" element={<Welcome />} />
    //     <Route path="/swiper" element={<SwiperSec />} />
        
    //    </Routes>
    // </Router>

    <Auth/>
  );
}

export default App;




