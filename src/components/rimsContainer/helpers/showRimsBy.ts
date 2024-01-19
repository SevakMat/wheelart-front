import { URLSearchParams } from "url";

const carFilterString = '["make","model","year","modification"]'

export const showRimsBy = (searchParams: URLSearchParams): string => {
  const queryParams11 = Object.fromEntries(searchParams);
  const keys = Object.keys(queryParams11)
  const keysString = JSON.stringify(keys)
  console.log(carFilterString, keysString);

  if (carFilterString === keysString) {
    return "byCar"
  }
  return "byRim"
}

const x = {
  make: "bmw",
  model: "3-series",
  modification: "afa92741e1",
  test: "6",
  year: "2009"
}