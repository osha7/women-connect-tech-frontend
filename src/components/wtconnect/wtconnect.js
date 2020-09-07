import React from 'react';
import { connect } from 'react-redux';

import { fetchAllUsers } from '../../redux/actions/users/fetchAllUsers';
import User from './user';

class WTConnect extends React.Component {

    componentDidMount = () => {
        this.props.boundFetchAllUsers()
    }

    constructUserCards = () => {
        // console.log(this.props)
        return this.props.users.map(user => <User 
            key={user.id}
            id={user.id}
            first_name={user.first_name}
            last_name={user.last_name}
            goals={user.goals}
            resume_link={user.resume_link}
            avatar={user.avatar}
            website={user.website}
            contact={user.contact}
            linked_in={user.linked_in}
            twitter={user.twitter}
            available_to_work={user.available_to_work}
            open_to_connect={user.open_to_connect}
            open_to_mentor={user.open_to_mentor}
        />)
    }

    render() {
        // console.log("wtcRender", this.props.users.length)
        if (this.props.users.length > 0) {
            return (
                <div className="wtconnect">
                    {this.constructUserCards()}
                </div>
            )
        } else {
            return (<> </>)
        }
    }
}

const mapStateToProps = (state) => {
    // console.log("test", state)
    return {
        users: state.usersReducer.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        boundFetchAllUsers: (users) => dispatch(fetchAllUsers(users)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WTConnect);


