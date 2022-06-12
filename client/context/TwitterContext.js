import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const TwitterContext = createContext();

export const TwitterProvider = ({ children }) => {
    const { appStatus, setAppStatus } = useState('loading');
    const { currentAccount, setCurrentAccount } = useState('');
    const { currentAccountId, setCurrentAccountId } = useState('');

    const router = useRouter();

    useEffect(() => {
        checkWalletConnected();
    }, []);

    const checkWalletConnected = async () => {
        if (!window.ethereum) return;

        try {
            const addressArray = await window.ethereum.request({
                method: 'eth_accounts',
            });

            if (addressArray > 0) {
                setAppStatus('connected');
                setCurrentAccount(addressArray[0]);
            } else {
                setAppStatus('disconnected');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const connectWallet = async () => {
        if (!window.ethereum) return setAppStatus('noMetaMask');

        try {
            setAppStatus('loading');
            const connectAccount = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            if (connectAccount.length > 0) {
                setAppStatus('connected');
                setCurrentAccount(currentAccount[0]);
            } else {
                router.push('/');
                setAppStatus('disconnected');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <TwitterContext.Provider
            value={{ appStatus, currentAccount, connectAccount, connectWallet }}
        >
            {children}
        </TwitterContext.Provider>
    );
};
