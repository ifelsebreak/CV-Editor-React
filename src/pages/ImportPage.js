import React, { useState, useRef, useEffect } from 'react'
import './EditPage.css'
import { JobsList } from '../components/jobs/JobsList';
import { Profile } from '../components/profile/Profile';

export const ImportPage = (props) => {
    console.log("PROPS IN EDITPAGE", props)
  return (
    <div id="editpage-div">
        <h1>Import an existing CV</h1>
        <button>Upload JSON file</button>
        <button>Import from LinkedIn</button>
    </div>
  )
}