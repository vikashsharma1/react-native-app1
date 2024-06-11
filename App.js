import { useState } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';


export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.box}> 
        <Text style={styles.text}>Welcome Vikash!</Text>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    width: windowWidth > 768 ? '50%' : '70%',
    height: '40%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: windowWidth > 768 ? 42 : 24
  }
})
