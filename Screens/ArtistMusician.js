import React, { useState } from 'react'
import Background from '../components/Background'
import {
    Text, StyleSheet, View, TextInput, ScrollView,
    Image, TouchableHighlight, Modal, AppRegistry, Linking, TouchableOpacity
} from 'react-native';
import ArtistMusicianType from './ArtistMusicianType';


export default function ArtistMusician({ navigation }) {

    return (
        <Background>
            <Text style={[{ color: 'white', marginBottom: 20, fontWeight: 'bold' }]} > what is your specific profession?</Text>
            <TouchableHighlight
                onPress={() => navigation.navigate(ArtistMusicianType)}
            >
                <View style={styles.button}>
                    <Text style={styles.textButton}>
                        Vocalist
                    </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => navigation.navigate(ArtistMusicianType)}
            >
                <View style={styles.button}>
                    <Text style={styles.textButton}>
                        Producer
                    </Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight
                onPress={() => navigation.navigate(ArtistMusicianType)}
            >
                <View style={styles.button}>
                    <Text style={styles.textButton}>
                        Sound Engineer
                    </Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight
                onPress={() => navigation.navigate(ArtistMusicianType)}
            >
                <View style={styles.button}>
                    <Text style={styles.textButton}>
                        Composer
                    </Text>
                </View>
            </TouchableHighlight>
        </Background >
    )
}

const styles = StyleSheet.create({
    container: {
        height: 75,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        width: 200,
        marginBottom: 20,
        marginTop: 20,
        padding: 10,
        backgroundColor: '#3451FF',
        borderRadius: 15,

        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },

        shadowOpacity: 0.15,
        shadowRadius: 6.46,
        elevation: 9,

    },
    textButton: {
        color: 'white',
    },
})
