const DELETE_JOB = "DELETE_JOB"

const deleteJob = (id) => {
    // console.log(id)
    return (dispatch) => {
        return fetch(`http://localhost:3000/jobs/${id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(jobObj => dispatch({type: DELETE_JOB, payload: jobObj}))
    }
}

export default deleteJob;