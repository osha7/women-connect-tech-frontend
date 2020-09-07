import React from 'react';
import Event from './event';
import { connect } from 'react-redux';
import getEvents from '../../redux/actions/events/getEvents';
import deleteEvent from '../../redux/actions/events/deleteEvent';

class EventsBoard extends React.Component {

    componentDidMount = () => {
        this.props.boundGetEvents()
    }

    render() {
        let e = this.props.events.map(event => <Event 
            key={event.id}
            id={event.id}
            title={event.title}
            date={event.date}
            time={event.time}
            link={event.link}
            info={event.info}
            contact_person={event.contact_person}
            email={event.email}

            boundDeleteEvent={this.props.boundDeleteEvent} 
        />)

        // console.log("eventsBoard", this.props)
        return (
        <div className="all-events">
            <h3><b>Events In Technology:</b></h3>
            <ul>{ e }</ul>
        </div>
        )
    }
}

const mSTP = state => {
    return {
        events: state.eventsReducer.events
    }
}

const mDTP = dispatch => {
    return {
        boundGetEvents: events => dispatch(getEvents(events)), 
        boundDeleteEvent: id => dispatch(deleteEvent(id))
    }
}

export default connect(mSTP, mDTP)(EventsBoard);