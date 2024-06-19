import { supabase } from "./supabase"

/**
 * Signs up the user with an email and password
 * @param {string} email - the email to sign up with
 * @param {string} password - the password to signup with
 * 
 */
export async function signUpWithEmail(email: string, password: string) {
  const {
    data: { session },
    error,
  } = await supabase.auth.signUp({
    email: email,
    password: password,
  })

  // TODO: If error then return error code
  if (error) console.log("Error signing up with email");
  else { console.log("Success signing up with email") };
}

/**
 * Signs in the user with a valid email and password
 * @param {string} email - the email to sign in with
 * @param {string} password - the password to sign in with
 */
export async function signInWithEmail(email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })

  // TODO: if error then return error code
  if (error) console.log("Error signing in with email");
  else {
    console.log("Success signing in with email")
    const user = await getUser()
    console.log(user);

  };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) console.log("Error logging out");
  else {
    console.log("Success logging out")
  }
}

export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;

}
