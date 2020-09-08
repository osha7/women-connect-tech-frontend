const ADD_JOB = "ADD_JOB"

export const addJob = (data) => {
    console.log(data)
    return ((dispatch) => {
        fetch('http://localhost:3000/jobs', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(jobObj => dispatch({type: ADD_JOB, payload: jobObj}))
    })
}