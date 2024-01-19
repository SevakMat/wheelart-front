import { useSearchParams } from "react-router-dom";

const carFilterString = '["make","model","year","modification"]'

export const useShowRimsBy = (): string => {
  const [searchParams] = useSearchParams();

  const queryParams = Object.fromEntries(searchParams);

  const keys = Object.keys(queryParams)
  const keysString = JSON.stringify(keys)

  if (carFilterString === keysString) {
    return "by-car"
  }
  return "by-rim"
}
