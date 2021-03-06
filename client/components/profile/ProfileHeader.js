import React from 'react';
import { useRouter } from 'next/router';
import { BsArrowLeftShort } from 'react-icons/bs';

const cover = 'https://picsum.photos/1200/500?random=8';
const currentAccount = '0x787fEe51E380ff7b1d76819F4682d0C21B78D6D8';

const style = {
    wrapper: `border-[#38444d] border-b`,
    header: `py-1 px-3 mt-2 flex items-center`,
    primary: `bg-transparent outline-none font-bold`,
    secondary: `text-[#8899a6] text-xs`,
    backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
    coverPhotoContainer: `flex items-center justify-center h-[15vh] overflow-hidden`,
    coverPhoto: `object-cover h-full w-full`,
    profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
    profileImage: `object-cover rounded-full h-full`,
    profileImageNft: `object-cover h-full`,
    profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
    details: `px-3`,
    nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
    activeNav: `text-white`,
};

const ProfileHeader = () => {
    const router = useRouter();

    const isProfileImageNft = false;

    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div onClick={() => router.push('/')} className={style.backButton}>
                    <BsArrowLeftShort />
                </div>
                <div className={style.details}>
                    <div className={style.primary}>Damian Clem</div>
                    <div className={style.secondary}>3 Tweets</div>
                </div>
            </div>
            <div className={style.coverPhotoContainer}>
                <img src={cover} alt='cover' />
            </div>
            <div className={style.profileImageContainer}>
                <div className={isProfileImageNft ? 'hex' : style.profileImage}>
                    <img
                        src='https://i.pravatar.cc/300?img=1'
                        alt='profile image'
                        className={isProfileImageNft ? style.profileImageNft : style.profileImage}
                    />
                </div>
            </div>
            <div className={style.details}>
                <div>
                    <div className={style.primary}>Damian Clem</div>
                    <div className={style.secondary}>
                        {currentAccount && (
                            <>
                                {currentAccount.slice(0, 5)}...{currentAccount.slice(-5)}
                            </>
                        )}
                    </div>
                </div>
                <div className={style.nav}>
                    <div className={style.activeNav}>Tweets</div>
                    <div>Tweets & replies</div>
                    <div>Media</div>
                    <div>Likes</div>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
