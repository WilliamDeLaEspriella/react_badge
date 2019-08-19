import React from "react";

import "./styles/BadgeDetails.css";
import api from "../api";
import BadgeDetails from "./BadgeDetails";
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
    console.log("mount");
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

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  fetchData = async e => {
    this.setState({ loading: true, error: null });
    console.log("data");
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      console.log(data);
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
