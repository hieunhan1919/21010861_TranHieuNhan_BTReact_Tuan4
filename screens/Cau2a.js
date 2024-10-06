import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { images } from '../constants/images';
import { TextInput } from 'react-native';

const Cau2a = ({ navigation }) => {
  return (
    <LinearGradient
      style={styles.container}
      locations={[0, 1]}
      colors={['#fbcb00', '#bf9a00']}
      useAngle={true}
      angle={180}
    >
      <Text style={styles.loginText}>Login</Text>

      <View style={styles.userLogin}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={images.AvatarUser}
        />
        <TextInput style={styles.loginUserInput} placeholder='Name' />
      </View>

      <View style={styles.passLogin}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={images.Lock}
        />
        <TextInput style={styles.loginPassInput} placeholder='Password' secureTextEntry={true} />
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={images.Eye}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('TikTokOK')}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cau2c')}>
        <Text style={styles.createText}>Forgot your password?</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginText: {
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 35.16,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    textTransform: 'uppercase',
    color: '#000000',
    marginBottom: 100,
  },
  createText: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 23.44,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    textTransform: 'uppercase',
    color: '#000000',
  },
  loginButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 23.44,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    textTransform: 'uppercase',
    color: '#ffffff',
  },
  icon: {
    height: 32,
    width: 32,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  userLogin: {
    width: '90%',
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#C4C4C44D',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
  },
  loginUserInput: {
    width: "85%",
    height: 50,
    backgroundColor: 'transparent',
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    color: '#000000',
    fontWeight: '400',
    lineHeight: 21.09,
    textAlign: 'left',
  },
  passLogin: {
    width: '90%',
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#C4C4C44D',
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
  },
  loginPassInput: {
    width: "70%",
    height: 50,
    backgroundColor: 'transparent',
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    color: '#000000',
    fontWeight: '400',
    lineHeight: 21.09,
    textAlign: 'left',
  },
});

export default Cau2a;
