// app/(tabs)/page1/something.tsx
import { Text, View, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Something() {
  const router = useRouter();

  return (
    <View>
      <Text>Page 1 - Something</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}