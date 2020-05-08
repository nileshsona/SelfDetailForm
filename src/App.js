import React, { Component } from "react";
import "./App.css";
import FormContainer from "./containers/FormContainer";
import NavBar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="row justify-content-center">
          <div className="col-6">
            <FormContainer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
