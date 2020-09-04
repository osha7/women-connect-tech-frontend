import React from 'react';
import { connect } from 'react-redux';
import editUser from '../../redux/actions/users/editUser'

class UserForm extends React.Component {

    state = {
        username: this.props.users.username,
        email: this.props.users.email,
        // password_digest: this.props.users.password_digest,
        first_name: this.props.users.first_name,
        last_name: this.props.users.last_name,
        goals: this.props.users.goals,
        resume_link: this.props.users.resume_link,
        // avatar: this.props.users.avatar.link,
        website: this.props.users.website,
        contact: this.props.users.contact,
        linked_in: this.props.users.linked_in,
        twitter: this.props.users.twitter,
        open_to_connect: this.props.users.open_to_connect,
        open_to_mentor: this.props.users.open_to_mentor,
        available_to_work: this.props.users.available_to_work,
        saved: this.props.users.saved
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.boundEditUser(this.state)
    }

    render() {
        const {
            username,
            email,
            first_name,
            last_name,
            goals,
            resume_link,
            // avatar,
            website,
            contact,
            linked_in,
            twitter,
            open_to_connect,
            open_to_mentor,
            available_to_work
        } = this.props.users
        console.log(this.props)
        return(
            <div className="user-form">
                <br />
                <form onSubmit={this.handleOnSubmit}>
                    <label>Username:</label><br />
                    <input name="username" type="text" value={username} onChange={this.handleOnChange} required/>
                    <br />
                    <label>Email:</label><br />
                    <input name="email" type="email" value={email} onChange={this.handleOnChange} required/>
                    <br />
                    <label>First Name:</label><br />
                    <input name="first_name" type="text" value={first_name} onChange={this.handleOnChange} />
                    <br />
                    <label>Last Name:</label><br />
                    <input name="last_name" type="text" value={last_name} onChange={this.handleOnChange} />
                    <br />
                    <label>Goals:</label><br />
                    <textarea name="goals" value={goals} onChange={this.handleOnChange} />
                    <br />
                    <label>Resume Link:</label><br />
                    <input name="resume" type="text" value={resume_link} onChange={this.handleOnChange} />
                    <br />
                    {/* <label>Image Link:</label><br />
                    <input name="avatar" type="text" value={avatar.link} onChange={this.handleOnChange} /> */}
                    <br />
                    <label>Website:</label><br />
                    <input name="website" type="text" value={website} onChange={this.handleOnChange} />
                    <br />
                    <label>Contact Email:</label><br />
                    <input name="contact" type="text" value={contact} onChange={this.handleOnChange} />
                    <br />
                    <label>Linked In:</label><br />
                    <input name="linked_in" type="text" value={linked_in} onChange={this.handleOnChange} />
                    <br />
                    <label>Twitter:</label><br />
                    <input name="twitter" type="text" value={twitter} onChange={this.handleOnChange} />
                    <br />
                    <label>Open To Connect:</label><br />
                    <input name="open_to_connect" type="checkbox" value={open_to_connect} onChange={this.handleOnChange} />
                    <br />
                    <label>Open To Mentor:</label><br />
                    <input name="open_to_mentor" type="checkbox" value={open_to_mentor} onChange={this.handleOnChange} />
                    <br />
                    <label>Available To Work:</label><br />
                    <input name="available_to_work" type="checkbox" value={available_to_work} onChange={this.handleOnChange} />
                
                    <br /><br />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

const mSTP = (state) => {
    // console.log(state)
    return {
        users: state.usersReducer.users
    }
}

const mDTP = dispatch => ({
    boundEditUser: (id) => dispatch(editUser(id))
})

export default connect(mSTP, mDTP)(UserForm);

