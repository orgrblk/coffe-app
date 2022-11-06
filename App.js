import { StyleSheet, View } from 'react-native';
import MainCoffeeCompenent from './src'

export default function App() {
  return (
    <View style={styles.container}>
      <MainCoffeeCompenent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
