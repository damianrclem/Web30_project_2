import React from 'react';
import SideBar from '../components/Sidebar';
import Widgets from '../components/Widget';

import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileTweets from '../components/profile/ProfileTweets';

const style = {
    wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
    content: `max-w-[1400px] w-2/3 flex justify-between`,
    mainContent: `flex-[2] border-r border-1 border-[#3844d]`,
};

const profile = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <SideBar />
                <div className={style.mainContent}>
                    <ProfileHeader />
                    <ProfileTweets />
                </div>
                <Widgets />
            </div>
        </div>
    );
};

export default profile;
