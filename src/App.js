import React, { Component } from "react";
// import Particles from 'react-particles-js';
import Particle from "./components/Particle";

import Clarifai from "clarifai";
// import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import "./App.css";

//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
  apiKey: "YOUR API KEY HERE",
});

console.log(app);
// No Longer need this. Updated to particles-bg
// const particlesOptions = {
//   particles: {
//     number: {
//       value: 30,
//       density: {
//         enable: true,
//         value_area: 800
//       }
//     }
//   }
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  // onButtonSubmit = () => {
  //   this.setState({ imageUrl: this.state.input });
  //   app.models
  //     .predict(
  //       // HEADS UP! Sometimes the Clarifai Models can be down or not working as they are constantly getting updated.
  //       // A good way to check if the model you are using is up, is to check them on the clarifai website. For example,
  //       // for the Face Detect Mode: https://www.clarifai.com/models/face-detection
  //       // If that isn't working, then that means you will have to wait until their servers are back up. Another solution
  //       // is to use a different version of their model that works like the ones found here: https://github.com/Clarifai/clarifai-javascript/blob/master/src/index.js
  //       // so you would change from:
  //       // .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
  //       // to:
  //       // .predict('53e1df302c079b3db8a0a36033ed2d15', this.state.input)
  //       Clarifai.FACE_DETECT_MODEL,
  //       this.state.input
  //     )
  //     .then((response) => {
  //       console.log("hi", response);
  //       if (response) {
  //         fetch("http://localhost:3000/image", {
  //           method: "put",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify({
  //             id: this.state.user.id,
  //           }),
  //         })
  //           .then((response) => response.json())
  //           .then((count) => {
  //             this.setState(Object.assign(this.state.user, { entries: count }));
  //           });
  //       }
  //       this.displayFaceBox(this.calculateFaceLocation(response));
  //     })
  //     .catch((err) => console.log(err));
  // };

  render() {
    return (
      <div className="App">
        <Particle />

        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {/* <FaceRocognition /> */}
      </div>
    );
  }
}

export default App;
