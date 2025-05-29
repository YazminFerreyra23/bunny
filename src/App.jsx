import { Header } from "./components/Header";
import { WhyUs } from "./components/WhyUs";
import { OurServices } from "./components/OurServices";
import { Objetives } from "./components/Objetives";
import { NavBar } from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar />

      <Header />
      <OurServices />
      <Objetives />
      <WhyUs />
    </>
  );
}

export default App;
