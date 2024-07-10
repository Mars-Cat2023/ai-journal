import {StyleSheet, View, Dimensions} from 'react-native';
import Login from '@/components/auth/LoginHelper';

const {width, height} = Dimensions.get('window');

const window_width = width;
const window_height = height;

function Loginn() {
  return (
    <View style={[styles.Screen]}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: '#FF0000',
  },
});

export default Loginn;
