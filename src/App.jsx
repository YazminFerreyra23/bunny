import { Header } from "./components/Header";
import { WhyUs } from "./components/WhyUs";
import { OurServices } from "./components/OurServices";
import { Objetives } from "./components/Objetives";
import { NavBar } from "./components/NavBar";
import { Contacto } from "./components/Contacto";
function App() {
  return (
    <>
      <NavBar />

      <Header />
      <OurServices />
      <Objetives />
      <WhyUs />
      <Contacto/>
    </>
  );
}

export default App;
