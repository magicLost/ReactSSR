import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from "../actions";

const UserList = (props) => {

    useEffect(() => {
        props.fetchUsers();
    }, []);

    const renderUsers = () => {

        return props.users.map(user => {
            return <li key={user.id + user.name}>{user.name}</li>;
        })

    };

    const users = renderUsers();

    return (
        <div>
            <h5>Here's a big list of users:</h5>
            <ul>
                {users}
            </ul>
        </div>
    )
};

function mapStateToProps(state) {
    return { users: state.users };
}

export default connect(mapStateToProps, { fetchUsers })(UserList);