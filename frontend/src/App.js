import "./assets/css/App.css";
import Routes from "./routes/routes.js";
import Header from "./layouts/Header";
import Footer from "./components/sections/footer";

function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
