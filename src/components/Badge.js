import React from "react";
import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";
import Gravatar from "./Gravatar";
import { Link } from "react-router-dom";
import DeleteBadgeModal from "./DeleteBadgeModal";

class Badge extends React.Component {
  showAction = () => (
    <div className="Badge__section-name">
      <div className="row">
        <div>
          <Link
            className="btn btn-primary mb-4"
            to={`/badges/${this.props.badge.id}/edit`}
          >
            Edit
          </Link>
        </div>

        <div className="margen__div">
          <button  onClick = {this.props.onOpenModal} className="btn btn-danger">Delete</button>
          <DeleteBadgeModal
            isOpen={this.props.isOpen}
            isClose={this.props.isClose}
            onDeleteBadge={this.props.onDeleteBadge}
          />
        </div>
      </div>
    </div>
  );
  render() {
    const badge = this.props.badge;
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="logo conferencia" />
        </div>
        <div className="Badge__section-name">
          <Gravatar className="Badge__avatar" avatar={badge.avatar} />
          <h1>
            {badge.first_name}
            <br /> {badge.last_name}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{badge.first_name}</h3>
          <div>@{badge.last_name}</div>
        </div>
        <div className="Badge__footer">#conferencia</div>
        {this.showAction()}
      </div>
    );
  }
}
export default Badge;
