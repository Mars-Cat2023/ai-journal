// import React, {useState} from 'react';
// import {Image, StyleSheet, View, Text, Dimensions} from 'react-native';
// import {Button, Input} from '@rneui/themed';
// import {signInWithEmail, signUpWithEmail, signOut} from '@/lib/Auth';


// const {width, height} = Dimensions.get('window');

// const window_width = width;
// const window_height = height;

// const alpha = [0.04 * window_height, 0.1 * window_height, 0.5 * window_height, 1.0 * window_height];
// // const beta = [0.0 * window_width, 0.2 * window_width, 0.8 * window_width, 1.0 * window_width];


// export default function Auth() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [selected, setSelected] = useState(false);

//   console.log(window_width, window_height);
  
//   // return (
//   //   <View style={styles.Container}>
//   //     <View style={styles.Container1}>
//   //       <Image
//   //         style={[]}
//   //         resizeMode="contain"
//   //         source={require('../../assets/images/SignUp/SignUp-Logo1.png')}
//   //       />
//   //     </View>

//   //     <View style={[styles.Container2]}> 
//   //       <Text style={[styles.Text21]}>Create an Account</Text>
//   //       <View style={[styles.Container21]}>
//   //         <View >
//   //           <Input
//   //             label="Email"
//   //             leftIcon={{ type: 'font-awesome', name: 'envelope' }}
//   //             onChangeText={(text: any) => setEmail(text)}
//   //             value={email}
//   //             placeholder="email@address.com"
//   //             autoCapitalize={'none'}
//   //           />
//   //         </View>
//   //         <View >
//   //           <Input
//   //             label="Password"
//   //             leftIcon={{ type: 'font-awesome', name: 'lock' }}
//   //             onChangeText={(text: any) => setPassword(text)}
//   //             value={password}
//   //             secureTextEntry={true}
//   //             placeholder="Password"
//   //             autoCapitalize={'none'}
//   //           />
//   //         </View>
//   //         <Text style={[styles.Text22]}>Password must be at least 8 characters and contain a letter and a number.</Text>
//   //         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//   //           <Text>By clicking Sign Up, you acknowledge that you have read the Privacy Policy and agree to the Terms of Service</Text>
//   //         </View>
//   //       </View>
//   //     </View>
      
//   //     <View style={styles.Container3}>
//   //       <Button
//   //         title="Sign up"
//   //         disabled={loading}
//   //         onPress={() => signUpWithEmail(email, password)}
//   //       />
//   //     </View>
//   //   </View>
//   // );
//   return (
//     <View style={[styles.container]}>
//       <View style={[styles.container1]}>
//         <Image
//           style={[]}
//           resizeMode="contain"
//           source={require('../../assets/images/SignUp/SignUp-Logo1.png')}
//         />
//       </View>

//       <View style={[styles.container2]}> 
//         <Text style={[]}>Create an Account</Text>
//         <View style={[]}>
//           <View >
//             <Input
//               label="Email"
//               leftIcon={{ type: 'font-awesome', name: 'envelope' }}
//               onChangeText={(text: any) => setEmail(text)}
//               value={email}
//               placeholder="email@address.com"
//               autoCapitalize={'none'}
//             />
//           </View>
//           <View >
//             <Input
//               label="Password"
//               leftIcon={{ type: 'font-awesome', name: 'lock' }}
//               onChangeText={(text: any) => setPassword(text)}
//               value={password}
//               secureTextEntry={true}
//               placeholder="Password"
//               autoCapitalize={'none'}
//             />
//           </View>
//           <Text style={[]}>Password must be at least 8 characters and contain a letter and a number.</Text>
//           <View style={[]}>
//             <Text>By clicking Sign Up, you acknowledge that you have read the Privacy Policy and agree to the Terms of Service</Text>
//           </View>
//         </View>
//       </View>
      
//       <View style={[styles.container3]}>
//         <Button
//           title="Sign up"
//           disabled={loading}
//           onPress={() => signUpWithEmail(email, password)}
//         />
//       </View>
//     </View>
//   );
// }

// /*
// Qilong: Still need to find a new way for "Checkbox": 
//   <CheckBox
//   value={selected}
//   onValueChange={setSelected}
//   style={[styles.Text22]}/> 
// */

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'space-around',
//     padding: 20,
//     flexDirection: 'column',
//     backgroundColor: 'green',
//   },
//   container1: {
//     flex: 1,
//   },
//   container2: {
//     flex: 10,
//   },
//   container3: {
//     flex: 3,
//   }  
// });