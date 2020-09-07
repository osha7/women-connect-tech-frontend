import React from 'react';
import { connect } from 'react-redux';
import editJob from '../../redux/actions/jobs/editJob';
import salaryOptions from './salaryOptions'

class EditJob extends React.Component {

    //import values from props (coming from job.js file) and make them initial state
    //make all form input values reflect values in state
    //use handleOnChange to update state 
    //submit updated state values to boundEditJob actionCreator with 
    
    // divId = parseInt(document.getElementsByClassName("modal-area")[0].id)
    // divCollection = document.getElementsByClassName("modal-area")
    // divId = parseInt(divCollection[0].id)
    
    // job = this.props.jobs.find(j => j.id === this.props.id)

    state = {
        id: this.props.job.id,
        date: '',
        title: this.props.job.title,
        info: this.props.job.info,
        salary_starting_range: this.props.job.salary_starting_range,
        salary_highest_range: this.props.job.salary_highest_range,
        contact_person: this.props.job.contact_person,
        email: this.props.job.email, 
        phone: this.props.job.phone
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        // console.log(this.state)
        // console.log(this.state, this.props)
        this.props.boundEditJob(this.state)
        this.props.closeModal()
    }

    render() {
        // console.log(this.props.job)
        // let divId = parseInt(document.getElementsByClassName("modal-area")[0].id)
        // console.log(this.props.id, this.props)

        // let job = this.props.jobs.find(j => j.id === this.props.id)

        // console.log(job, job.title)
        // const jobs = state.jobs.filter(job => job.id !== action.payload.id)
        return(
            <div>
                <h1>Edit Job Post</h1>
                <form onSubmit={this.handleOnSubmit} >
                    <label>Date:</label><br />
                    <input name="date" type="date" value={this.state.date} onChange={this.handleOnChange}  required/>
                    <br />
                    <label>Title:</label><br />
                    <input name="title" type="text" value={this.state.title} onChange={this.handleOnChange} required />
                    <br />
                    <label>Info:</label><br />
                    <textarea name="info" value={this.state.info} onChange={this.handleOnChange} required />
                    <br />
                    <label>Starting Salary:</label><br />
                    <select name="salary_starting_range" type="integer" value={this.state.salary_starting_range} onChange={this.handleOnChange}>
                        <option />
                        {salaryOptions.map(salary => <option key={salary} value={this.props.salary}>{salary}</option>)}
                    </select>
                    <br />
                    <label>Salary Top:</label><br />
                    <select name="salary_highest_range" type="integer" value={this.state.salary_highest_range} onChange={this.handleOnChange} >
                        <option />
                        {salaryOptions.map(salary => <option key={salary} value={this.props.salary}>{salary}</option>)}
                    </select>
                    <br />
                    <label>Contact Person:</label><br />
                    <input name="contact_person" type="text" value={this.state.contact_person} onChange={this.handleOnChange} required/>
                    <br />
                    <label>Email:</label><br />
                    <input name="email" type="email" value={this.state.email} onChange={this.handleOnChange} required/>
                    <br />
                    <label>Phone:</label><br />
                    <input name="phone" type="text" value={this.state.phone} onChange={this.handleOnChange} />
                    <br /><br />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
//    console.log (state, props)
    return {
        job: state.jobsReducer.jobs.find(j => j.id === props.id)
        // job: this.props.jobs.find(j => j.id === this.props.id)
        // const jobs = state.jobs.filter(job => job.id !== action.payload.id)
    }
}

const mapStateToDispatch = dispatch => ({
    boundEditJob: id => dispatch(editJob(id))
})

export default connect(mapStateToProps, mapStateToDispatch)(EditJob)