import React from "react";

import "./styles/BadgeDetails.css";
import api from "../api";
import BadgeDetails from "./BadgeDetails";
import { UserRequest } from "../api/index";
// import DeleteBadgeModal from '../components/DeleteBadgeModal';

class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    modalIsOpen: false,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    }
  };

  componentDidMount() {
    this.fetchData();
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
  fetchData = async e => {
    const user_id = this.props.match.params.badgeId;
    this.setState({ loading: true, error: null });
    try {
      const {
        data: { data }
      } = await UserRequest(user_id);
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    const badge = this.state.form;
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

export default BadgeDetailsContainer;
