import React from "react";
// import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeFrom from "../components/BadgeFrom";
import "./styles/BadgeNew.css";
import header from "../images/platziconf-logo.svg";
import api from "../api";
import PageLoading from "../components/PageLoading";
class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      twitter: "",
      jobTitle: "",
      email: ""
    },
    loading: false,
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
      await api.badges.create(this.state.form);
      // console.log(res)
      this.setState({
        loading: false
      });
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };
  render() {
    // if (this.state.error) return <PageError error={this.state.error}/>;
    if (this.state.loading === true) return <PageLoading />;
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
              <h1>New Attendant</h1>
              <BadgeFrom
                handleSumbit={this.handleSumbit}
                onChange={this.handleChange}
                fromValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
