import React, { useCallback } from 'react';
import {Avatar, Button, Card} from "antd";
import PropTypes from "prop-types";

const UserProfile = ({ setIsLoggedIn }) => {

    const onLogout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    return (
        <Card
            actions={[
                <div key="twitter">짹짹<br/>0</div>,
                <div key="followings">팔로잉<br/>0</div>,
                <div key="followers">팔로워<br/>0</div>,
            ]}>
            <Card.Meta
                avatar={<Avatar>ZC</Avatar>}
                title="boxak"
            />
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    )

}

UserProfile.propTypes = {
    setIsLoggedIn : PropTypes.node.isRequired,
}

export default UserProfile;