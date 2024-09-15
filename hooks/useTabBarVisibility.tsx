import React, { createContext, useContext, useState } from 'react';

// TabBar의 가시성 상태를 관리하는 Context 생성
const TabBarVisibilityContext = createContext({
  isVisible: true,
  setIsVisible: (isVisible: boolean) => {},
});

// Context를 사용하기 위한 커스텀 훅
export const useTabBarVisibility = () => useContext(TabBarVisibilityContext);

// Context Provider 컴포넌트
export const TabBarVisibilityProvider = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <TabBarVisibilityContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </TabBarVisibilityContext.Provider>
  );
};