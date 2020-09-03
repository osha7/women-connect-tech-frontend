const EDIT_JOB = "EDIT_JOB"

const editJob = (data) => {
//    console.log("EDIT JOB ACTION", data)
    return (dispatch) => {
        return fetch(`http://localhost:3000/jobs/${data.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(jobObj => dispatch({type: EDIT_JOB, payload: jobObj}))
    }
}

export default editJob;