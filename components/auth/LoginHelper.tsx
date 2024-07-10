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
import LoginButton from '@/components/auth/buttons/LoginButtonFromLogin';
import {Link} from 'expo-router';
import { Feather } from '@expo/vector-icons';
import Divider from '../Divider';

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
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={[styles.view]}>
      <View style={[styles.container]}>
        <View style={[styles.container1]}>
            <Link href={'/'} asChild>
              <TouchableOpacity style={styles.backButtonContainer}>
                <Text style={styles.backButton}>←</Text>
              </TouchableOpacity>
            </Link>
            <Image
              style={[]}
              resizeMode="contain"
              source={require('../../assets/images/User/User-Logoo.png')}
            />
        </View>

        <View style={[styles.container2]}> 
          <Text style={[styles.textCreate]}>Login</Text>
          <View>
            <TextInput
              style={[styles.textInput]}
              onChangeText={(text: any) => setEmail(text)}
              value={email}
              placeholder="Email"
            />
          </View>
          <View>
            <TextInput
              style={[styles.textInput]}
              secureTextEntry={!showPassword}
              onChangeText={(text: any) => setPassword(text)}
              value={password}
              placeholder="Password"
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: 15,
                right: 10,
                padding: 5,
              }}
              onPress={togglePasswordVisibility}
            >
              <Feather name={showPassword ? 'eye' : 'eye-off'} size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={[styles.buttonContainer1]}>
            <LoginButton email={email} password={password} loading={loading}/>
          </View>
          <Text style={[styles.textMiddle]}>Forgot Password?</Text>
        </View>
        
        <View style={[styles.container3]}>
          <View style={[styles.buttonContainer2]}>
            <Divider inset={true} width={100} color="black"/>
              <Text style={[styles.textSmall]}>or sign in with</Text>
            <Divider inset={true} width={100} color="black" />
          </View>
          <View style={[styles.buttonContainer3]}>
            <Image
              style={[styles.logo, styles.logoG]}
              resizeMode="contain"
              source={require('../../assets/images/User/User-Logog.png')}
            />
            <Image
              style={[styles.logo]}
              resizeMode="contain"
              source={require('../../assets/images/User/User-Logof.jpg')}
            />
            <Image
              style={[styles.logo]}
              resizeMode="contain"
              source={require('../../assets/images/User/User-Logoa.jpg')}
            />
          </View>
          <Text style={[styles.textSmall]}>
            Don’t have an account?{' '}
            <Link href={'/signup'} asChild>
              <TouchableOpacity>
                <Text style={[styles.textSmall, styles.linkText]}>Sign Up</Text>
              </TouchableOpacity>
            </Link>
          </Text>


          <View style={styles.footer}>
            <Text style={styles.footerText}>Terms of Use | Privacy Policy</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
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
  view: {
    display: 'flex',
    backgroundColor: 'white',
    minWidth: window_width,
    minHeight: window_height,
  },
  container: {
    justifyContent: 'space-around',
    padding: 0,
    flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1,
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textInput: {
    height: 48, 
    borderColor: 'black', 
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'center',
    width: '100%',
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 10,
  },
  textCreate: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'Poppins',
    marginTop: 10,
    marginBottom: 10,
  },
  linkText: {
    color: '#1177C7',
    textDecorationLine: 'underline',
  },
  textSmall: {
    fontSize: 12,
  },
  textMiddle: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
    color: '#696969',
    textDecorationLine: 'underline',
  },
  textBottom: {
    marginTop: 120,
    fontSize: 12,
  },
  textBottom2: {
    marginTop: 180,
    fontSize: 12,
  },
  container2: {
    flex: 6,
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '80%',
  },
  container3: {
    flex: 7,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
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
    marginTop: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    gap: 0,
  },
  buttonContainer3: {
    marginTop: 20,
    marginBottom: 50, 
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60%',
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