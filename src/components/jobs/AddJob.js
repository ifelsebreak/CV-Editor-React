import React, { useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../../state/actions';
import './AddJob.css'
import {v4 as uuidv4} from 'uuid'
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import it from 'date-fns/locale/it';
registerLocale('it', it)

export const AddJob = (props) => {

  const dispatch = useDispatch()
  const jobs = useSelector(state => state.jobs)

  const [startdate, setStartdate] = useState(new Date());
  const [enddate, setEnddate] = useState(new Date());
  //const [jobs, setJobs] = useState([...props.jobs])
  const [showAddForm, setShowAddForm] = useState(false)
  const [fadeInAnimation, setFadeInAnimation] = useState(0)

  const jobTitleRef = useRef()
  const jobCompanyRef = useRef()
  const jobLocationRef = useRef()
  const jobDescriptionRef = useRef()

  useEffect(() => {
    setShowAddForm(false)
    console.log("AddForm mounted")
    
    return () => {console.log("AddForm UNmounted")}
  }, [])


  
  useEffect(() => {
    renderAnimations()
  }, [showAddForm])

  const renderAnimations = () => {
      showAddForm ? setFadeInAnimation(1) : setFadeInAnimation(0)
  }

  const handleToggleShow = () => {
    setShowAddForm(true)
    props.toggleAddButton()
  }

  const handleDiscardForm = () => {
    setShowAddForm(false)
    props.toggleAddButton()
  }

  const addJobHandler = (e) => {
    /*const title = jobTitleRef.current.value
    const company = jobCompanyRef.current.value
    const location = jobLocationRef.current.value
    const description = jobDescriptionRef.current.value
    if (title === '') return
    if (location === '') return
    if (description === '') return
    var newJob = {id: uuidv4(), title: title, company: company, location: location, date: [startdate.toLocaleString().split(' ')[0].slice(0, -1), enddate.toLocaleString().split(' ')[0].slice(0, -1)], description: description}
    var updatedJobs = [...props.jobs, newJob]
    updatedJobs = updatedJobs.sort(function(a,b){
      
      console.log("Data? ", new Date(b.date[1]))
      return new Date(b.date[1]) - new Date(a.date[0]);
    });
    console.log("[...jobs, newJob]: ", updatedJobs)
    props.updateJobs(updatedJobs)
    console.log(jobs)
    jobTitleRef.current.value = null
    //jobStartdateRef.current.value = null
    jobLocationRef.current.value = null
    handleDiscardForm();*/

  }

  return (
    <div className="addjob-div">
        {props.showAddButton && props.showEditJobs && !showAddForm ? <button onClick={handleToggleShow} className="addjob-plus">+</button> : null}
        {showAddForm && props.showEditJobs ?
          <div className="addjob-form" animation={fadeInAnimation} /*style={{
              opacity: !showAddForm ? "0" : "1",
              transition: "all 3s",
              visibility: !showAddForm ? "hidden" : "visible"
            }}*/>
            <label htmlFor="title">Title: </label>
            <input ref={jobTitleRef} type="text" name="title" placeholder="Title" />
            <br></br>

            <label htmlFor="company">Company: </label>
            <input ref={jobCompanyRef} type="text" name="company" placeholder="Company" />
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
            <input ref={jobLocationRef} type="text" name="location" placeholder="Location" />
            <br></br>

            <label htmlFor="description">Description: </label>
            <input ref={jobDescriptionRef} type="text" name="description" placeholder="Description" />
            <br></br>

            <button onClick={() => dispatch(add())}>Add work experience</button>
            <button onClick={handleDiscardForm}>Cancel</button>
          </div>
        : null}
    </div>
  )
}
