// const ADD_JOBS = "ADD_JOBS"

export const addJob = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/jobs', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(jobObj => (console.log(jobObj)))

        // .then(jobObj => dispatch({type: 'ADD_JOB', payload: jobObj.jobs}))
    }
}