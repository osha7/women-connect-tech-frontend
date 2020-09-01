import React from 'react';
import JobsBoard from '../components/jobs/jobsboard';
import { connect } from 'react-redux'
import JobForm from '../components/jobs/jobsform';



class JobsContainer extends React.Component {
    // console.log("JobsContainer", this.props)

        state = {
            viewJobForm: false
        }
    

    handleOnClick=()=>{
        // console.log(this.state)
            this.setState(previousState => ({
                viewJobForm: previousState.viewJobForm === true ? false : true
            })
        )
        // if (this.state.viewJobForm === true) {
        // // console.log("true")
        //     return (<div></div>)
        // } else {
        //     // console.log("false")
        //     return <JobForm />
        // }
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                <h1>You've Made It To Jobs!</h1>
                <button onClick={this.handleOnClick}>Post A New Job</button>
                <div className="toggle-job-form">
                    {this.state.viewJobForm === true ? <JobForm /> : null }
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
