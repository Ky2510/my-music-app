import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Genre = () => {
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/genre');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>Genre Page</h1>
            <ul>
                {data.map((genre, index) => (
                    <li key={index}>{genre.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Genre
