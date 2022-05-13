import React, { useRef, useState } from 'react'
import {v4 as uuidv4} from 'uuid'

export const AddJob = (props) => {
  
  var [jobs, setJobs] = useState([...props.jobs])
  const jobTitleRef = useRef()
  const jobStartdateRef = useRef()
  const jobLocationRef = useRef()

  console.log("JobsList.js -> AddJobs.js: ", props.updateJobs)

  function addJobHandler(e) {
    const title = jobTitleRef.current.value
    //const startdate = jobStartdateRef.current.value
    const location = jobLocationRef.current.value
    if (title === '') return
    //props.onUpdate(prevJobs => {
        //jobs = [...prevJobs, {id: uuidv4(), title: title, location: location}]
        //return jobs
        
        var newJob = {id: uuidv4(), title: title, location: location}
        props.updateJobs(jobs.push(newJob))
    //})
    console.log(jobs)
    jobTitleRef.current.value = null
    //jobStartdateRef.current.value = null
    jobLocationRef.current.value = null

  }

  return (
    <div>
        <h3>Add a new work experience</h3>
        <label htmlFor="title">Title: </label>
        <input ref={jobTitleRef} type="text" name="title" />
        <br></br>
        {/*<label for="date">Start date: </label>
        <input ref={jobStartdateRef} type="date" name="date" value={new Date().toLocaleString() + ""} max={new Date().toLocaleString() + ""}/>
        <br></br>*/}
        <label htmlFor="location">Location: </label>
        <input ref={jobLocationRef} type="text" name="location" />
        <br></br>
        <button onClick={addJobHandler}>Add work experience</button>
        </div>
  )
}
