import React, { useEffect, useState } from 'react'
import Background from '../components/Background'
import {
    Text, StyleSheet, View, 
    TouchableHighlight} from 'react-native';
import ChooseScreenFirst from './ChooseScreenFirst';
import CustomerChooseScreenFirst from './CustomerChooseScreenFirst';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query } from "firebase/firestore";
import { db } from '../components/config';

export default function ArtistOrCustomer({ navigation }) {
    const [isCustomer, setCustomer] = useState()
    const [isArtist, setArtist] = useState()
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid;


    function updateUserType(navigatorNum) {
        if(navigatorNum === 1) {
            updateDoc(doc(db, "users", uid), {     
                isArtist: 1,
              }).then(() => { 
                // Data saved successfully!
                console.log('data submitted');  
              
              }).catch((error) => {
                    // The write failed...
                    console.log(error);
              });
        }
        else {
            updateDoc(doc(db, "users", uid), {     
                isCustomer: 1,
              }).then(() => { 
                // Data saved successfully!
                console.log('data submitted');  
              
              }).catch((error) => {
                    // The write failed...
                    console.log(error);
              });
        }
    }


    function handleUserType(navigatorNum) {
        if(navigatorNum === 0) {
            updateUserType(navigatorNum);
            navigation.navigate(CustomerChooseScreenFirst);

        }
        else {
            updateUserType(navigatorNum);
            navigation.navigate(ChooseScreenFirst);
        }

    }
    
    return (
        <Background>
            <Text style={[{ color: 'white', marginBottom: 20, fontWeight: 'bold' }]} >Are u customer or artist?</Text>
            <TouchableHighlight
                 onPress={() => {handleUserType(1)}}
            >
                <View style={styles.button}>
                    <Text style={styles.textButton}>
                        Artist
                    </Text>
                </View>
            </TouchableHighlight>


            <TouchableHighlight
                 onPress={() => {handleUserType(0)}}
            >
                <View style={styles.button}>
                    <Text style={styles.textButton}>
                        Customer
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
