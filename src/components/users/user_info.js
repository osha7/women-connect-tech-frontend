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
                <div>
                    <br />
                    <UserImage img={this.props.users.avatar}/>
                    <h1>{this.props.users.first_name} {this.props.users.last_name}</h1>
                </div>
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
