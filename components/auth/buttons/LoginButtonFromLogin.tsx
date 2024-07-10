import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {loginWithEmail} from '@/lib/Auth';

interface LoginButtonProps {
  email: string;
  password: string;
  loading: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  email,
  password,
  loading,
}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={async () => loginWithEmail(email, password)}
      disabled={loading}
    >
      <Text style={styles.text}>Login</Text>
    </TouchableOpacity>
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
    fontFamily: 'Poppins',
  },
});

export default LoginButton;
