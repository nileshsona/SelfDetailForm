import React, { Component } from "react";
import "./App.css";
import FormContainer from "./containers/FormContainer";
import NavBar from "./components/navbar";
import UserView from "./containers/UserView";
import Button from "./components/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        name: "",
        age: "",
        gender: "",
        hobbies: [],
        about: ""
      },

      genderOptions: ["Male", "Female", "Others"],
      skillOptions: ["Dancer", "Acting", "Writer"],
      isDataload: false
    };
  }

  handleFullName = e => {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  };

  handleAge = e => {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        age: value
      }
    }));
  };

  handleInput = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        [name]: value
      }
    }));
  };

  handleTextArea = e => {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        about: value
      }
    }));
  };

  handleCheckBox = e => {
    const newSelection = e.target.value;
    let newitemseletecd;

    if (this.state.newUser.hobbies.indexOf(newSelection) > -1) {
      newitemseletecd = this.state.newUser.hobbies.filter(
        s => s !== newSelection
      );
    } else {
      newitemseletecd = [...this.state.newUser.hobbies, newSelection];
    }

    this.setState(prevState => ({
      newUser: { ...prevState.newUser, hobbies: newitemseletecd }
    }));
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        isDataload: true
      }
    }));
    let userData = this.state.newUser;
    console.log(userData);
    //alert (JSON.stringify(userData));
  };

  handleClearForm = e => {
    e.preventDefault();
    this.setState({
      newUser: {
        name: "",
        age: "",
        gender: "",
        hobbies: [],
        about: ""
      }
    });
  };

  handleFormback = () => {
    
    this.setState(prevState =>({
      newUser: {
        ...prevState.newUser,
        isDataload: false
      }
    }));
  };
  handleFormedit = () => {
    
    this.setState(prevState =>({
      newUser: {
        ...prevState.newUser,
        isDataload: false
      }
    }));
  };
  handleFormDelete = () => {
    
    this.setState({
      newUser: {
        name: "",
        age: "",
        gender: "",
        hobbies: [],
        about: "",
        isDataload:false
      }
    });
  };

  render() {
    const buttonStyle = {
      margin: "10px 10px 10px 10px"
    };

    if (!this.state.newUser.isDataload) {
      return (
        <React.Fragment>
          <NavBar />
          <div className="row justify-content-center innerDiv">
            <div className="col-6">
              <FormContainer
                userdata={this.state}
                onFormSubmit={this.handleFormSubmit}
                onFormClear={this.handleClearForm}
                onHandleInput={this.handleInput}
                onHandleAge={this.handleAge}
                onHandleCheck={this.handleCheckBox}
                onHandleText={this.handleTextArea}
              />
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <NavBar />
          <div className="row justify-content-center innerDiv">
            <div className="col-6">
              <UserView users={this.state.newUser} 
              onHandleEdit={this.handleFormedit}
              onHandleDelete={this.handleFormDelete}  />
            </div>
          </div>
          <div className="col-12 divstyle">
            <Button
              action={this.handleFormback}
              type={"primary"}
              title={"Back"}
              style={buttonStyle}
            />{" "}
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;
