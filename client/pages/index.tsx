import type { NextPage } from 'next';

import Sidebar from './components/Sidebar';
import Widget from './components/Widget';
import Feed from './components/home/Feed';

const style = {
    wrapper: 'flex justify-center h-screen w-screen select-none bg-[#15202b] text-white',
    content: 'max-w-[1400px] w-2/3 flex justify-between',
};

const Home: NextPage = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <Sidebar />
                <Feed />
                <Widget />
            </div>
        </div>
    );
};

export default Home;
