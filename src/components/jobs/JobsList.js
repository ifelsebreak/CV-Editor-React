import React, { useState } from 'react'
import { JobItem } from './JobItem'
import { AddJob } from './AddJob'

export const JobsList = (props) => {

  //var [jobs, setJobs] = useState(props.jobs)
  

  console.table(props.jobs)
  console.log("length: ", props.jobs.length)
  console.log("App.js -> JobsList.js: ", props.updateJobs)
  const updateJobs = (jobs) => {
    props.updateJobs()
  }

  return (
    <div>
      <h2>Work Experience</h2>
      <h3>{props.jobs.length} job position{props.jobs.length > 1 ? "s" : ""} since {props.jobs[0].date[0].slice(6)}</h3>
      {props.jobs && props.jobs.map((job) => {
        return <ul><JobItem key={job.id} title={job.title} date={job.date} location={job.location} description={job.description} /></ul>
      })}
      <AddJob jobs={props.jobs} updateJobs={updateJobs} />
    </div>
    )
}
 