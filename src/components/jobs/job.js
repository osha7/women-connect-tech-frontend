
import React from  'react';
// import EditJobModal from './modal.editJob'
import { connect } from 'react-redux';
import EditJobContainer from '../../containers/job_modal_container';
import moment from 'moment';

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
    // contact_person: "Osha"
    // created_at: "2020-09-08T03:58:02.965Z"
    // date: null
    // email: "ogroetz@gmail.com"
    // id: 103
    // info: "fadfadfafa"
    // phone: "9174779485"
   
    render() {
       console.log ("render", this.props)
        return (
            <div className="job" key={this.props.id} >
                <li key={this.props.id}>{this.props.title} ----- <i>Posted On:</i>   {moment.parseZone(this.props.created_at).format('MM/DD/YY')} - ({moment(this.props.created_at).startOf('day').fromNow()});</li>
                <br />
                <i>Salary Range:</i>   ${this.props.salary_starting_range} - ${this.props.salary_highest_range} 
                <br />
                <i>Info:</i>   {this.props.info}
                <br /><br />
                <i>Contact:</i>   {this.props.contact_person} --- <i>Email:</i>   {this.props.email}
                <br /><br />
                <EditJobContainer triggerText={this.triggerText} onSubmit={this.onSubmit} id={this.props.id} />
                <button className="delete-button" onClick={this.handleOnClick}>Delete</button>
                
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
