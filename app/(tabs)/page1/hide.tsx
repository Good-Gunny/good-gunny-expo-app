// app/(tabs)/page1/something.tsx
import { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { useTabBarVisibility } from '@/hooks/useTabBarVisibility';

export default function HideButtomTab() {
  const router = useRouter();
  const { setIsVisible } = useTabBarVisibility();

  useEffect(() => {
    // 페이지가 로드될 때 tabBar 숨기기
    setIsVisible(false);

    // 페이지를 벗어날 때 tabBar 다시 보이게 설정
    return () => setIsVisible(true);
  }, []);


  return (
    <View>
      <Text>Page 1 - HideButtomTab</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}