import React, { useState, useRef, useEffect } from 'react'
import './EditPage.css'
import { JobsList } from '../components/jobs/JobsList';
import { Profile } from '../components/profile/Profile';

export const EditPage = (props) => {
    console.log("PROPS IN EDITPAGE", props)
  return (
    <div id="editpage-div">
        <Profile profile={props.profile}/>
        <JobsList jobs={props.jobs} updateJobs={props.updateJobs} deleteJob={props.deleteJob}/>
    </div>
  )
}