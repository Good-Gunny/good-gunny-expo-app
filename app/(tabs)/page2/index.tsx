import { View, Text, StyleSheet } from 'react-native';

export default function Page2() {
  return (
    <View style={styles.container}>
      <Text>This is admin page.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});