import React from 'react';
import JobsBoard from '../components/jobs/jobsboard';
import { connect } from 'react-redux'
import JobForm from '../components/jobs/jobsform';

function JobsContainer() {
    // console.log("JobsContainer", this.props)
    return (
        
        <div>
            <h1>You've Made It To Jobs!</h1>
            <JobForm />
            <br /> <br />
            <JobsBoard />
        </div>
    )
}

// const mapStateToProps = (state) => {
//     console.log("JobsContainer", state)
// }

export default connect()(JobsContainer);
