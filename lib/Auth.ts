import {Alert} from 'react-native';
import {supabase} from './supabase';

/**
 * Signs up the user with an email and password
 * @param {string} email - the email to sign up with
 * @param {string} password - the password to signup with
 * @param {bool} bool - true if successfully signs up user, false otherwise
 */
export async function signupWithEmail(email: string, password: string) {
  const {
    data: {session, user},
    error,
  } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      // toDo: change domain to firmcollective --- see developer(Lyton) notes
      emailRedirectTo: 'https://lyton.dev/login',
    },
  });

  // TODO: If error then return error code
  if (error) {
    Alert.alert('Sign up error', error.message);
    console.log('error', session, user);
    return false;
  } else if (session === null) {
    // if user identities array is 0, then email already exists
    if (user?.identities?.length === 0) {
      Alert.alert('Sign up error', 'This email is already in use.');
      return false;
    } else {
      // if not, then it is a new account
      Alert.alert(
        'Success',
        'Please check your email to confirm your account.'
      );
      return true;
    }
  } else {
    Alert.alert('Success', 'You have been signed up and logged in.');
    return true;
  }
}

/**
 * Signs in the user with a valid email and password
 * @param {string} email - the email to sign in with
 * @param {string} password - the password to sign in with
 * @return {bool} bool - returns false if the user isn't able to sign in, false otherwise
 */
export async function loginWithEmail(email: string, password: string) {
  const {error} = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  // TODO: if error then return error code
  if (error) {
    Alert.alert('Error signing in with user', error.message);
    return false;
  } else {
    Alert.alert('Success signing in with user');
    return true;
  }
}

export async function signOut() {
  const {error} = await supabase.auth.signOut();
  if (error) {
    Alert.alert('Error logging out user', error.message);
  } else {
    Alert.alert('Success logging out user');
  }
}

export async function getUser() {
  const {
    data: {user},
  } = await supabase.auth.getUser();
  return user;
}
