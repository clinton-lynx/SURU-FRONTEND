import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working our app!</Text>
  <StatusBar style="auto" /> */}
      {/* Welcome Page UI Design  */}
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}> Suru</Text>
          <Text style={styles.subtitle}>Food for all online</Text>
        </View>

        <View style={styles.heroWrapper}>
          {/* this is for the hero image */}
          <View style={styles.imageWrapper}>
            <Image style={styles.imag}
              source={require('../assets/deer.png')}
            />
          </View>

          <Text style={styles.heroDescWrapper}>
            <Text style={styles.heroTitle}>Relax  and Shop from </Text>
            <Text style={styles.heroKeyword}>Suru</Text>
          </Text>
          <Text style={styles.heroPar}> Shop online and get grocories delivered from stores to your home in as fast as 1 hour .</Text>

        </View>
        <View style={styles.bottomWrapper}>
          <TouchableOpacity style={styles.btnPrimaryWrapper}   onPress={() =>
        navigation.navigate('SignUp', {name: 'signup'})
      }>
            <Text style={styles.btnPrimary}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSecondaryWrapper}>
            <Text style={styles.btnSecondary}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View >
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  wrapper: {
    paddingTop: 50,
  },
  bottomWrapper: {
    paddingTop: 30,
    justifyContent: 'flex-start',
  },
  titleWrapper: {
    paddingBottom: 0,
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: '600',
    padding: 0,
    color: '#000',
    lineHeight: 62,
    margin: 0,

  },
  subtitle: {
    paddingBottom: 0,
    fontSize: 16,
    color: '#000',
    fontWeight: '400',
  },
  heroWrapper: {
    alignItems: 'center',
  },
  heroDescWrapper: {
    flexDirection: 'row',
    paddingBottom: 14,
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 160,
    alignItems: 'center',
    fontSize: 22,
    textAlign: 'center',
  },
  heroKeyword: {
    fontSize: 30,
    fontWeight: '600',

  },
  heroTitle: {
    lineHeight: 28,
    margin: 0,
    padding: 0,

  },
  imageWrapper: {
    padding: 50,
    marginVertical: 20,
    backgroundColor: '#FF5E001C',
    borderRadius: 150,
    maxWidth: '100%',

  },
  imag: {
    maxWidth: '100%',
  },
  heroPar: {
    maxWidth: 250,
    justifyContent: 'center',
    maxWidth: 220,
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 16,
  },
  btnPrimaryWrapper: {
    backgroundColor: '#2A4905',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  btnSecondaryWrapper: {
    borderRadius: 10,
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#2A4905',
    paddingHorizontal: 12
  },
  btnPrimary: {
    borderRadius: 30,
    alignSelf: 'center',
        color: '#fff',
    fontSize: 24,
  },
  btnSecondary: {
    color: '#2A4905',
    fontSize: 24,
    alignSelf: 'center',
    justifyContent: 'center'
  }
});