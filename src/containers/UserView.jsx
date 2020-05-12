import React from 'react'


const buttonStyle = {
    margin: "10px 10px 10px 10px"
  };

const UserView = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Hobbies</th>
        <th>About Me</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      { props.users!== undefined ? (
          <tr>
            <td>{props.users.name}</td>
            <td>{props.users.age}</td>
            <td>{props.users.gender}</td>
            <td>{props.users.hobbies}</td>
            <td>{props.users.about}</td>
            <td>
              <button onClick={props.onHandleEdit} className="btn btn-primary" 
                style={buttonStyle}>Edit</button>
              <button onClick={props.onHandleDelete} className="btn btn-secondary"
                style={buttonStyle}>Delete</button>
            </td>
          </tr>
      ) : (
        <tr>
          <td colSpan={5}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserView