import React from "react";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeFrom from "../components/BadgeFrom";
import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
class BadgeNew extends React.Component {
    state ={form: {
        firstName: '',
        lastName: '',
        twitter: '',
        jobTitle: '',
        email: '',
    }}

    handleChange = e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>
            <div className="col-6">
                <BadgeFrom  onChange={this.handleChange} fromValues={this.state.form}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
