import React, { useRef, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import it from 'date-fns/locale/it';
registerLocale('it', it)

export const AddJob = (props) => {
  const [startdate, setStartdate] = useState(new Date());
  const [enddate, setEnddate] = useState(new Date());
  const  [jobs, setJobs] = useState([...props.jobs])
  const jobTitleRef = useRef()
  //const jobStartdateRef = useRef()
  const jobLocationRef = useRef()
  const jobDescriptionRef = useRef()

  console.log("JobsList.js -> AddJobs.js: ", props.updateJobs)

  function addJobHandler(e) {
    const title = jobTitleRef.current.value
    //const startdate = jobStartdateRef.current.value
    const location = jobLocationRef.current.value
    const description = jobDescriptionRef.current.value
    if (title === '') return
    if (location === '') return
    if (description === '') return
    //props.onUpdate(prevJobs => {
        //jobs = [...prevJobs, {id: uuidv4(), title: title, location: location}]
        //return jobs
        
        var newJob = {id: uuidv4(), title: title, location: location, date: [startdate.toLocaleString().split(' ')[0].slice(0, -1), enddate.toLocaleString().split(' ')[0].slice(0, -1)], description: description}
        var updatedJobs = [...props.jobs, newJob]
        console.log("[...jobs, newJob]: ", updatedJobs)
        props.updateJobs(updatedJobs)
    //})
    console.log(jobs)
    jobTitleRef.current.value = null
    //jobStartdateRef.current.value = null
    jobLocationRef.current.value = null

  }

  return (
    <div>
        <h4>Add a new work experience:</h4>
        <label htmlFor="title">Title: </label>
        <input ref={jobTitleRef} type="text" name="title" />
        <br></br>

        {/*<label for="date">Start date: </label>
        <input ref={jobStartdateRef} type="date" name="date" value={new Date().toLocaleString() + ""} max={new Date().toLocaleString() + ""}/>
        <br></br>*/}

        <label htmlFor="startdate">Start date: </label>
        <DatePicker locale="it" selected={startdate} name="startdate" onChange={(startdate) => setStartdate(startdate)}/>
        <br></br>

        <label htmlFor="enddate">End date: </label>
        <DatePicker locale="it" selected={enddate} name="enddate" onChange={(enddate) => setEnddate(enddate)}/>
        <br></br>

        <label htmlFor="location">Location: </label>
        <input ref={jobLocationRef} type="text" name="location" />
        <br></br>

        <label htmlFor="description">Description: </label>
        <input ref={jobDescriptionRef} type="text" name="description" />
        <br></br>

        <button onClick={addJobHandler}>Add work experience</button>
        </div>
  )
}
