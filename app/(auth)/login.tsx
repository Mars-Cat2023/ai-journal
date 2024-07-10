import {StyleSheet, View} from 'react-native';
import LoginScreen from '@/components/auth/LoginScreen';

function Page() {
  return (
    <View style={[styles.Screen]}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: '#FF0000',
  },
});

export default Page;
