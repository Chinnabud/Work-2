import axios from 'axios';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const ecomStore = (set) => ({
    user: null,
    token: null,
    actionLogin: async (form) => {
        try {
            const res = await axios.post('http://localhost:5001/api/login', form);
            console.log(res.data.token);

            set({
                user: res.data.payload,
                token: res.data.token,
            });

            return res;
        } catch (error) {
            console.error("Login Error:", error);
            throw error;
        }
    }
});

const useEcomStore = create(
    persist(ecomStore, {
        name: 'ecom-store',
        storage: createJSONStorage(() => localStorage),
    })
);

export default useEcomStore;
