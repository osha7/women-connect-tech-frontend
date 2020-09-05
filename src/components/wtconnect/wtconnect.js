import React from 'react';
import { connect } from 'react-redux';

import { fetchAllUsers } from '../../redux/actions/users/fetchAllUsers'

class WTConnect extends React.Component {

    componentDidMount = () => {
        this.props.boundFetchAllUsers()
    }

    render() {
        console.log("wtc render", this.props)
        return (
        <div className="wtconnect">
            <h1>TESTING</h1>
        </div>
        )
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


