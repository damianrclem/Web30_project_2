import { useState } from 'react';
import { VscTwitter } from 'react-icons/vsc';

import SidebarOption from './SidebarOption';

import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from 'react-icons/ri';
import { BiHash } from 'react-icons/bi';
import { FiBell, FiMoreHorizontal } from 'react-icons/fi';
import { HiOutlineMail, HiMail } from 'react-icons/hi';
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icons/fa';
import { CgMoreO, CgProfile } from 'react-icons/cg';
import { BsBookmarkDashFill, BsBookmarkDash } from 'react-icons/bs';

const style = {
    wrapper: `flex-[0.7] px-8 flex flex-col border-r border-1 border-[#38444d]`,
    twitterIconContainer: `text-3xl m-4`,
    tweetButton: `bg-[#1d9bf0] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
    navContainer: `flex-1`,
    profileButton: `flex item-center justify-center cursor-pointer hover:bg-[#1a7bbc] h-[50px] my-[20px]`,
    profileLeft: `flex item-center justify-center mr-4`,
    profileImage: `height-12 w-12 rounded-full`,
    profileRight: `flex-1 flex`,
    details: `flex-1`,
    name: `text-lg`,
    handle: `text-[#8899a6]`,
    moreContainer: `flex items-center mr-2`,
};

const Sidebar = ({ initialDefaultSelected = 'Home' }) => {
    const [selected, setSelected] = useState(initialDefaultSelected);

    return (
        <div className={style.wrapper}>
            <div className={style.twitterIconContainer}>
                <VscTwitter />
            </div>
            <div className={style.navContainer}>
                <SidebarOption
                    text='Home'
                    Icon={selected === 'Home' ? RiHome7Fill : RiHome7Line}
                    isActive={Boolean(selected === 'Home')}
                    disabled={false}
                    setSelected={setSelected}
                    redirect={'/'}
                />
                <SidebarOption
                    text='Explore'
                    Icon={selected === 'Explore' ? FaHashtag : BiHash}
                    isActive={Boolean(selected === 'Explore')}
                    disabled={true}
                    setSelected={setSelected}
                    redirect={'/'}
                />
                <SidebarOption
                    text='Notifications'
                    Icon={selected === 'Notifications' ? FaBell : FiBell}
                    isActive={Boolean(selected === 'Notifications')}
                    disabled={true}
                    setSelected={setSelected}
                    redirect={'/'}
                />
                <SidebarOption
                    text='Messages'
                    Icon={selected === 'Messages' ? HiMail : HiOutlineMail}
                    isActive={Boolean(selected === 'Messages')}
                    disabled={true}
                    setSelected={setSelected}
                    redirect={'/'}
                />
                <SidebarOption
                    text='Bookmarks'
                    Icon={selected === 'Bookmarks' ? BsBookmarkDashFill : BsBookmarkDash}
                    isActive={Boolean(selected === 'Bookmarks')}
                    disabled={true}
                    setSelected={setSelected}
                    redirect={'/'}
                />
                <SidebarOption
                    text='Lists'
                    Icon={selected === 'Lists' ? RiFileList2Fill : FaRegListAlt}
                    isActive={Boolean(selected === 'Lists')}
                    disabled={true}
                    setSelected={setSelected}
                    redirect={'/'}
                />
                <SidebarOption
                    text='Profile'
                    Icon={selected === 'Profile' ? CgProfile : CgProfile}
                    isActive={Boolean(selected === 'Profile')}
                    disabled={false}
                    setSelected={setSelected}
                    redirect={'/profile'}
                />
                <SidebarOption
                    text='More'
                    Icon={selected === 'More' ? CgMoreO : CgMoreO}
                    isActive={Boolean(selected === 'More')}
                    disabled={false}
                    setSelected={setSelected}
                    redirect={'/'}
                />
                <div className={style.tweetButton}>Mint</div>
            </div>
            <div className={style.profileButton}>
                <div className={style.profileLeft}></div>
                <div className={style.profileRight}>
                    <div className={style.details}>
                        <div className={style.name}>profilename</div>
                        <div className={style.handle}>@0x0...2344</div>
                    </div>
                    <div className={style.moreContainer}>
                        <FiMoreHorizontal />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
