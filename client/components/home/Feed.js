import { BsStar } from 'react-icons/bs';

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
        isProfileImageNtf: false,
        timestamp: new Date(),
    },
    {
        displayName: 'Display Name',
        userName: '0x787fEe51E380ff7b1d76819F4682d0C21B78D6D8',
        avatar: logo.src,
        text: 'gm',
        isProfileImageNtf: false,
        timestamp: new Date(),
    },
    {
        displayName: 'Display Name',
        userName: '0x787fEe51E380ff7b1d76819F4682d0C21B78D6D8',
        avatar: logo.src,
        text: 'gm',
        isProfileImageNtf: false,
        timestamp: new Date(),
    },
    {
        displayName: 'Display Name',
        userName: '0x787fEe51E380ff7b1d76819F4682d0C21B78D6D8',
        avatar: logo.src,
        text: 'gm',
        isProfileImageNtf: false,
        timestamp: new Date(),
    },
    {
        displayName: 'Display Name',
        userName: '0x787fEe51E380ff7b1d76819F4682d0C21B78D6D8',
        avatar: logo.src,
        text: 'gm',
        isProfileImageNtf: false,
        timestamp: new Date(),
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
            {tweets.map((tweets, index) => (
                <div></div>
            ))}
        </div>
    );
};

export default Feed;
