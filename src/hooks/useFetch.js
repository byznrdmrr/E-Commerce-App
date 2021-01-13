import axios from 'axios';
import {useState, useEffect} from 'react';
import wait from 'waait';

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    
    async function fetchData() {
        const  {data: serverData} = await axios
        .get(url)
        .catch(() => {
            setLoading(false);
            setError(serverError);          
        });
        setLoading(false);
        setData(serverData);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return{data, loading, error};
}