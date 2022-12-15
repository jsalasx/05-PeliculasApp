import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { ActivityIndicator, Button, Dimensions, Text, View, FlatList, ScrollView } from 'react-native'
import { useMovies } from '../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';



const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
    const navigation = useNavigation();
    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets()

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="blue" size={100}></ActivityIndicator>
            </View>
        )
    }


    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>
                <View style={{
                    height: 440
                }}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        vertical={false}
                    />
                </View>

                <HorizontalSlider title="Popular" movies={popular} />
                <HorizontalSlider title="Top Rated" movies={topRated} />
                <HorizontalSlider title="Upcoming" movies={upcoming} />





            </View>
        </ScrollView>
    )
}
