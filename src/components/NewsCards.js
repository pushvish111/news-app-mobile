import { View, Text, SafeAreaView, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import NewsCard from './NewsCard';
const NewsCards = () => {
    const page_no = 1;
    const limit_per_page = 5;
    const getAllNewsUrl = `https://news-app-pv.onrender.com/api/news/getAllNews/${page_no}/${limit_per_page}`;
    const [newsData, setNewsData] = useState([])

    const fetchAllNews = async () => {
        return await fetch(getAllNewsUrl)
            .then((res) => res.json())
            .then((d) => {
            setNewsData(d)
        })
    }
    
    
    

    useEffect(() => {
        fetchAllNews();
    }, [])

    return (
        <View style={{flex: 1, padding: 5}}>
            <FlatList 
                data ={newsData.data}
                renderItem={({item}) => <NewsCard item = {item}/>}
            />    
        </View>
    )
}

export default NewsCards