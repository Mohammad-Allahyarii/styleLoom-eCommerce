import { useEffect, useState } from 'react';

function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    const mediaQueryList: MediaQueryList = window.matchMedia(query);

    function handleChange(event: MediaQueryListEvent): void {
      setMatches(event.matches);
    }

    // when query change - set init value again
    setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener('change', handleChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;




// use case

//  const isMobile = useMediaQuery('(max-width: 767px)');
//   const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
//   const isDesktop = useMediaQuery('(min-width: 1024px)');