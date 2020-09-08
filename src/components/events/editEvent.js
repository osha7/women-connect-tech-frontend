import React from 'react';
import { connect } from 'react-redux';
import { editEvent } from '../../redux/actions/events/editEvent';
import moment from 'moment';

class EditEvent extends React.Component {

    state = {
        id: this.props.event.id,
        title: this.props.event.title,
        date: `${moment(this.props.event.date).format('YYYY')}-${moment(this.props.event.date).format('MM')}-${moment(this.props.event.date).format('DD')}`,
        time: `${moment.parseZone(this.props.event.time).format('hh')}:${moment(this.props.event.time).format('mm')}`,
        link: this.props.event.link,
        info: this.props.event.info,
        contact_person: this.props.event.contact_person,
        email: this.props.event.email
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.boundEditEvent(this.state)
        this.props.closeModal()
    }

    render() {
        console.log(this.state, this.props) 
        return(
            <div>
                <h1>Edit Tech Event</h1>
                <form onSubmit={this.handleOnSubmit} >
                    <label>Title:</label><br />
                    <input name="title" type="text" value={this.state.title} onChange={this.handleOnChange} required />
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
                    <textarea name="info" value={this.state.info} onChange={this.handleOnChange} required />
                    <br />
                    <label>Contact Person:</label><br />
                    <input name="contact_person" type="text" value={this.state.contact_person} onChange={this.handleOnChange} />
                    <br />
                    <label>Email:</label><br />
                    <input name="email" type="email" value={this.state.email} onChange={this.handleOnChange} />
                    <br /><br />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

const mSTP = (state, props) => {
    return {
        event: state.eventsReducer.events.find(e => e.id === props.id)
    }
}

const mDTP = dispatch => ({
    boundEditEvent: id => dispatch(editEvent(id))
})

export default connect(mSTP, mDTP)(EditEvent);
