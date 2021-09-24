import React from 'react';

const userDetail = (props) => {
    const { user } = props;
    if (!user) return <p>No user found</p>;
    return (
        <div>
            {user.firstName} {user.lastName}
        </div>
    );
};

export default userDetail;