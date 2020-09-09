import React from 'react';
import { connect } from 'react-redux';
import { addEvent } from '../../redux/actions/events/addEvent';

class EventsForm extends React.Component {

    state = {
        title: '',
        date: '',
        time: '',
        link: '',
        info: '',
        contact_person: '',
        email: '',   
        user_id: this.props.user.id
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addEvent(this.state)
        this.props.viewAddEventForm()
        this.setState({
            title: '',
            date: '',
            time: '',
            link: '',
            info: '',
            contact_person: '',
            email: '',
            user_id: ''
        })
    }

    render() {
        return( 
            <div className="new-event-form">
                <h3>Add A New Tech Event:</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Title:</label><br />
                    <input name="title" type="text" value={this.state.title} onChange={this.handleOnChange} placeholder="required" required />
                    <br />
                    <label>Event Date:</label><br />
                    <input name="date" type="date" value={this.state.date} onChange={this.handleOnChange}  required/>
                    <br />
                    <label>Time:</label><br />
                    <input name="time" type="time" value={this.state.time} onChange={this.handleOnChange} required />
                    <br />
                    <label>Link:</label><br />
                    <input name="link" type="text" value={this.state.link} onChange={this.handleOnChange} />
                    <br />
                    <label>Info:</label><br />
                    <textarea name="info" value={this.state.info} onChange={this.handleOnChange} placeholder="required" required />
                    <br />
                    <label>Contact Person:</label><br />
                    <input name="contact_person" type="text" value={this.state.contact_person} onChange={this.handleOnChange} />
                    <br />
                    <label>Email:</label><br />
                    <input name="email" type="email" value={this.state.email} onChange={this.handleOnChange} />
                    <br /><br />
                    <input className="submit" type="submit"/>
                </form>

            </div>
        )
    }

}

export default connect(null, { addEvent })(EventsForm);