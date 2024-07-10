import {StyleSheet, View} from 'react-native';
import SignupScreen from '@/components/auth/SignupScreen';

function Signupp() {
  return (
    <View style={[styles.Screen]}>
      <SignupScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: '#FF0000',
  },
});

export default Signupp;
