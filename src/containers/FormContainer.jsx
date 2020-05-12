import React, { Component } from "react";
import CheckBox from "../components/CheckBox";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Select from "../components/Select";
import Button from "../components/Button";

class FormContainer extends Component {
  
  render() {
    return (
      <form className="container-fluid" onSubmit={this.props.onFormSubmit}>
        <Input
          inputtype={"text"}
          title={"Full Name"}
          name={"name"}
          value={this.props.userdata.newUser.name}
          placeholder={"Enter your name"}
          handleChange={ (e) => this.props.onHandleInput(e)}
        />{" "}
        <Input
          inputtype={"number"}
          name={"age"}
          title={"Age"}
          value={this.props.userdata.newUser.age}
          placeholder={"Enter your age"}
          handleChange={(e) => this.props.onHandleAge(e)}
        />{" "}        
        <Select
          title={"Gender"}
          name={"gender"}
          options={this.props.userdata.genderOptions}
          value={this.props.userdata.newUser.gender}
          placeholder={"Select Gender"}
          handleChange={(e) => this.props.onHandleInput(e)}
        />{" "}   
        <CheckBox
          title={"hobbies"}
          name={"hobbies"}
          options={this.props.userdata.skillOptions}
          selectedOptions={this.props.userdata.newUser.hobbies}
          handleChange={ (e) => this.props.onHandleCheck(e)}
        />{" "}      
        <TextArea
          title={"About you."}
          rows={10}
          value={this.props.userdata.newUser.about}
          name={"currentInfo"}
          handleChange={ (e) => this.props.onHandleText(e)}
          placeholder={"Describe your past experience and hobbies"}
        />       
        <Button
          action={this.props.onFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}       
        <Button
          action={this.props.onFormClear}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}       
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
