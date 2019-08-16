import React from "react";
import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="logo conferencia" />
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" src="https://www.gravatar.com/avatar/HASH" alt="avatar" />

          <h1>
            {this.props.first_name}
            <br /> {this.props.last_name}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>Front Ingenieri</h3>
          <div>@{this.props.twiter}</div>
        </div>
        <div className="Badge__footer">#conferencia</div>
      </div>
    );
  }
}
export default Badge;
