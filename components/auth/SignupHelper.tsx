import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Input, CheckBox} from '@rneui/themed';
import SignupButton from '@/components/auth/buttons/SignupButtonFromSignup';
import {Link} from 'expo-router';
import {Feather} from '@expo/vector-icons';
import Divider from '../Divider';

const {width, height} = Dimensions.get('window');

const window_width = width;
const window_height = height;

const alpha = [
  0.04 * window_height,
  0.1 * window_height,
  0.5 * window_height,
  1.0 * window_height,
];
const beta = [
  0.0 * window_width,
  0.2 * window_width,
  0.8 * window_width,
  1.0 * window_width,
];

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

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
          <Text style={[styles.textCreate]}>Create an Account</Text>
          <View style={[]}>
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
                <Feather
                  name={showPassword ? 'eye' : 'eye-off'}
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>

            <Text style={[styles.textSmall, styles.textGrey]}>
              Password must be at least 8 characters and contain a letter and a
              number.
            </Text>
            <View style={[styles.containercheckbox]}>
              <CheckBox
                checked={isChecked}
                onPress={handleCheckboxChange}
                style={styles.checkbox}
              />
              <View style={[styles.inlineText]}>
                <Text style={[styles.textSmall]}>
                  <Text style={[styles.textGrey]}>
                    By clicking Sign Up, you acknowledge that you have read the{' '}
                    {''}
                  </Text>
                  <Text style={[styles.textBlue]}> Privacy Policy {''}</Text>
                  <Text style={[styles.textGrey]}> and agree to the {''}</Text>
                  <Text style={[styles.textBlue]}> Terms of Service</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.container3]}>
          <View style={[styles.buttonContainer1]}>
            <SignupButton email={email} password={password} loading={loading} />
          </View>
          <View style={[styles.buttonContainer2]}>
            <Divider inset={true} width={100} color="black" />
            <Text style={[styles.textSmall]}>or sign up with</Text>
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
            Already have an accounts?{' '}
            <Link href={'/login'} asChild>
              <TouchableOpacity>
                <Text style={[styles.textSmall, styles.linkText]}>Log in</Text>
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
  containercheckbox: {
    left: -30,
    flexDirection: 'row',
    width: '90%',
  },
  checkbox: {
    marginRight: 0,
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
    marginTop: 80,
    marginBottom: 10,
  },
  linkText: {
    color: '#1177C7',
    textDecorationLine: 'underline',
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
  container2: {
    flex: 6,
    flexDirection: 'column',
    alignSelf: 'center',
    width: '80%',
  },
  container3: {
    flex: 6,
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
