
import React from  'react';
import { connect } from 'react-redux';
import EditEventContainer from '../../containers/event_modal_container';
import moment from 'moment';



class Event extends React.Component {

    state = {
        likes: 0
    }

    handleOnClick = () => {
        this.props.boundDeleteEvent(this.props.id)
    }

    triggerText = "Edit"

    onSubmit = event => {
        event.preventDefault()
    }

    handleLike = () => {
        this.setState(prevState => ({
            likes: prevState.likes + 1
        }))
    }
    
    render() {
        if (this.props.user.id === this.props.user_id) {
            return (
                <div className="event" key={this.props.id}>
                    <p className="underline-p" ><b>{this.props.title.toUpperCase()} </b></p>
                    <i>Date:</i>   {moment.parseZone(this.props.date).format('dddd, MMMM Do YYYY')}<br />
                    <i>Time:</i>   {moment.parseZone(this.props.time).format('LT')}<br />
                    <br />
                    <i>MoreInfo:</i>   {this.props.info}<br />
                    <br />
                    <i>Link:</i>   <a href={this.props.link}>{this.props.link}</a><br />
                    <i>Contact Person:</i>   {this.props.contact_person}<br />
                    <i>Contact Email:</i>   {this.props.email}<br />
                    <br />
                    <EditEventContainer triggerText={this.triggerText} onSubmit={this.onSubmit} id={this.props.id} />
                    <button className="delete-button" onClick={this.handleOnClick}>Delete</button>
                    <br />
                    <button className="likes-button" onClick={this.handleLike}>Add Like</button>
                    {this.state.likes}
                </div>
            )
        } else {
            return (
                <div className="event" key={this.props.id}>
                    <p className="underline-p" ><b>{this.props.title.toUpperCase()} </b></p>
                    <i>Date:</i>   {moment.parseZone(this.props.date).format('dddd, MMMM Do YYYY')}<br />
                    <i>Time:</i>   {moment.parseZone(this.props.time).format('LT')}<br />
                    <br />
                    <i>MoreInfo:</i>   {this.props.info}<br />
                    <br />
                    <i>Link:</i>   <a href={this.props.link}>{this.props.link}</a><br />
                    <i>Contact Person:</i>   {this.props.contact_person}<br />
                    <i>Contact Email:</i>   {this.props.email}<br />
                    <br />
                    <button className="likes-button" onClick={this.handleLike}>Add Like</button>
                    <br />
                    {this.state.likes}
                </div>
            )
        }
    }
}

const mSTP = state => {
    return {
        events: state.eventsReducer.events
    }
}

export default connect(mSTP)(Event);
