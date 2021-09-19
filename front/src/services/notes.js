import instance from './axios';

export let token = null;

export const setToken = newToken => {
  token = newToken;
}

export const getAllNotes = async () => {
    const res = await instance.get( '/notes' );
    return res.data;
}

export const submitNotes = async ( noteToAddToState, { token } ) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    const res = await instance.post( '/notes', noteToAddToState, config);
    return res.data;
}
