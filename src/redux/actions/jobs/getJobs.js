
// actions: are the network request
// actions are going to be part of our event listeners
// actions are constants bc it's easier to debug sp.errors vs. string 
const GET_JOBS = "GET_JOBS"

//action creators ==== the objects, themselves are actions
export function getJobs() {
    // return { type: GET_JOBS, payload: jobArray } 
    return function(dispatch) {
        fetch("http://localhost:3000/jobs")
            .then (resp => resp.json())
            .then (jobsObj => {
                dispatch({ type: GET_JOBS, payload: jobsObj.jobs })
                // console.log(jobsObj.jobs)
                // console.log(getJobs(jobsObj))
                // console.log(this.props)
                
                // console.log((getJobs(jobsObj.jobs)))
                // this.props.dispatch((getJobs(jobsObj.jobs)))
                // payload: jobsObj.jobs

                // this.props.boundGetJobs(jobsObj.jobs)
                // ^^boundGetJobs wraps 'getJobs' in Dispatch so makes it to the reducer
            })
    }
}


// //action creators ==== the objects, themselves are actions
// export function addJobs() {


// with THUNK we can write Action Creators that return functions instead of just objects
// middleware is any bit of code that intercepts a process and changes outcome

