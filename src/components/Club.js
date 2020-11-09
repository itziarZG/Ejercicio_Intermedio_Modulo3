import React from "react";
import "./club.scss";

const Club = (props) => {
  let liItems = props.data.members.map((item) => <li key={item}>{item}</li>);
  return (
    <>
      <div className="club">
        <div className={`club__logo ${props.data.fa}`}></div>
        <div className="club__texts">
          <h2 className="club__texts__title">{props.data.name}</h2>
          <small>Members</small>
          <ul className="club__texts__members">{liItems}</ul>
        </div>
      </div>
    </>
  );
};
export default Club;
