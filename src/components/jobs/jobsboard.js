import React from 'react';
import Job from './job';
import { getJobs } from '../../redux/actions/jobs/getJobs';
import { connect } from 'react-redux';
import deleteJob from '../../redux/actions/jobs/deleteJob'
// import JobForm from './jobsform'

class JobsBoard extends React.Component {

    componentDidMount = () => {
        this.props.boundGetJobs()
    }

    render() {
    //    console.log(this.props.jobs)
        let c = this.props.jobs.map(job => <Job key={job.id} id={job.id} title={job.title} boundDeleteJob={this.props.boundDeleteJob}/>)
        return (
            <div className="available-jobs">
                <h3>Available Jobs:</h3>
                <ul>{ c }</ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log("test", state)
    return {
        jobs: state.jobsReducer.jobs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        boundGetJobs: (jobs) => dispatch(getJobs(jobs)),
        boundDeleteJob: (id) => dispatch(deleteJob(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobsBoard)
//  ^^ connect gives us access to dispatch and state from inside of a component