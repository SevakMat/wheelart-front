import { useSearchParams } from "react-router-dom";

export const useParamsHook = () => {
  const [searchParams] = useSearchParams();
  const queryParams = Object.fromEntries(searchParams);
  return queryParams
}


const parseMapToArray = (searchParams: URLSearchParams): Record<string, (string | number)[]> => {
  const result: Record<string, (string | number)[]> = {};

  searchParams.forEach((value, key) => {
    const parsedValue = isNaN(Number(value)) ? value : Number(value);
    if (parsedValue === 0) {
      return
    }
    if (!result[key]) {
      result[key] = [parsedValue];
    } else {
      result[key].push(parsedValue);
    }
  });
  return result
}

export const useParamsHookArrays = (searchParams: URLSearchParams): Record<string, (string | number)[]> => {
  return parseMapToArray(searchParams)
}

