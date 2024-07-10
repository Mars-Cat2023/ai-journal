import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';
import {Link} from 'expo-router';

const AuthHeader = () => {
  return (
    <View style={styles.header}>
      <Link href={'/'} asChild>
        <TouchableOpacity style={styles.backButtonContainer}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
      </Link>
      <Image
        source={require('../../assets/images/onevoice-header-logo.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  backButtonContainer: {
    position: 'absolute',
    left: 15,
  },
  backButton: {
    fontSize: 24,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5,
  },
  logo: {
    width: 180,
    height: 100,
    resizeMode: 'contain',
  },
});

export default AuthHeader;
