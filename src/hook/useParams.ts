import { useSearchParams } from "react-router-dom";

export const useParamsHook = () => {
  const [searchParams] = useSearchParams();
  const queryParams = Object.fromEntries(searchParams);
  return queryParams
} 