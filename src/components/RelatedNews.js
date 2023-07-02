import { View, Text } from 'react-native'
import React, { useState , useEffect} from 'react'
import { FlatList } from 'react-native-gesture-handler';
import NewsCard from './NewsCard';

const RelatedNews = (props) => {
    // console.log(props.categoryId)
    const [data, setData] = useState([]);
    const id = props.categoryId
    const url = `https://news-app-pv.onrender.com/api/news/getrelatedNews/${id}`
    const fetchRelatedNews = async () => {
        return await fetch(url)
            .then((res) => res.json())
            .then((d) => {
            setData(d.data)
        })
    }
    // console.log()

    useEffect(() => {
        fetchRelatedNews();
    })

    return (
        <View>
            <FlatList 
                data = {data}
                renderItem={({item}) => <NewsCard item = {item}/>}
            />
        </View>
    )
}

export default RelatedNews