import { useEffect, useContext, useState } from 'react';
// import { TwitterContext } from '../../context/TwitterContext';
import Post from '../Post';

import logo from '../../images/logo.svg';

const style = {
    wrapper: `no-scrollbar`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
};

const tweets = [
    {
        displayName: 'Display Name',
        userName: '0x787fEe51E380ff7b1d76819F4682d0C21B78D6D8',
        avatar: logo.src,
        text: 'gm',
        isProfileImageNtf: true,
        timestamp: '2022-09-03T21:26:43Z',
    },
    {
        displayName: 'Display Name',
        userName: '0x787fEe51E380ff7b1d76819F4682d0C21B78D6D8',
        avatar: logo.src,
        text: 'gm',
        isProfileImageNtf: false,
        timestamp: '2022-06-03T21:26:43Z',
    },
    {
        displayName: 'Display Name',
        userName: '0x787fEe51E380ff7b1d76819F4682d0C21B78D6D8',
        avatar: logo.src,
        text: 'gm',
        isProfileImageNtf: false,
        timestamp: '2022-07-03T21:26:43Z',
    },
];

const ProfileTweets = () => {
    return (
        <div className={style.wrapper}>
            {tweets.map((tweet, key) => (
                <Post
                    key={key}
                    displayName={tweet.displayName}
                    userName={`${tweet.userName.slice(0, 5)}...${tweet.userName.slice(-5)}`}
                    avatar={tweet.avatar}
                    text={tweet.text}
                    isProfileImageNft={tweet.isProfileImageNtf}
                    timestamp={tweet.timestamp}
                />
            ))}
        </div>
    );
};

export default ProfileTweets;
