import React from 'react';
import JobsBoard from '../components/jobs/jobsboard';
import { connect } from 'react-redux'
import JobForm from '../components/jobs/jobsform';



class JobsContainer extends React.Component {
    // console.log("JobsContainer", this.props)

        state = {
            viewJobForm: false,
        }
    
    viewAddJobForm=()=>{
        // console.log(this.state)
            this.setState(previousState => ({
                viewJobForm: previousState.viewJobForm === true ? false : true
            })
        )
    }

    render() {
        // console.log(this.state)
        let text = this.state.viewJobForm === true ? "Hide Form" : "Post A New Job"
        return (
            <div>
                <h1>Job Board</h1>
                <button onClick={this.viewAddJobForm}>{ text }</button>
                <div className="toggle-job-form">
                    {this.state.viewJobForm === true ? <JobForm viewAddJobForm={this.viewAddJobForm}/> : null }
                </div>
                <br /> <br />
                <JobsBoard />
            </div>
        )
    }


// const mapStateToProps = (state) => {
//     console.log("JobsContainer", state)
// }
}
export default connect()(JobsContainer);
