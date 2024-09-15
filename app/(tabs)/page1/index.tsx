// app/(tabs)/page1/index.tsx
import { Text, View, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Page1() {
  const router = useRouter();

  return (
    <View>
      <Text>Page 1</Text>
      <Button title="Go to Something" onPress={() => router.push('/(tabs)/page1/something')} />
      <Button title="Go to HideButtomBar" onPress={() => router.push('/(tabs)/page1/hide')} />
    </View>
  );
}