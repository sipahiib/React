import React, { Component } from "react";

const UserContext = React.createContext();
//provider, consumer

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => action.payload !== user.id),
      };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    default:
      return state;
  }
};

export class UserProvider extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "sipahi",
        departman: "yazılım",
        //salary:5000
      },
      {
        id: 2,
        name: "bolat",
        departman: "yazılım",
        salary: "6000",
      },
    ],

    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;
