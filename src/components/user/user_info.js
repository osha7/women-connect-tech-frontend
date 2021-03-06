import React from 'react';
import { getUser } from '../../redux/actions/users/getUser';
import { connect } from 'react-redux';



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
                <div className="user-info">
                    <br />
                    
                    <h1>{this.props.users.first_name} {this.props.users.last_name}</h1>
                    <h5>Profession:</h5> <p>{this.props.users.goals}</p>
                    <h5>Contact Email:</h5> <p><i class="fa fa-envelope-open" aria-hidden="true"></i> {this.props.users.contact}</p>
                    <h5>Website:</h5> <a href={this.props.users.website}>{this.props.users.website}</a>
                    <h5>Resume Link:</h5> <a href={this.props.users.resume_link}>Resume</a>
                    <h5>Get Social:</h5><a href={this.props.users.linked_in}>LinkedIn</a> --- <a href={this.props.users.twitter}>Twitter</a>
            
                    <br /><br />
                </div>
                <br />
                <table className="users-availability-table" key={this.props.users.id}>
                    <tbody>
                        <th>Available To Work</th><th>Open To Connect</th><th>Open To Mentor</th>
                        <tr><td>{this.props.users.available_to_work ? "✔️" : "🚫"}</td><td>{this.props.users.open_to_connect ? "✔️" : "🚫"}</td><td>{this.props.users.open_to_mentor ? "✔️" : "🚫"}</td></tr>
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


