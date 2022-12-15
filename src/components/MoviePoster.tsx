import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { BoxShadow } from 'react-native-shadow';
import { useNavigation } from '@react-navigation/native';
interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation();

    const shadowOpt = {
        width,
        height,
        color: "#000",
        border: 1,
        radius: 10,
        opacity: 0.2,
        x: 5,
        y: 7,
        style: { marginVertical: 10 }
    }
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DetailScreen', movie)}
            activeOpacity={0.8}
            style={{
                width,
                height,
                marginHorizontal: 8,
                paddingBottom: 20,
                paddingHorizontal: 6
            }}>
            <BoxShadow setting={shadowOpt}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri
                        }}
                        style={styles.image}
                    />
                </View>
            </BoxShadow>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 20,

    },
    imageContainer: {
        flex: 1,
        borderRadius: 10

        //backgroundColor: 'red'

    }
});