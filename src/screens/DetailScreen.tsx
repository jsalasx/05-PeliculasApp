import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';
import { BoxShadow } from 'react-native-shadow';
import { ScrollView } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width


interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {
};

export const DetailScreen = ({ route }: Props) => {
    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const shadowOpt = {
        width: screenWidth,
        height: screenHeight * 0.7,
        color: "#000",
        border: 4,
        radius: 30,
        opacity: 0.15,
        x: 5,
        y: 8,
        style: { marginVertical: 0 }
    }
    //console.log(movie.title);
    return (
        <ScrollView>
            <BoxShadow setting={shadowOpt}>
                <View style={styles.imageContainer}>

                    <Image
                        source={{ uri }}
                        style={styles.posterImage}
                    />


                </View>
            </BoxShadow>

            <View style={styles.marginContainer} >
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>

        </ScrollView>


    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: screenWidth,
        height: screenHeight * 0.7,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        overflow: 'hidden'
    },
    posterImage: {
        flex: 1,

    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },

    subTitle: {
        fontSize: 16,
        opacity: 0.8
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }

});