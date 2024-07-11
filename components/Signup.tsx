import React, {useState} from 'react';
import {
  Image, 
  StyleSheet,
  View,
  Text, 
  Dimensions, 
  TouchableOpacity,
  TextInput
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Input} from '@rneui/themed';
import SignupButton from '@/components/auth/buttons/SignupButtonToSignup';
import {Link} from 'expo-router';
import { Feather } from '@expo/vector-icons';

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
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image
          style={[]}
          resizeMode="contain"
          source={require('../assets/images/User/onevoice-header-logo.png')}
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
      <Text style={[styles.textSmall]}>
        Already have an accounts?{' '}
        <Link href={'/login'} asChild>
          <TouchableOpacity>
            <Text style={[styles.textSmall]}>Log in</Text>
          </TouchableOpacity>
        </Link>
      </Text>
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
  },
  textSmall: {
    fontSize: 12,
  },
  textGrey: {
    color: '#6C757D',
  },
  textBlue: {
    color: '#186DF7',
  },
  inlineText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  textBottom: {
    marginTop: 120,
    fontSize: 12,
  },
  buttonContainer1: {
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    gap: 10,
  },
  buttonContainer2: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    gap: 10,
  },
  buttonContainer3: {
    marginTop: 20,
    marginBottom: 50, 
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60%',
    gap: 10,
  },
  logo: {
    width: 35,
    height: 35,
    borderRadius: 30,
  },
  logoG: { 
    borderWidth: 1,
    borderColor: 'black',
  },
  backButtonContainer: {
    position: 'absolute',
    left: 15,
  },
  backButton: {
    fontSize: 35,
    fontWeight: 'bold',
    marginRight: 10,
    marginLeft: 0,
    marginBottom: 12,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    padding: 20,
  },
  footerText: {
    textAlign: 'center',
    color: '#1177C7',
  },
});

export default Signup;
