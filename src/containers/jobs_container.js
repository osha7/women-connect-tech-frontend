import React from 'react';
import JobsBoard from '../components/jobsboard';
import { connect } from 'react-redux'

function JobsContainer() {
    // console.log("JobsContainer", this.props)
    return (
        <div>

        </div>
    )
}

// const mapStateToProps = (state) => {
//     console.log("JobsContainer", state)
// }

export default connect()(JobsContainer);
