import "./App.css";
// import Navbar from "./components/navbar/Navbar";
// import Header from "./components/header/Header";
// import Features from "./components/features/Features";
// import Footer from "./components/footer/Footer";

import {
  Navbar,
  Header,
  Features,
  Faq,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      <Features data-aos="fade-up" />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
