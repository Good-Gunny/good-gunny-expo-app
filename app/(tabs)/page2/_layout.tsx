import { Stack } from 'expo-router';

export default function Page2Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Page 2' }} />
    </Stack>
  );
}