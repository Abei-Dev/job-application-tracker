import { useState } from "react"

function JobForm({ addJob }) {

    const [companyName, setCompanyName] = useState("")
    const [positionName, setPositionName] = useState("")


    function handleCompanyChange(e) {
        setCompanyName(e.target.value)
    }

    function handlePositionChange(e) {
        setPositionName(e.target.value)
    }

  
    function handleSubmit(e) {
        e.preventDefault()

        if (!companyName.trim() || !positionName.trim()) return

        addJob(companyName.trim(), positionName.trim())

        setCompanyName("")
        setPositionName("")
    }


    return (
        <form className="job-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="cname">Company:</label>

                <input 
                    className="form-input"
                    type="text" 
                    id="cname" 
                    value={companyName} 
                    onChange={handleCompanyChange}
                    placeholder="e.g. Google"
                />
            </div>

            <div className="form-group">
                <label htmlFor="position">Position:</label>

                <input 
                    className="form-input"
                    type="text" 
                    id="position" 
                    value={positionName} 
                    onChange={handlePositionChange}
                    placeholder="e.g. Software Engineer"
                />
            </div>

            <button className="add-btn">
                Add Job
            </button>
        </form>
    )
}

export default JobForm