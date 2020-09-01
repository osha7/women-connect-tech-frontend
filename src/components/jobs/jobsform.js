import React from 'react';
import { connect } from 'react-redux';
import { addJob } from '../../redux/actions/addJobs';

class JobsForm extends React.Component {

    state = {
        date: '',
        title: '',
        info: '',
        salary_starting_range: '',
        salary_highest_range: '',
        contact_person: '',
        email: '', 
        phone: ''
    }
    
    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        console.log(this.state)
        // this.props.addJob(this.state)
        this.setState({
            date: '',
            title: '',
            info: '',
            salary_starting_range: '',
            salary_highest_range: '',
            contact_person: '',
            email: '', 
            phone: ''
        })
    }

    render() {
        return(
            <div>
                <h3>Add A New Job Posting:</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Date:</label>
                    <input name="date" type="date" value={this.state.date} onChange={this.handleOnChange} />
                    <br />
                    <label>Title:</label>
                    <input name="title" type="text" value={this.state.title} onChange={this.handleOnChange} />
                    <br />
                    <label>Info:</label>
                    <input name="info" type="text" value={this.state.info} onChange={this.handleOnChange} />
                    <br />
                    <label>Starting Salary:</label>
                    <input name="salary_starting_range" type="integer" value={this.state.salary_starting_range} onChange={this.handleOnChange} />
                    <br />
                    <label>Salary Top:</label>
                    <input name="salary_highest_range" type="integer" value={this.state.salary_highest_range} onChange={this.handleOnChange} />
                    <br />
                    <label>Contact Person:</label>
                    <input name="contact_person" type="text" value={this.state.contact_person} onChange={this.handleOnChange} />
                    <br />
                    <label>Email:</label>
                    <input name="email" type="email" value={this.state.email} onChange={this.handleOnChange} />
                    <br />
                    <label>Phone:</label>
                    <input name="phone" type="text" value={this.state.phone} onChange={this.handleOnChange} />
                    <br />
                    <input type="submit"/>

                </form>
            </div>
        )
    } 

//  function mSTP(state) {
//      return (jobs: state.jobs)
//  }

}

export default connect(null, { addJob })(JobsForm);