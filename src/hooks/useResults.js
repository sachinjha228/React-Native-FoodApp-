import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {


    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {

        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (e) {
            setErrorMessage('Someting went wrong');
        }
    };

    //Call searchApi when component
    //is call render
    // searchApi('pasta')
    useEffect(() => {
        searchApi('pasta')
    }, [])


    return [searchApi, results, errorMessage];

};
