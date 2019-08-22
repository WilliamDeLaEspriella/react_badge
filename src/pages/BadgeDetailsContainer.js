import React from "react";
import { connect } from "react-redux";
import "./styles/BadgeDetails.css";
import api from "../api";
import BadgeDetails from "./BadgeDetails";
import * as badgesActions from "../actions/badgesActions";
// import DeleteBadgeModal from '../components/DeleteBadgeModal';

class BadgeDetailsContainer extends React.Component {
  state = {
    modalIsOpen:false
  }
  componentDidMount() {
    const user_id = this.props.match.params.badgeId;
    this.props.encontrarBadges(user_id);
  }
  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true });
  };

  handleDeleteBadge = async e => {
    this.setState({ loading: true, error: null });

    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.setState({ loading: false });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    const badge = this.props.badge;
    return (
      <BadgeDetails
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleDeleteBadge}
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
