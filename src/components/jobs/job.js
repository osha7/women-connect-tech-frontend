
import React from  'react';
// import EditJobModal from './modal.editJob'
import { connect } from 'react-redux';
import EditJobContainer from '../../containers/job_modal_container';

class Job extends React.Component {
    // console.log(props)

    handleOnClick = () => {
        //  console.log(props.boundDeleteJob)
        this.props.boundDeleteJob(this.props.id)
    }

    // showModal() {
    //     //change state {modal: false} to {modal: true}
    // }
    // triggerText(){"Edit"}
    triggerText = "Edit"
    
    onSubmit = event => {
        event.preventDefault()
    }

    render() {
        // console.log ("render", this.props)
        return (
            <div className="job" key={this.props.id} >
                <li key={this.props.id}>{this.props.title}</li>
                {/* <button className="edit-button" onClick={this.showModal}>Edit</button> */}
                <EditJobContainer triggerText={this.triggerText} onSubmit={this.onSubmit} id={this.props.id} />
                <button className="delete-button" onClick={this.handleOnClick}>Delete</button>
                {/* {this.state.modal && <EditJobModal title={props.title} />} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log (state)
    return {
        jobs: state.jobsReducer.jobs
    }
}

export default connect(mapStateToProps)(Job);
