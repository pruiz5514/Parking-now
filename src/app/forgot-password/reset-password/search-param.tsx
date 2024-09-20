'use client';
import { useSearchParams } from 'next/navigation';

interface SearchParamProps {
  setToken: (token: string) => void;
}

const SearchParam: React.FC<SearchParamProps> = ({ setToken }) => {
  const searchParams = useSearchParams();
  const token = searchParams.get('pn');

    if (token) {
        setToken(token);
    }

  return null
};

export default SearchParam;