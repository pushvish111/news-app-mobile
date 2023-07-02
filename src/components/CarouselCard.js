import { View, Text ,StyleSheet, Dimensions, Image, FlatList} from 'react-native'
import React, { useState, useEffect } from 'react'
import CarouselItem from './CarouselItem';
import { ScrollView } from 'react-native-gesture-handler';


const CarouselCard = () => {

    const [sliderNews, setSliderNews] = useState([]);

    const getSliderUrl = "https://news-app-pv.onrender.com/api/news/getAllNews/slider";
    const fetchAllSliderNews = async () => {
        return await fetch(getSliderUrl)
            .then((res) => res.json())
            .then((d) => {
            setSliderNews(d)
        })
    }

    useEffect(() => {
        fetchAllSliderNews();
    }, []);
    return (
        <ScrollView style= {{ elevation :20, shadowColor: '#52006A',  }}>
            <FlatList 
                data ={sliderNews.data}
                renderItem={({item}) => <CarouselItem item = {item}/>}
                horizontal
                showsHorizontalScrollIndicator
                pagingEnabled
                bounces= {false}
            />
        </ScrollView>
    )
}


export default CarouselCard