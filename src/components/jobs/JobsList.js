import React, { useState } from 'react'
import './JobsList.css'
import { JobItem } from './JobItem'
import { AddJob } from './AddJob'

export const JobsList = (props) => {
  
  const [showEditJobs, setShowEditJobs] = useState(false)
  const [showDiscardButton, setShowDiscardButton] = useState(false)
  const [showAddButton, setShowAddButton] = useState(false)

  const toggleAddButton = () => {
    setShowAddButton(prevShowAddButton => !prevShowAddButton)
  }

  const handleEditJobs = () => {
    setShowEditJobs(true)
    setShowAddButton(true)
    setShowDiscardButton(true)
    console.log("showDiscardButton", showDiscardButton)
  }

  const handleDiscardEditJobs = () => {
    setShowEditJobs(false)
    setShowAddButton(false)
    setShowDiscardButton(false)
    console.log("showAddButton", showAddButton)
  }

  console.table(props.jobs)
  console.log("length: ", props.jobs.length)
  console.log("App.js -> JobsList.js: ", props.updateJobs)
  const updateJobs = (updatedJobs) => {
    props.updateJobs(updatedJobs)
  }

  const deleteJob = (index) => {
    props.deleteJob(index)
  }

  return (
    <div className="jobslist-div">
      <h2 className="jobslist-title"> Work Experience</h2>
      <button onClick={handleEditJobs}>Edit</button>
      {showDiscardButton ? <button onClick={handleDiscardEditJobs}>Discard</button> : null}
      {props.jobs.length > 0 ?
        <div>
          <h3 className="jobslist-text">{props.jobs.length} job position{props.jobs.length > 1 ? "s" : ""} since {props.jobs[0].date[0].slice(-4)}</h3>
          {props.jobs && props.jobs.map((job) => {
            return <ul><JobItem key={job.id} title={job.title} date={job.date} location={job.location} description={job.description} job={job} jobs={props.jobs} deleteJob={deleteJob} showEditJobs={showEditJobs}/></ul>
          })}
        </div> 
        : <p>No work experiences</p>
      }
      <AddJob jobs={props.jobs} updateJobs={updateJobs} showAddButton={showAddButton} toggleAddButton={toggleAddButton} />
    </div>
    )
}
 