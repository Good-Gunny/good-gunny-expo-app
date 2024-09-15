import { Stack } from 'expo-router';

export default function Page4Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Page 4' }} />
    </Stack>
  );
}