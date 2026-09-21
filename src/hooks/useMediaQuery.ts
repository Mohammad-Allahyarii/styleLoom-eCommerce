import { useCallback, useSyncExternalStore } from 'react';

function useMediaQuery(query: string): boolean {
  // useSyncExternalStore requires stable subscribe/getSnapshot identities,
  // otherwise it re-subscribes on every render
  const subscribe = useCallback(
    (onStoreChange: () => void): (() => void) => {
      const mediaQueryList: MediaQueryList = window.matchMedia(query);
      mediaQueryList.addEventListener('change', onStoreChange);
      return () => mediaQueryList.removeEventListener('change', onStoreChange);
    },
    [query],
  );

  // boolean primitive: equal values are detected as equal across calls
  const getSnapshot = useCallback((): boolean => {
    return window.matchMedia(query).matches;
  }, [query]);

  // SSR guard: no window on the server
  const getServerSnapshot = useCallback((): boolean => false, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default useMediaQuery;

// use case

//  const isMobile = useMediaQuery('(max-width: 767px)');
//   const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
//   const isDesktop = useMediaQuery('(min-width: 1024px)');
