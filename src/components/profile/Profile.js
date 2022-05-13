import React from 'react'

export const Profile = (props) => {
  return (
    <div>
        <h2>{props.profile.name} {props.profile.surname}</h2>
        <img src="http://thispersondoesnotexist.com/image"></img>
        <h3>{props.profile.location}</h3>
        <h3>{props.profile.birthdate}</h3>
        <h3>{props.profile.email}</h3>
        <h3>{props.profile.phone}</h3>
        {props.profile.social.github ? <h3>GitHub: <a href={"https://github.com/"+props.profile.social.github}>{"@" + props.profile.social.github}</a></h3> : <div></div>}
        {props.profile.social.linkedin ? <h3>LinkedIn: <a href={"https://linkedin.com/in/"+props.profile.social.linkedin}>{"@" + props.profile.social.linkedin}</a></h3> : <div></div>}
        {props.profile.social.twitter ? <h3>Twitter: <a href={"https://twitter.com/"+props.profile.social.twitter}>{"@" + props.profile.social.twitter}</a></h3> : <div></div>}
      
    </div>
  )
}
