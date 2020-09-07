import React from 'react';
import Event from './event';
import { connect } from 'react-redux';
import getEvents from '../../redux/actions/events/getEvents';

class EventsBoard extends React.Component {

    componentDidMount = () => {

    }

    render() {
        return (
        <div className="all-events">
        </div>
        )
    }
}

export default connect()(EventsBoard);