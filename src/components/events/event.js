
import React from  'react';
import { connect } from 'react-redux';
import EditEventContainer from '../../containers/event_modal_container';

class Event extends React.Component {

    handleOnClick = () => {
        this.props.boundDeleteEvent(this.props.id)
    }

    triggerText = "Edit"

    onSubmit = event => {
        event.preventDefault()
    }
    
    render() {
        return (
            <div className="event" key={this.props.id}>
                <li key={this.props.id}>{this.props.title}</li>
                <EditEventContainer triggerText={this.triggerText} onSubmit={this.onSubmit} id={this.props.id} />
                <button className="delete-button" onClick={this.handleOnClick}>Delete</button>
            </div>
        )
    }
}

const mSTP = state => {
    return {
        events: state.eventsReducer.events
    }
}

export default connect(mSTP)(Event);
