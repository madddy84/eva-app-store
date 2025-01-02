
import axios from "axios";

axios.defaults.baseURL = '/api/';

const categories = [
    { id: 1, name: "All" },
    { id: 2, name: "Analytics" },
    { id: 3, name: "Productivity" },
    { id: 4, name: "Health" },
    { id: 5, name: "Food" },
    { id: 6, name: "Finance" },
    { id: 7, name: "Education" },
    { id: 8, name: "Photography" },
    { id: 9, name: "Travel" },
    { id: 10, name: "Music" },
    { id: 11, name: "Weather" }
];

export const getApps = async () => {
    const response = await axios.get('apps/');
    return response.data;
};

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        try {
            resolve(categories);
        } catch (error) {
            reject(error);
        }
    });
};

export const getAppById = async (appId) => {
    return (await axios.get(`apps/${appId}`)).data;
};

