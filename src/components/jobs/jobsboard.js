import React from 'react';
import Job from './job';
import { getJobs } from '../../redux/actions/jobsActions';
import { connect } from 'react-redux';
import JobForm from './jobsform'

class JobsBoard extends React.Component {

    componentDidMount = () => {
        this.props.boundGetJobs()
    }

    render() {
        // console.log(this.props)
        return (
        <div className="JobsBoard">
            <h1>You've Made It To Jobs!</h1>
            <div className="job-form">
            <JobForm />
            </div>
            <br /> <br />
            {/* <JobsContainer /> */}
            <div className="available-jobs">
                <h3>Available Jobs:</h3>
                <ul>{ this.props.jobs.map(job => <Job key={job.id} title={job.title}/>)}</ul>
            </div>
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
        boundGetJobs: (jobs) => dispatch(getJobs(jobs))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobsBoard)
//  ^^ connect gives us access to dispatch and state from inside of a component