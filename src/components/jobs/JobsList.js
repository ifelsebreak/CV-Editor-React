import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import './JobsList.css'
import { JobItem } from './JobItem'
import { AddJob } from './AddJob'

export const JobsList = (props) => {
  
  const jobs = useSelector(state => state.jobs)
  console.log("Redux jobs", jobs)

  const [showEditJobs, setShowEditJobs] = useState(false)
  const [showDiscardButton, setShowDiscardButton] = useState(false)
  const [showAddButton, setShowAddButton] = useState(false)

  const editButtonRef = useRef()

  const toggleAddButton = () => {
    setShowAddButton(prevShowAddButton => !prevShowAddButton)
  }

  const showEditButton = (e) => {
    if (!showEditJobs) editButtonRef.current.style.display = "flex";
  }

  const hideEditButton = (e) => {
    editButtonRef.current.style.display = "none";
  }

  const handleEditJobs = () => {
    hideEditButton()
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

  
  const updateJobs = (updatedJobs) => {
    props.updateJobs(updatedJobs)
  }

  const deleteJob = (index) => {
    props.deleteJob(index)
  }

  return (
    <div className="jobslist-div" onMouseEnter={showEditButton} onMouseLeave={hideEditButton}>
      <div className="jobslist-header"><h2 className="jobslist-title"> Work Experience</h2>
      <button id="edit-jobs" ref={editButtonRef} onClick={handleEditJobs}>Edit</button>
      {showDiscardButton ? <button onClick={handleDiscardEditJobs}>Discard</button> : null}</div>
      {jobs.length > 0 ?
        <div>
          <h3 className="jobslist-text">{jobs.length} job position{jobs.length > 1 ? "s" : ""} since {jobs[0].date[0].slice(-4)}</h3>
          {jobs && jobs.map((job) => {
            return <ul><JobItem key={job.id} job={job} jobs={jobs} deleteJob={deleteJob} showEditJobs={showEditJobs}/></ul>
          })}
        </div> 
        : <p>No work experiences</p>
      }
      <AddJob jobs={jobs} updateJobs={updateJobs} showAddButton={showAddButton} toggleAddButton={toggleAddButton} showEditJobs={showEditJobs}/>
    </div>
    )
}
 