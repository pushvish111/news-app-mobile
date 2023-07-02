import React, {useEffect, useState} from 'react'
import { View, Text, Image } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { withNavigation } from 'react-navigation'
import dateFormat, { masks } from "dateformat";
import SubHeader from '../../components/SubHeader'
import RelatedNews from '../../components/RelatedNews'

const NewsDetails = ({navigation, route}) => {
    // console.log(route.params.id)
    const [newsData, setNewsData] = useState([])
    const [category, setcategory] = useState([])
    const [relatedNewsData, setRelatedNewsData] = useState([]);
    
    const id = route.params.id;
    const url = `https://news-app-pv.onrender.com/api/news/getById/${id}`;
    const fetchNewsById = async () => {
        return await fetch(url)
            .then((res) => res.json())
            .then((d) => {
            setNewsData(d.data)
            setcategory(d.data.category)
        })
    }

    const category_id = category._id


    useEffect(() => {
        fetchNewsById();
    }, [])

    return (
        <ScrollView style= {{backgroundColor:'black'}}>
        <View    style= {{ alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <View style={{padding:20, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={{uri : newsData.url}} style = {{height: 400, width: 400, borderRadius: 20}}  />
            </View>
            <View style ={{left:0, marginLeft: -100, marginTop: 10}}>
                <Text style = {{color:'gray', fontWeight: 'bold'}}>{dateFormat(newsData.updatedAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</Text>
                <Text style = {{color:'gray'}}>Views: {newsData.views}</Text>
            </View>
            <View>
                <Text style = {{color:'lightgray', marginLeft: -160, fontWeight:'bold', fontSize: 18, marginTop: 10}}>category: {category.category_name}</Text>
            </View>
            <View style = {{width: '100%', marginLeft: 20, width: 354, marginTop: 10}}>
                <Text style =  {{color:'white', fontWeight: 'bold', fontSize: 20}}>"  {newsData.title}  "</Text>
                <Text style = {{color:'lightgray', marginTop: 10}}>{newsData.content}</Text>
            </View>
        </View>
        {/* related news */}
        <View style ={{marginTop: 20, marginBottom: 20}}>
            <SubHeader title='Related News' />
            <RelatedNews categoryId = {category_id} />

        </View>
        </ScrollView>
    )
}

export default withNavigation(NewsDetails);
