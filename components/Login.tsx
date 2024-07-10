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
const {width, height} = Dimensions.get('window');

const window_width = width;
const window_height = height;

const alpha = [0.04 * window_height, 0.1 * window_height, 0.5 * window_height, 1.0 * window_height];
const beta = [0.0 * window_width, 0.2 * window_width, 0.8 * window_width, 1.0 * window_width];

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState(false)
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
        <Text style={[styles.text21]}>Login</Text>
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
          <Text style={[styles.textSmall]}>
            Don’t have an account?{' '}
            <Link href={'/signup'} asChild>
              <TouchableOpacity>
                <Text style={[styles.textSmall, styles.textInput]}>Sign Up</Text>
              </TouchableOpacity>
            </Link>
          </Text>
          <Text style={[styles.textBottom2]}>Terms of Use | Privacy Policy</Text>
        </View>
      </View>
      
      <View style={styles.container3}>
        <LoginButton email={email} password={password} loading={loading}/>
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
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 20,
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
  textInput: {
    height: 20, 
    borderColor: 'black', 
    borderWidth: 10,
    borderRadius: 20,
    alignSelf: 'center',
    width: '100%',
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 20,
  },
  textSmall: {
    fontSize: 12,
  },
  textMiddle: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
  },
  textBottom: {
    marginTop: 120,
    fontSize: 12,
  },
  textBottom2: {
    marginTop: 180,
    fontSize: 12,
  },
});

export default Login;
