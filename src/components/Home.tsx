import Header from "./Header";
import About from "./About";
import Mywork from "./Mywork";
import Connect from "./Connect";
import Snowfall from "react-snowfall";

function Home() {
  return (
    <>
      <Snowfall color="#82c3d9" />
        <Header />
        <About />
        <Mywork />
        <Connect />
    </>
  );
}

export default Home;
