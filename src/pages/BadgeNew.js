import React from "react";
// import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeFrom from "../components/BadgeFrom";
import "./styles/BadgeNew.css";
import header from "../images/platziconf-logo.svg";
import api from "../api";
class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      twitter: "",
      jobTitle: "",
      email: ""
    },
    loading: true,
    error: null
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSumbit = async e => {
    e.preventDefault();
    this.setState({
      loading: true,
      error: null
    });
    try {
      let res = await api.badges.create(this.state.form);
      console.log(res)
    } catch (error) {
      this.setState({
        loading: false,
        error: true
      });
    }
  };
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "firstName"}
                lastName={this.state.form.lastName || "lastName"}
                twitter={this.state.form.twitter || "twitter"}
                jobTitle={this.state.form.jobTitle || "jobTitle"}
                email={this.state.form.email || "email"}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>
            <div className="col-6">
              <BadgeFrom
                handleSumbit={this.handleSumbit}
                onChange={this.handleChange}
                fromValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
