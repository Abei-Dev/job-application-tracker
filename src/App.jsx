import { useEffect, useState } from "react"
import JobForm from "./components/JobForm"
import JobList from "./components/JobList"
import Header from "./components/Header"

function App() {

  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs")

    if (savedJobs) {
      return JSON.parse(savedJobs)
    }

    return []
  })


  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs))
  }, [jobs])
  




  function addJob(companyName, positionName) {

    const newJob = {
      id: Date.now(),
      company: companyName,
      position: positionName,
      status: "Applied"
    }

    setJobs(prevJobs => {
      return [...prevJobs, newJob]
    })

  }

  function deleteJob(id) {
    setJobs(prevJobs => {
      return prevJobs.filter(job => job.id !== id )
    
    })
  }


 function changeStatus(id, newStatus) {
  const updateStatus = jobs.map(job => {
    return job.id === id
    ?{...job, status: newStatus}
    : job
  })
  setJobs(updateStatus)
 }

  return (
    <main className="app">
      <Header />
      <JobForm addJob={addJob}/>
      <JobList 
        jobs={jobs} 
        deleteJob={deleteJob}
        changeStatus={changeStatus}
      />
    </main>
  )
}

export default App