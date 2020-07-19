import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        //price === '$' || '$' || '$$$'

        return results.filter(result => {
            return result.price === price;
        });

    };



    return (<View style={{ flex: 1 }}>
        <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
            <ResultsList results={filterResultsByPrice('$')} title="CostEffective" />
            <ResultsList results={filterResultsByPrice('$$')} title="BitPricier" />
            <ResultsList results={filterResultsByPrice('$$$')} title="BigSpender" />
        </ScrollView>
    </View>
    );
};

const styles = () => ({});

export default SearchScreen;