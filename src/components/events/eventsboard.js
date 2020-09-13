import React from 'react';
import Event from './event';
import { connect } from 'react-redux';
import getEvents from '../../redux/actions/events/getEvents';
import deleteEvent from '../../redux/actions/events/deleteEvent';


class EventsBoard extends React.Component {

    componentDidMount = () => {
        console.log("a")
        this.props.boundGetEvents()
        console.log("b")
    }

    render() {
        // console.log(this.props)
        const aps = (this.props.events.sort(function(a, b) {
                const dateA = a.date
                const dateB = b.date
                if (dateA < dateB) {
                    return -1
                }
                if (dateA > dateB) {
                    return 1
                }
                return 0
            }))
        let e = aps.map(event => <Event 
            user={this.props.user}
            key={event.id}
            id={event.id}
            title={event.title}
            date={event.date}
            time={event.time}
            link={event.link}
            info={event.info}
            contact_person={event.contact_person}
            email={event.email}
            user_id={event.user_id}

            boundDeleteEvent={this.props.boundDeleteEvent} 
        />)

        // console.log("eventsBoard", this.props)
        return (
        <div className="all-events">
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