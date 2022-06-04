import { BsStar } from 'react-icons/bs';

import Post from '../Post';

import TweetBox from './TweetBox';

import logo from '../../images/logo.svg';

const style = {
    wrapper: `flex-[2] border-r border-1 border-[#38444d]`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between item-center`,
    headerTile: `text-xl font-bold`,
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
        timestamp: '2022-09-03T21:26:43Z',
    },
];

const Feed = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.headerTile}>Home</div>
                <BsStar />
            </div>
            <TweetBox />
            {tweets.map((tweet, index) => (
                <Post
                    key={index}
                    displayName={tweet.displayName}
                    userName={`${tweet.userName.slice(0, 5)}...${tweet.userName.slice(-5)}`}
                    avatar={tweet.avatar}
                    text={tweet.text}
                    isProfileImageNtf={tweet.isProfileImageNtf}
                    timestamp={tweet.timestamp}
                />
            ))}
        </div>
    );
};

export default Feed;
