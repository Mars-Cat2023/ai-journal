import React, { useState } from 'react'
import { Button, Input } from '@rneui/themed'
import {Image, StyleSheet, View, Text, Dimensions} from 'react-native';
import SignupButton from '@/components/auth/buttons/SignupButtonToSignup';

const {width, height} = Dimensions.get('window');

const window_width = width;
const window_height = height;

const alpha = [0.04 * window_height, 0.1 * window_height, 0.5 * window_height, 1.0 * window_height];
const beta = [0.0 * window_width, 0.2 * window_width, 0.8 * window_width, 1.0 * window_width];

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image
          style={[]}
          resizeMode="contain"
          source={require('../assets/images/User/User-Logoo.png')}
        />
      </View>

      <View style={[styles.container2]}> 
        <Text style={[styles.text21]}>Create an Account</Text>
        <View style={[styles.container21]}>
          <View >
            <Input
              label="Email"
              leftIcon={{ type: 'font-awesome', name: 'envelope' }}
              onChangeText={(text: any) => setEmail(text)}
              value={email}
              placeholder="email@address.com"
              autoCapitalize={'none'}
            />
          </View>
          <View >
            <Input
              label="Password"
              leftIcon={{ type: 'font-awesome', name: 'lock' }}
              onChangeText={(text: any) => setPassword(text)}
              value={password}
              secureTextEntry={true}
              placeholder="Password"
              autoCapitalize={'none'}
            />
          </View>
          <Text style={[styles.text22]}>Password must be at least 8 characters and contain a letter and a number.</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>By clicking Sign Up, you acknowledge that you have read the Privacy Policy and agree to the Terms of Service</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.container3}>
        <SignupButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    gap: 10,
  },
  container1: {
    position: 'absolute',
    top: alpha[0],
    bottom: alpha[1],
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    gap: 10,
  },
  container2: {
    position: 'absolute',
    top: alpha[1],
    bottom: alpha[2],
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    gap: 10,
  },
  container21: {
    alignItems: 'center',
  },
  container3: {
    position: 'absolute',
    top: alpha[2],
    bottom: alpha[3],
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    gap: 10,
  },
  text21: {
    fontSize: 28,
    fontFamily: 'Poppins',
    textAlign: 'left',
    marginTop: 0,
  },
  text22: {
    fontSize: 12,
    fontFamily: 'Poppins',
    marginTop: 0,
  }
  
});

export default Signup;
