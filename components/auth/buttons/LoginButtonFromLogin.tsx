import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Link} from 'expo-router';
import {loginWithEmail} from '@/lib/Auth';

interface LoginButtonProps {
  email: string;
  password: string;
  loading: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = ({email, password, loading}) => {
  return (
    <Link href="/+not-found" asChild>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text} 
              onPress={() => loginWithEmail(email, password)}
              disabled={loading}>Login</Text>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 324,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default LoginButton;
