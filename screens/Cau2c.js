import React from 'react';
import { Image, TouchableOpacity, View, Text, StyleSheet, TextInput } from 'react-native';
import { images } from '../constants/images';
import { LinearGradient } from 'expo-linear-gradient';

export default function Cau2c() {
    return (
        <LinearGradient
            style={styles.linearGradient}
            colors={['#3B3B98', 'rgba(196, 196, 196, 0)']}
            locations={[0.2656, 0.8736]}
        >
            <View style={styles.container}>
                <View>
                    <Text style={styles.headerTitle}>
                        PASSWORD GENERATOR
                    </Text>
                </View>

                <View>
                    <TextInput
                        style={styles.input}
                    />
                </View>

                <View style={styles.settingsContainer}>
                    <View style={styles.settingItem}>
                        <Text style={styles.text}>Password length</Text>
                        <TextInput
                            style={styles.lengthInput}
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.settingItem}>
                        <Text style={styles.text}>Include lower case letters</Text>
                        <Image source={images.Tick} style={styles.icon} />
                    </View>

                    <View style={styles.settingItem}>
                        <Text style={styles.text}>Include uppercase letters</Text>
                        <Image source={images.NotTick} style={styles.icon} />
                    </View>

                    <View style={styles.settingItem}>
                        <Text style={styles.text}>Include numbers</Text>
                        <Image source={images.Tick} style={styles.icon} />
                    </View>

                    <View style={styles.settingItem}>
                        <Text style={styles.text}>Include special symbols</Text>
                        <Image source={images.NotTick} style={styles.icon} />
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Generate Password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#23235B'
    },
    headerTitle: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        lineHeight: 29.3,
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        width: 300,
        height: 50,
        backgroundColor: '#151537',
        borderRadius: 10,
        paddingHorizontal: 10,
        color: '#fff',
        marginBottom: 20,
    },
    settingsContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    lengthInput: {
        width: 100,
        height: 40,
        backgroundColor: '#fff',
        textAlign: 'center',
        borderRadius: 5,
        color: '#000',
    },
    icon: {
        width: 25,
        height: 25,
    },
    buttonContainer: {
        marginTop: 20,
    },
    button: {
        backgroundColor: '#3B3B98',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 23.44,
    },
});