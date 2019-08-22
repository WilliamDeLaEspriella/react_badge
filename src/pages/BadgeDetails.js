import React from "react";
import { Link } from "react-router-dom";
import "./styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";
// import DeleteBadgeModal from '../components/DeleteBadgeModal';

function BadgeDetails(props) {
  const badge = props.badge;

  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la Conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.first_name} {badge.last_name}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              badge={badge}
              isOpen={props.modalIsOpen}
              isClose={props.onCloseModal}
              onDeleteBadge={props.onDeleteBadge}
              onOpenModal={props.onOpenModal}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            
     
            
          </div>
        </div>
      </div>
    </div>
  );
}
//onClick={props.onOpenModal} >
export default BadgeDetails;
