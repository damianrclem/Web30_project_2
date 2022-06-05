import { useRouter } from 'next/router';

const style = {
    wrapper: `w-min flex item-center rounded-[100px] p-4 curser-pointer hover:bg-[#333c45] transition-all hover:duration-200 hover:ease-in-out`,
    iconContainer: `text-xl mr-4`,
    textGeneral: `fort-medium`,
    textActive: `font-bold`,
    disabled: `text-[#3b4b5b] hover:bg-transparent`,
};

const SidebarOption = ({ text, Icon, isActive, disabled, setSelected, redirect }) => {
    const router = useRouter();

    return (
        <div
            className={`${style.wrapper} ${disabled ? style.disabled : ''}`}
            onClick={() => {
                if (!disabled) {
                    setSelected(text);
                    if (redirect) {
                        router.push(redirect);
                    }
                }
            }}
        >
            <div className={style.iconContainer}>
                <Icon />
            </div>
            <div className={isActive ? style.textActive : style.textGeneral}>{text}</div>
        </div>
    );
};

export default SidebarOption;
