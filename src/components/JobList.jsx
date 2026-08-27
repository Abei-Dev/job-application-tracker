function JobList({ jobs, deleteJob, changeStatus }) {

    const jobElements = jobs.map(job => {

        return (
                <div className="job-card" key={job.id}>
                    <p className="company-name">
                       {job.company}
                    </p>

                    <p className="position-name">
                       {job.position}
                    </p>

                    <select 
                        className="status-select"
                        value={job.status} 
                        onChange={(e) => changeStatus(job.id, e.target.value)}
                    >
                        <option>Applied</option>
                        <option>Interview</option>
                        <option>Offer</option>
                        <option>Rejected</option>
                    </select>

                    <button 
                        className="delete-btn"
                        onClick={() => deleteJob(job.id)}
                    >
                        Delete
                    </button>
                </div>
            
        )
    })

    return (  
        <div className="job-list">
          {jobElements}
        </div>
    )
}

export default JobList
