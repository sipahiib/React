import React, { Component } from "react";
import PropTypes from "prop-types";
import UserConsumer from "../context";
import { Link } from "react-router-dom";

// rcc yazıp Entera basınca aşağısı geldi otomatik.
class User extends Component {
  state = {
    isVisible: true,
  };

  onClickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  onDeleteUser = (dispatch, e) => {
    const { id } = this.props;

    dispatch({ type: "DELETE_USER", payload: id });
  };

  render() {
    const { id, name, departman, salary } = this.props; //destructing: props içindeki ifadeleri buraya yazarız. aşağıda kullanırız.
    const { isVisible } = this.state;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div>
              {/* <form>
                    <input type="text"/>
                        <button>Gönder</button>                    
                </form>  */}

              {/* <ul>
                    <li>İsim: {name}</li>
                    <li>Departman: {departman}</li>
                    <li>Maaş: {salary}</li>

                </ul> 
                */}

              <div className="col-md-8 mb-4">
                <div
                  className="card"
                  style={
                    isVisible
                      ? { backgroundColor: "#62848d", color: "white" }
                      : null
                  }
                >
                  <div className="card-header d-flex justify-content-between">
                    <h4 className="d-inline" onClick={this.onClickEvent}>
                      {name}
                    </h4>
                    <i
                      onClick={this.onDeleteUser.bind(this, dispatch)}
                      className="far fa-trash-alt"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </div>

                  {isVisible ? (
                    <div className="card-body">
                      <p className="card-text">Maaş: {salary}</p>
                      <p className="card-text">Departman: {departman}</p>
                      <Link
                        to={`edit/${id}`}
                        className="btn btn-dark btn-block"
                      >
                        Update User
                      </Link>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  departman: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

User.defaultProps = {
  name: "Bilgi yok",
  departman: "Bilgi Yok",
  salary: "Bilgi Yok",
};

// User componentini dışarıya export etmek için yazdık.
export default User;
