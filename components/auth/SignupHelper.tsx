import React, {useState} from 'react';
import {Image, StyleSheet, View, Text, Dimensions} from 'react-native';
import {Button, Input} from '@rneui/themed';
import SignupButton from '@/components/auth/buttons/SignupButtonFromSignup';

const {width, height} = Dimensions.get('window');

const window_width = width;
const window_height = height;

const alpha = [0.04 * window_height, 0.1 * window_height, 0.5 * window_height, 1.0 * window_height];
const beta = [0.0 * window_width, 0.2 * window_width, 0.8 * window_width, 1.0 * window_width];


export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(false);
  
  return (
    <View style={[styles.container]}>
      <View style={[styles.container1]}>
        <Image
          style={[]}
          resizeMode="contain"
          source={require('../../assets/images/User/User-Logoo.png')}
        />
      </View>

      <View style={[styles.container2]}> 
        <Text style={[styles.textCreate]}>Create an Account</Text>
        <View style={[]}>
          <View >
            <Input
              leftIcon={{ type: 'font-awesome', name: 'envelope' }}
              onChangeText={(text: any) => setEmail(text)}
              value={email}
              placeholder="email@address.com"
              autoCapitalize={'none'}
            />
          </View>
          <View >
            <Input
              leftIcon={{ type: 'font-awesome', name: 'lock' }}
              onChangeText={(text: any) => setPassword(text)}
              value={password}
              secureTextEntry={true}
              placeholder="Password"
              autoCapitalize={'none'}
            />
          </View>
          <Text style={[styles.textSmall, styles.grey]}>Password must be at least 8 characters and contain a letter and a number.</Text>
          <View style={[]}>
            <Text style={[styles.textSmall, styles.grey]}>By clicking Sign Up, you acknowledge that you have read the Privacy Policy and agree to the Terms of Service</Text>
          </View>
        </View>
      </View>
      
      <View style={[styles.container3]}>
        <View style={[styles.buttonContainer1]}>
          <SignupButton email={email} password={password} loading={loading}/>
        </View>
        <View style={[styles.buttonContainer2]}>
          <Text style={[styles.textSmall]}>-------------------- or sign up with --------------------</Text>
        </View>
        <View style={[styles.buttonContainer3]}>
          <Image
            style={[styles.logoF]}
            resizeMode="contain"
            source={require('../../assets/images/User/User-Logog.png')}
          />
          <Image
            style={[styles.logoF]}
            resizeMode="contain"
            source={require('../../assets/images/User/User-Logof.jpg')}
          />
          <Image
            style={[styles.logoF]}
            resizeMode="contain"
            source={require('../../assets/images/User/User-Logoa.jpg')}
          />
        </View>
        <Text style={[styles.textSmall]}>Already have an accounts? Log in</Text>
        <Text style={[styles.textBottom]}>Terms of Use | Privacy Policy</Text>
      </View>
    </View>
  );
}

/*
Qilong: Still need to find a new way for "Checkbox": 
  <CheckBox
  value={selected}
  onValueChange={setSelected}
  style={[styles.Text22]}/> 
*/

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    padding: 20,
    flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1,
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textCreate: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'Poppins',
    marginTop: 10,
  },
  textSmall: {
    fontSize: 12,
  },
  textBottom: {
    marginTop: 120,
    fontSize: 12,
  },
  container2: {
    flex: 8,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  container3: {
    flex: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonContainer1: {
    marginTop: 0,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    gap: 10,
  },
  buttonContainer2: {
    marginTop: 50,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    gap: 10,
  },
  buttonContainer3: {
    marginTop: 20,
    marginBottom: 20, 
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60%',
    gap: 10,
  },
  logoF: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  grey: {
    color: '#6C757D'
  },
});