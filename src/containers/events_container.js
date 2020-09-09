import React from 'react';
import EventsBoard from '../components/events/eventsboard';
import { connect } from 'react-redux';
import EventForm from '../components/events/eventsform';

class EventsContainer extends React.Component {

    state = {
        viewEventForm: false,
    }

    viewAddEventForm = () => {
        this.setState(previousState => ({
            viewEventForm: previousState.viewEventForm === true ? false : true
        }))
    }

    render() {
        // console.log(this.props)
        let text = this.state.viewEventForm === true ? "Hide Form" : "Post A New Event"
        return(
            <div className="events-container">
                <h1>Events Board</h1>
                <div className="add-event-button">
                    <button onClick={this.viewAddEventForm}>{ text }</button>
                </div>
                <div className="toggle-event-form">
                    {this.state.viewEventForm === true ? <EventForm user={this.props.user} viewAddEventForm={this.viewAddEventForm}/> : null }
                </div>
                <br />
                <EventsBoard user={this.props.user} />
            </div>
        )
    }
}

export default connect()(EventsContainer);