import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Link} from 'expo-router';
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
    <Link href="/+not-found" asChild>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.text}
          onPress={() => signupWithEmail(email, password)}
          disabled={loading}
        >
          Sign up
        </Text>
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
    fontFamily: 'Poppins',
  },
});

export default SignupButton;
