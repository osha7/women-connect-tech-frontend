import React from 'react';
import { getUser } from '../../redux/actions/users/getUser';
import { connect } from 'react-redux';
import { UserImage } from './usermedia/user_image';


class UserInfo extends React.Component {

    componentDidMount = () => {
        this.props.boundGetUser(this.props.id)
    }

    render() {
        // console.log(this.props)
        // debugger
        if (this.props.users.id === this.props.id) {
            return (
                <>
                <div>
                    <br />
                    <UserImage avatar={this.props.users.avatar}/>
                    <h1>{this.props.users.first_name} {this.props.users.last_name}</h1>
                    <h5>Goals:</h5> <p>{this.props.users.goals}</p>
                    <h5>Contact Email:</h5> <p>{this.props.users.contact}</p>
                    <h5>Website:</h5> <p>{this.props.users.website}</p>
                    <h5>Resume Link:</h5> <p>{this.props.users.resume_link}</p>
                    <a href={this.props.users.linked_in}>LinkedIn</a> --- <a href={this.props.users.twitter}>Twitter</a>
            
                    <br /><br />
                </div>
                <table className="users-availability-table" key={this.props.users.id}>
                    <tbody>
                        <th>Available To Work</th><th>Open To Connect</th><th>Open To Mentor</th>
                        <tr><td>{this.props.users.available_to_work ? "👍" : "🚫"}</td><td>{this.props.users.open_to_connect ? "👍" : "🚫"}</td><td>{this.props.users.open_to_mentor ? "👍" : "🚫"}</td></tr>
                    </tbody>
                </table>
                <br /><br />
                </>
            )
        } else {
            return(
                <div>
                    Error Rendering
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    // console.log("test", state)
    return {
        users: state.usersReducer.users,
        // user: state.usersReducer.users.map(user => user.id === this.props.id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        boundGetUser: (user) => dispatch(getUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);


