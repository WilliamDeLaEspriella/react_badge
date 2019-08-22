import React from "react";
import { connect } from "react-redux";
import "./styles/BadgeDetails.css";
import api from "../api";
import BadgeDetails from "./BadgeDetails";
import * as badgesActions from "../actions/badgesActions";
// import DeleteBadgeModal from '../components/DeleteBadgeModal';

class BadgeDetailsContainer extends React.Component {
  componentDidMount() {
    const user_id = this.props.match.params.badgeId;
    this.props.encontrarBadges(user_id);
  }

  render() {
    const badge = this.props.badge;
    return (
      <BadgeDetails
        badge={badge}
      />
    );
  }
}

const mapStateToProps = reducers => reducers.badgesReducer;
export default connect(
  mapStateToProps,
  badgesActions
)(BadgeDetailsContainer);
