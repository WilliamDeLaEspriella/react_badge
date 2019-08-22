import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import * as badgesActions from "../actions/badgesActions";
import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
class Badge extends React.Component {
  state = {
    loading: true,
    data: undefined,
    error: null
  };

  componentDidMount() {
    this.props.traerBadges();
  }
  // fetchDate = async () => {
  //   this.setState({ loading: true, error: null });
  //   try {
  //     const {
  //       data: { data }
  //     } = await UsersRequest();
  //     this.setState({ loading: false, data: data });
  //   } catch (error) {
  //     this.setState({ loading: false, error: error });
  //   }
  // };
  render() {
    if (this.props.error) return <PageError error={this.props.error} />;
    if (this.props.cargando === true) return <PageLoading />;
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badge where found</h3>
          <Link to="/badges/new" className="btn btn-primary">
            Create new badge
          </Link>
        </div>
      );
    }

    return (
      <div>
        {/* <Navbar /> */}
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="badges__conf-logo" src={confLogo} alt="logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="badges/new" className="btn btn-primary">
              new badge
            </Link>
          </div>
          <BadgesList badges={this.props.badges} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = reducers => reducers.badgesReducer;
export default connect(
  mapStateToProps,
  badgesActions
)(Badge);
