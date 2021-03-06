import React from 'react';
import { connect } from 'react-redux';
import editUser from '../../redux/actions/users/editUser'
// import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';

class UserForm extends React.Component {
    
    state = {
        id: this.props.users.id,
        username: this.props.users.username,
        email: this.props.users.email,
        // password_digest: this.props.users.password_digest,
        first_name: this.props.users.first_name,
        last_name: this.props.users.last_name,
        goals: this.props.users.goals,
        resume_link: this.props.users.resume_link,
        avatar: this.props.users.avatar.link,
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
        console.log("handleOnSubmit", this.props)
        this.props.viewform()
    }

    handleCheck = (e) => {
        // console.log("handleChecked")
        // e.preventDefault()
        this.setState({
            [e.target.name]: !e.target.value
        })
        
        // this.setState( previousState => {
        //     // console.log("handleChecked", !previousState.open_to_mentor)
        //     console.log("handleChecked", [e.target.name])
        //     // return (!previousState, console.log("afterChecked", previousState))
        // })
    }

    render() {
        const {
            username,
            email,
            first_name,
            last_name,
            goals,
            resume_link,
            avatar,
            website,
            contact,
            linked_in,
            twitter,
            open_to_connect,
            open_to_mentor,
            available_to_work
        } = this.state
        // console.log(this.props, this.state)
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
                    <input name="first_name" type="text" value={first_name || ''} onChange={this.handleOnChange} />
                    <br />
                    <label>Last Name:</label><br />
                    <input name="last_name" type="text" value={last_name || ''} onChange={this.handleOnChange} />
                    <br />
                    <label>Profession:</label><br />
                    <textarea name="goals" value={goals || ''} onChange={this.handleOnChange} maxlength="60"/>
                    <br />
                    <label>Resume Link:</label><br />
                    <input name="resume_link" type="text" value={resume_link || ''} onChange={this.handleOnChange} />
                    <br />
                    <label>Image Link:</label><br />
                    <input name="avatar" type="text" value={avatar} onChange={this.handleOnChange} />
                    <br />
                     {/* <label>Image Upload</label>
                    <input type="file"name="image" onChange={this.onChange} accept="image/*"/>
                    <br/> */}
                    {/* <label>Video Upload</label>
                    <input type="file" name="video" onChange={this.onChange}/>
                    <br/> */}

                    <br />
                    <label>Website:</label><br />
                    <input name="website" type="text" value={website || ''} onChange={this.handleOnChange} />
                    <br />
                    <label>Contact Email:</label><br />
                    <input name="contact" type="text" value={contact || ''} onChange={this.handleOnChange} />
                    <br />
                    <label>Linked In:</label><br />
                    <input name="linked_in" type="text" value={linked_in || ''} onChange={this.handleOnChange} />
                    <br />
                    <label>Twitter:</label><br />
                    <input name="twitter" type="text" value={twitter || ''} onChange={this.handleOnChange} />
                    <br />
                    <label>Available To Work:</label><br />
                    <input 
                    name="available_to_work"
                    type="checkbox" 
                    value={available_to_work || ''}
                    onChange={this.handleCheck}
                    checked={available_to_work}
                    />
                    <br />
                    <label>Open To Connect:</label><br />
                    <input
                    name="open_to_connect" 
                    type="checkbox" 
                    value={open_to_connect || ''} 
                    onChange={this.handleCheck}
                    // defaultChecked={this.state.checked} 
                    checked={open_to_connect}
                    />
                    <br />
                    <label>Open To Mentor:</label><br />
                    <input 
                    name="open_to_mentor"
                    type="checkbox"
                    value={open_to_mentor || ''}
                    onChange={this.handleCheck}
                    checked={open_to_mentor}
                    />  
                
                    <br /><br />
                    <input type="submit"/>
                    <br /><br /><br />

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

