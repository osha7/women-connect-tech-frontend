import React from 'react';
import { connect } from 'react-redux';
import { addJob } from '../../redux/actions/jobs/addJob';
import salaryOptions from './salaryOptions'

class JobsForm extends React.Component {

    state = {
        date: '',
        title: '',
        info: '',
        salary_starting_range: '',
        salary_highest_range: '',
        contact_person: '',
        email: '', 
        phone: '',
        user_id: this.props.user.id
    }
    
    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        // console.log(this.state)
        this.props.addJob(this.state)
        this.props.viewAddJobForm()
        this.setState({
            date: '',
            title: '',
            info: '',
            salary_starting_range: '',
            salary_highest_range: '',
            contact_person: '',
            email: '', 
            phone: '',
            user_id: ''
        })
    }

    render() {
        // console.log(this.props)
        return(
            <div>
                <h3>Add A New Job Posting:</h3>
                <form onSubmit={this.handleOnSubmit}>
                    {/* <label>Date:</label><br />
                    <input name="date" type="date" value={this.state.date} onChange={this.handleOnChange}  required/>
                    <br /> */}
                    <label>Title:</label><br />
                    <input name="title" type="text" value={this.state.title} onChange={this.handleOnChange} placeholder="required" required />
                    <br />
                    <label>Info:</label><br />
                    <textarea name="info" value={this.state.info} onChange={this.handleOnChange} placeholder="required" required />
                    <br />
                    <label>Starting Salary:</label><br />
                    <select name="salary_starting_range" type="integer" value={this.state.salary_starting_range} onChange={this.handleOnChange}>
                        <option />
                        {salaryOptions.map(salary => <option key={salary} value={salary}>{salary}</option>)}
                        </select>
                    <br />
                    <label>Salary Top:</label><br />
                    <select name="salary_highest_range" type="integer" value={this.state.salary_highest_range} onChange={this.handleOnChange} >
                        <option />
                        {salaryOptions.map(salary => <option key={salary} value={salary}>{salary}</option>)}
                    </select>
                    <br />
                    <label>Contact Person:</label><br />
                    <input name="contact_person" type="text" value={this.state.contact_person} onChange={this.handleOnChange} placeholder="required" required/>
                    <br />
                    <label>Email:</label><br />
                    <input name="email" type="email" value={this.state.email} onChange={this.handleOnChange} placeholder="required" required/>
                    <br />
                    <label>Phone:</label><br />
                    <input name="phone" type="text" value={this.state.phone} onChange={this.handleOnChange} />
                    <br /><br />
                    <input className="submit" type="submit"/>

                </form>
            </div>
        )
    } 

}

export default connect(null, { addJob })(JobsForm);