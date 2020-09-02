import React from 'react';
import { connect } from 'react-redux';
import editJob from '../../redux/actions/jobs/editJob';
import salaryOptions from './salaryOptions'

class EditJob extends React.Component {

    //import values from props (coming from job.js file) and make them initial state
    //make all form input values reflect values in state
    //use handleOnChange to update state 
    //submit updated state values to boundEditJob actionCreator with 
    state = {
        title: this.props.title
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        // console.log(this.state)
        this.props.boundEditJob(this.state)
    }

    render() {
        return(
            <div>
                <h1>Edit Job Post</h1>
                <form onSubmit={this.handleOnSubmit} >
                <label>Date:</label><br />
                    <input name="date" type="date" value={this.props.date} onChange={this.handleOnChange}  required/>
                    <br />
                    <label>Title:</label><br />
                    <input name="title" type="text" value={this.state.title} onChange={this.handleOnChange} required />
                    <br />
                    <label>Info:</label><br />
                    <textarea name="info" value={this.props.info} onChange={this.handleOnChange} required />
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
                    <input name="contact_person" type="text" value={this.props.contact_person} onChange={this.handleOnChange} required/>
                    <br />
                    <label>Email:</label><br />
                    <input name="email" type="email" value={this.props.email} onChange={this.handleOnChange} required/>
                    <br />
                    <label>Phone:</label><br />
                    <input name="phone" type="text" value={this.props.phone} onChange={this.handleOnChange} />
                    <br /><br />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({

})

const mapStateToDispatch = dispatch => ({
    boundEditJob: (id) => dispatch(editJob(id)),
})

export default connect(mapStateToProps, mapStateToDispatch)(EditJob)