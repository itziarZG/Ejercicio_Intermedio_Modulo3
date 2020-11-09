import React from "react";
import Club from "./Club.js";

const ClubList = (props) => {
  let ulClubs = props.data.map((club) => (
    <li key={club.name}>
      <Club data={club} />
    </li>
  ));

  return <ul className="clubs">{ulClubs}</ul>;
};
export default ClubList;
