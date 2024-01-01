import Head from "next/head";
import AppLayout from "../Components/AppLayout";
import FollowList from "../Components/FollowList";
import NicknameEditForm from "../Components/NicknameEditForm";

const Profile = () => {

    const followerList
        = [{nickname: 'boxak'},
        {nickname: '바보'},
        {nickname: '제로초'}
    ];

    const followingList = [{nickname: 'boxak'},
        {nickname: '바보'},
        {nickname: '제로초'}
    ];

    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm/>
                <FollowList header="팔로잉 목록" data={followingList}/>
                <FollowList header="팔로워 목록" data={followerList}/>
            </AppLayout>
        </>
    )
};

export default Profile;