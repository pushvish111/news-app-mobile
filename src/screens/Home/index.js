import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Carousel from '../../components/CarouselCard'
import Header from '../../components/Header'
import NewsCards from '../../components/NewsCards'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import SubHeader from '../../components/SubHeader'



const Home = ({...props}) => {
    return (
        <View style ={{backgroundColor:'black', }}>
            <Header title='Pv News' />
            <ScrollView>
                <View style ={{marginTop: 10}}>
                    <Carousel />
                </View>
                <View style ={{marginBottom : 82}}>
                    <SubHeader title='Latest News' />
                    <View style ={{marginTop: 10}}>
                        <NewsCards />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        isLoggedIn: state.auth.isLoggedIn,
    }
}

const mapDispatchToProps = (disptach) => { return {} }

export default connect(mapStateToProps, mapDispatchToProps)(Home);
