import React from 'react';
import JobsBoard from '../components/jobs/jobsboard';
import { connect } from 'react-redux'
import JobForm from '../components/jobs/jobsform';



class JobsContainer extends React.Component {
    // console.log("JobsContainer", this.props)

        state = {
            viewJobForm: false,
        }
    
    viewAddJobForm = () => {
        // console.log(this.state)
        this.setState(previousState => ({
            viewJobForm: previousState.viewJobForm === true ? false : true
        }))
    }

    render() {
        // console.log(this.props)
        // console.log(this.state)
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
                <JobsBoard user={this.props.user} />
            </div>
        )
    }


// const mapStateToProps = (state) => {
//     console.log("JobsContainer", state)
// }
}
export default connect()(JobsContainer);
