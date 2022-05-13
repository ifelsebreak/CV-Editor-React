import React from 'react'

export const JobItem = (props) => {

  //console.log("props.job: ", props.job)

  const handleDeleteJob = (id) => {
    console.log("Lancio handleDeleteJob")
    console.log("Index trovato: ", props.jobs.indexOf(props.job))
    var selectedIndex = props.jobs.indexOf(props.job)
    props.deleteJob(selectedIndex)
    /*const updatedJobs = [...props.jobs]
    const currentob = updatedJobs.find(job => props.id === id)
    console.log("updatedJobs.find(props.ds === id)", job)*/
  }

  return (
    <li>
        <button onClick={() => handleDeleteJob(props.job.id)}>Delete</button>
        {props.title ? <h4>{props.title}</h4> : null}
        {/*props.date[0] && props.date[1] ? <h5>{props.date[0]} - {props.date[1]}</h5> : null*/}
        {props.description ? <p>{props.description}</p> : null}
    </li>
  )
}
