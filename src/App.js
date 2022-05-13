import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { JobsList } from './components/jobs/JobsList';
import { Profile } from './components/profile/Profile';


//const LOCAL_STORAGE_JOBS_KEY = "cvEditorApp.jobs"

function App() {



  const [jobs, setJobs] = useState([{id: 1, title: "Addetto vendita", date: ["10/05/2005", "23/06/2006"], location: "Erbusco (BS)", description: "Description dolor sit ame lorem ipsum e ste robe qui che non ricordo description dolor sit ame lorem ipsum eccetera eccetera"}, {id: 2, title: "Servizio Clienti", date: ["17/02/2007", "05/11/2009"], location: "Orio Al Serio (BG)", description: "Description dolor sit ame lorem ipsum e ste robe qui che non ricordo description dolor sit ame lorem ipsum eccetera eccetera"}]);
  const [profile, setProfile] = useState({name: "Alberto", surname: "Marchetti", title: "Full Stack Developer", birthdate: "19/06/1990", location: "Brescia, Italy", email: "marchetti.alberto@gmail.com", phone: "333333333", social: {github: "ifelsebreak", linkedin: "alberto-marchetti-69778771"}});

  /*useEffect(() => {
    const storedJobs = localStorage.getItem(LOCAL_STORAGE_JOBS_KEY)
    if (storedJobs)setJobs(storedJobs)
  }, [])
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_JOBS_KEY, JSON.stringify(jobs))
  }, [jobs])*/

  const updateJobs = (updatedJobs) => {
    console.log("updatedJobs: ", updatedJobs)
    setJobs(prevJobs => ([...updatedJobs]))
  }

  const deleteJob = (index) => {
    if (jobs.length === 1) {
      setJobs([])
    } else {
      var updatedJobs = jobs
      updatedJobs.splice(index, 1)
      console.log("[App.js] deleteJob() updatedJobs", updatedJobs)
      setJobs(prevJobs => ([...updatedJobs]))
    }
  }

  return (
    <>
      <Profile profile={profile}/>
      <JobsList jobs={jobs} updateJobs={updateJobs} deleteJob={deleteJob}/>
    </>
  );
}

export default App;
