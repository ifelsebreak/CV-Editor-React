import React from 'react'
import './Profile.css'

export const Profile = (props) => {
  return (
    <div className="profile-div">
        <h2 id="profile-name">{props.profile.name} {props.profile.surname}</h2>
        <img className="profile-pic" src="http://thispersondoesnotexist.com/image"></img>
        <h3 className="profile-text">{props.profile.location}</h3>
        <h3 className="profile-text">{props.profile.birthdate}</h3>
        <h3 className="profile-text">{props.profile.email}</h3>
        <h3 className="profile-text">{props.profile.phone}</h3>
        {props.profile.social.github ? <h3 className="profile-text">GitHub: <a href={"https://github.com/"+props.profile.social.github}>{"@" + props.profile.social.github}</a></h3> : <div></div>}
        {props.profile.social.linkedin ? <h3 className="profile-text">LinkedIn: <a href={"https://linkedin.com/in/"+props.profile.social.linkedin}>{"@" + props.profile.social.linkedin}</a></h3> : <div></div>}
        {props.profile.social.twitter ? <h3 className="profile-text">Twitter: <a href={"https://twitter.com/"+props.profile.social.twitter}>{"@" + props.profile.social.twitter}</a></h3> : <div></div>}
      
    </div>
  )
}
