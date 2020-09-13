import React from 'react';
import JobsBoard from '../components/jobs/jobsboard';
import { connect } from 'react-redux'
import JobForm from '../components/jobs/jobsform';
import { getJobs } from '../redux/actions/jobs/getJobs';



class JobsContainer extends React.Component {

        state = {
            searchTerm: '',
            viewJobForm: false,
        }
        
        componentDidMount = () => {
            this.props.boundGetJobs()
            // debugger
        }

        jobFilterOnChange = (e) => {
            // console.log(this.state, this.props)
            // debugger
            this.setState({
                searchTerm: e.target.value
            })
            // console.log(this.state, this.props)
            //  debugger
        }
    
        filteredJobs = () => {
            // this.state.jobs.filter(job => {
            //     return job.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            // })
            return this.props.jobs.filter(job => job.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
            
        }
        
    viewAddJobForm = () => {
        // console.log(this.state)
        this.setState(previousState => ({
            viewJobForm: previousState.viewJobForm === true ? false : true
        }))
    }

    render() {
        // console.log("props", this.props)
        // console.log("state", this.state)
      
        // this.state.jobs = this.props.jobs
        let text = this.state.viewJobForm === true ? "Hide Form" : "Post A New Job"
        return (
            <div className="jobs-container">
                <h1>Job Board</h1>
                <div className="add-job-button">
                    <button onClick={this.viewAddJobForm}>{ text }</button>
                </div>
                <div className="toggle-job-form">
                    {this.state.viewJobForm === true ? <JobForm user={this.props.user} viewAddJobForm={this.viewAddJobForm}/> : null }
                </div>
                <br />
                <div className="search-jobs">
                    <input type="text" value={this.state.searchTerm} onChange={this.jobFilterOnChange} placeholder="Search Thru Job Titles"/>
                </div> 
                <br />
                <JobsBoard user={this.props.user} jobs={this.filteredJobs()} />
                {/* <JobsBoard user={this.props.user} /> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log("JobsContainer", state)
    return {
        jobs: state.jobsReducer.jobs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        boundGetJobs: (jobs) => dispatch(getJobs(jobs))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobsContainer);
