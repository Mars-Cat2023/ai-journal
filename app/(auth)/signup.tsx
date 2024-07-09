import {StyleSheet, View, Dimensions} from 'react-native';
import Signup from '@/components/auth/SignupHelper';

const {width, height} = Dimensions.get('window');

const window_width = width;
const window_height = height;


function SignUp() {
  return (
    <View style={[styles.Screen]}>
      <Signup />
    </View>
  );
}


const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: "#FF0000",
  },
});

export default SignUp;
