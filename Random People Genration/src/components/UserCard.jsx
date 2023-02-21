 import React from "react";

 const UserCard = (props) => {
    return(
        <div className="postCard">
            <img src={props.thumbnail} alt={props.first} />
            <p>{props.first} {props.last}</p>
        </div>
    );
 }

 export default UserCard;