import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const getAllNotes = async () => {
    const res = await instance.get( '/posts' );
    return res.data;
}

export const submitNotes = async ( noteToAddToState ) => {
    const res = await instance.post( '/posts', noteToAddToState);
    return res.data;
}
