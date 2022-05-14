import React from 'react'
import './Profile.css'

export const Profile = (props) => {
  console.log("PROPS IN PROFILE", props)
  return (
    <div id="profile-div">
        <div id="profile-header">
          <img id="profile-pic" src="http://thispersondoesnotexist.com/image"></img>
          <div id="profile-name-title">
            <h2 id="profile-name" className="profile-text">{props.profile.name} {props.profile.surname}</h2>
            <h3 id="profile-title" className="profile-text">{props.profile.title}</h3>
          </div>
        </div>
        <div className="profile-divider"></div>
        <h3 className="profile-text">{props.profile.location}</h3>
        <h3 className="profile-text">{props.profile.birthdate}</h3>
        <h3 className="profile-text">{props.profile.email}</h3>
        <h3 className="profile-text">{props.profile.phone}</h3>
        {props.profile.social.github ? <h3 className="profile-text">GitHub: <a href={"https://github.com/"+props.profile.social.github} target="_blank">{"@" + props.profile.social.github}</a></h3> : <div></div>}
        {props.profile.social.linkedin ? <h3 className="profile-text">LinkedIn: <a href={"https://linkedin.com/in/"+props.profile.social.linkedin} target="_blank">{"@" + props.profile.social.linkedin}</a></h3> : <div></div>}
        {props.profile.social.twitter ? <h3 className="profile-text">Twitter: <a href={"https://twitter.com/"+props.profile.social.twitter} target="_blank">{"@" + props.profile.social.twitter}</a></h3> : <div></div>}
    </div>
  )
}
