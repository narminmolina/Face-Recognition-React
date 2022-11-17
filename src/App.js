import { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particle from "./components/Particle";
// import Particles from "react-particles-js";

// const esOptions = {
//   particles: {
//     line_linked: {
//       shadow: {
//         enable: true,
//         color: "#3CA9D1",
//         blur: 5,
//       },
//     },
//   },
// };

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particle />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* <Particles params={particlesOptions} /> */}

        {/* {<Logo />
        <ImageLinkForm />
        <FaceRocognition />} */}
      </div>
    );
  }
}

export default App;
