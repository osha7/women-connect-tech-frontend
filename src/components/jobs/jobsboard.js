import React from 'react';
import Job from './job';
import { getJobs } from '../../redux/actions/jobs/getJobs';
import { connect } from 'react-redux';
import deleteJob from '../../redux/actions/jobs/deleteJob'
import editJob from '../../redux/actions/jobs/editJob'

class JobsBoard extends React.Component {

    componentDidMount = () => {
        this.props.boundGetJobs()
    }

    render() {
        // console.log("jobsboard", this.props)
    //    console.log(this.props.jobs)
        let j = this.props.jobs.map(job => <Job 
            key={job.id} 
            id={job.id} 
            date={job.date}
            title={job.title} 
            info={job.info}
            starting_salary_range={job.starting_salary_range}
            salarary_highest_range={job.salarary_highest_range}
            contact_person={job.contact_person}
            email={job.email}
            phone={job.phone}

            boundDeleteJob={this.props.boundDeleteJob} 
            boundEditJob={this.props.boundEditJob} 
            />)
        return (
            <div className="available-jobs">
                <h3>Available Jobs:</h3>
                <ul>{ j }</ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("test jobs", state)
    return {
        jobs: state.jobsReducer.jobs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        boundGetJobs: (jobs) => dispatch(getJobs(jobs)),
        boundEditJob: (id) => dispatch(editJob(id)),
        boundDeleteJob: (id) => dispatch(deleteJob(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobsBoard)
//  ^^ connect gives us access to dispatch and state from inside of a component