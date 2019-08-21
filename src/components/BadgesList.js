import React from "react";
import { Link } from "react-router-dom";
import "./styles/BadgesList.css";
import Gravatar from "./Gravatar";
//

class BadgesListItem extends React.Component {
  render() {
    const badge = this.props.badge
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          avatar={badge.avatar}
          // alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div>
          <strong>
            {badge.first_name} {badge.last_name}
          </strong>
          <br />@{badge.first_name}
          <br />
          {badge.last_name}
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <Link
                  to={`badges/${badge.id}/`}
                  className="text-reset text-decoration-none"
                >
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
