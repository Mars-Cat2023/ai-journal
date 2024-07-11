import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {router} from 'expo-router';
import {signupWithEmail} from '@/lib/Auth';

interface SignupButtonProps {
  email: string;
  password: string;
  loading: boolean;
}

const SignupButton: React.FC<SignupButtonProps> = ({
  email,
  password,
  loading,
}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={async () => {
        const isSuccess = await signupWithEmail(email, password);

        // TODO: if success, route to email verification page
        if (isSuccess) router.push('/');
      }}
      disabled={loading}
    >
      <Text style={styles.text}>Sign Up</Text>
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

export default SignupButton;