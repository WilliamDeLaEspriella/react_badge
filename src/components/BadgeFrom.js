import React from "react";
class BadgeFrom extends React.Component {
  state = {};
//   onChange = e => {
//     // console.log({ value: e.target.value, name: e.target.name });
//     this.setState({ [e.target.name]: e.target.value });
//   };

  handleClick = e => {
    console.log("botton was clicked");
  };
  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.fromValues.firstName}
            />
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.fromValues.lastName}
            />
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="email"
              value={this.props.fromValues.email}
            />
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.fromValues.jobTitle}
            />
            <label>twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.fromValues.twitter}
            />
          </div>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn btn-primary"
          >
            save
          </button>
        </form>
      </div>
    );
  }
}
export default BadgeFrom;