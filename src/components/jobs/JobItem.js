import React from 'react'
import './JobItem.css'
import { useSelector } from 'react-redux'

export const JobItem = (props) => {

  //console.log("props.job: ", props.job)

  const jobs = useSelector(state => state.jobs)

  const handleDeleteJob = (id) => {
    console.log("Lancio handleDeleteJob")
    console.log("Index trovato: ", props.jobs.indexOf(props.job))
    var selectedIndex = props.jobs.indexOf(props.job)
    props.deleteJob(selectedIndex)
    /*const updatedJobs = [...props.jobs]
    const currentob = updatedJobs.find(job => props.id === id)
    console.log("updatedJobs.find(props.ds === id)", job)*/
  }

  const handleEditJob = () => {

  }

  return (
    <li>
      <div id="jobitem-header">
        {props.job.title ? <h4 className="addjob-text">{props.job.title}</h4> : null}
        {props.showEditJobs ? <button onClick={() => handleEditJob(props.job.id)}>Edit</button> : null}
        {props.showEditJobs ? <button onClick={() => handleDeleteJob(props.job.id)}>Delete</button> : null}
      </div>
        {props.job.company ? <h5 className="addjob-text">{props.job.company}</h5> : null}
        {props.job.location ? <h5 className="addjob-text">{props.job.location}</h5> : null}
        {props.job.date[0] && props.job.date[1] ? <h5 className="addjob-text">{props.job.date[0]} - {props.job.date[1]}</h5> : null}
        {props.job.description ? <p className="addjob-text">{props.job.description}</p> : null}
    </li>
  )
}
