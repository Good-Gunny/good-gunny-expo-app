import { Stack } from 'expo-router';

export default function Page3Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Page 3' }} />
    </Stack>
  );
}