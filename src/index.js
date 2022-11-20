import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native'
import React, { useRef, useState, UseState } from 'react'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha' ;
import { firebaseConfig } from '../config';
import firebase from 'firebase/compat/app';

const MainCoffeeCompenent = () => {
            
    const [ phoneNumber, setPhoneNumber ] = useState ('');
    const [ code, setCode ] = useState ('');
    const [ verificationId, setVerificationId ] = useState (null);
    const [ showVerification, setShowVerification ] = useState (true);
    const [ showConfirm, setShowConfirm ] = useState (false);
    const recaptchaVerifier = useRef(null);

    const sendVerifaciton = () => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider.verifyPhoneNumber(phoneNumber,recaptchaVerifier.current)
            .then(setVerificationId);
            setPhoneNumber(''); 
        setShowVerification(false);
        setShowConfirm(true);
    };

    const confirmCode = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);
        firebase.auth().signInWithCredential(credential)
            .then(() => {
                setCode('');
            })
            .catch((error)=> {
                alert(error);    
            })
        
        Alert.alert('Login Successful.Welcome to Coffee Shop')    

    }

    function renderVerification (){
        return (
            <>
                <Text style={styles.mainText}>
                    Login with Phone Number
                </Text>
                <TextInput
                    placeholder='Phone Number With Country Code'
                    onChangeText={setPhoneNumber}
                    keyboardType={'phone-pad'}
                    autoComplete='tel'
                    style={styles.textInput}
                />
                <TouchableOpacity style={styles.sendVerification} onPress={sendVerifaciton}>
                    <Text style={styles.buttonText}>
                        Send verification
                    </Text>
                </TouchableOpacity>
            </>    
        )
    }

    function renderconfirm (){
        return (
            <>
                <TextInput
                    placeholder='Confim Code'
                    onChangeText={setCode}
                    keyboardType={'number-pad'}
                    style={styles.textInput}
                />
                <TouchableOpacity style={styles.sendCode} onPress={confirmCode}>
                    <Text style={styles.buttonText}>
                        Send confirmation code
                    </Text>
                </TouchableOpacity>
            </>
        )
    }



    return (
        <View style={styles.container}>
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
            />
            {showVerification && renderVerification()}
            {showConfirm && renderconfirm()}
        </View>  
    )
}

export default MainCoffeeCompenent  


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000',
        alignItems:'center',
        justifyContent: 'center'
    },
    textInput: {
        paddigTop:40,
        paddingBottom:20,
        paddingHorizontal:20,
        fontSize:24,
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        marginBottom:20,
        textAlign:'center',
        color:'#fff'
    },
    sendVerification:{
        padding:20,
        backgroundColor:'#3498db',
        borderRadius:10,
   },
   sendCode:{
    padding:20,
    backgroundColor:'#9b59b6',
    borderRadius:10,
   },
   buttonText: {
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold '
   },
   mainText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff',
        margin:20
   }
});