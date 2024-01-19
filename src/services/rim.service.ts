import axios from "../config/axios";

export const getRimsListByCarDateService = async (
  make?: string | null,
  model?: string | null,
  year?: string | null,
  modification?: string | null
): Promise<any> => {
  const url = `api/rims/by-car`;
  return axios.post(url, { where: { make, model, year, modification } });
};

export const getSingleRimService = async (
  id?: string,
  make?: string | null,
  model?: string | null,
  year?: string | null,
  modification?: string | null
): Promise<any> => {
  const url = `api/rims/rim/${id}`;
  // es make, model, year, modification drel em vor akeri masin info stananq
  return axios.post(url, { make, model, year, modification });
};

export const getPopularRimsService = async (): Promise<any> => {
  // const url = `api/rims/rim/${id}`
  // es make, model, year, modification drel em vor akeri masin info stananq
  // return axios.post(url, { make, model, year, modification })
  const result = {
    data: {
      popularRims: [
        {
          imageUrl:
            "https://wheelart.fr/cdn/shop/products/DY918-01.jpg?v=1682000680&width=990",
          rimModel: "DY1417-01",
          sizeR: '17"',
          width: 255,
          color: "Grey",
          price: 850,
          id: "1",
        },
        {
          imageUrl:
            "https://wheelart.fr/cdn/shop/products/DY918-01.jpg?v=1682000680&width=990",
          rimModel: "DY1417-01",
          sizeR: '17"',
          width: 255,
          color: "Grey",
          price: 850,
          id: "2",
        },
        {
          imageUrl:
            "https://wheelart.fr/cdn/shop/products/DY918-01.jpg?v=1682000680&width=990",
          rimModel: "DY1417-01",
          sizeR: '17"',
          width: 255,
          color: "Grey",
          price: 850,
          id: "1",
        },
        {
          imageUrl:
            "https://wheelart.fr/cdn/shop/products/DY918-01.jpg?v=1682000680&width=990",
          rimModel: "DY1417-01",
          sizeR: '17"',
          width: 255,
          color: "Grey",
          price: 850,
          id: "2",
        },
        {
          imageUrl:
            "https://wheelart.fr/cdn/shop/products/DY918-01.jpg?v=1682000680&width=990",
          rimModel: "DY1417-01",
          sizeR: '17"',
          width: 255,
          color: "Grey",
          price: 850,
          id: "1",
        },
        {
          imageUrl:
            "https://wheelart.fr/cdn/shop/products/DY918-01.jpg?v=1682000680&width=990",
          rimModel: "DY1417-01",
          sizeR: '17"',
          width: 255,
          color: "Grey",
          price: 850,
          id: "2",
        },
        {
          imageUrl:
            "https://wheelart.fr/cdn/shop/products/DY918-01.jpg?v=1682000680&width=990",
          rimModel: "DY1417-01",
          sizeR: '17"',
          width: 255,
          color: "Grey",
          price: 850,
          id: "1",
        },
        {
          imageUrl:
            "https://wheelart.fr/cdn/shop/products/DY918-01.jpg?v=1682000680&width=990",
          rimModel: "DY1417-01",
          sizeR: '17"',
          width: 255,
          color: "Grey",
          price: 850,
          id: "2",
        },
      ],
    },
  };
  return result;
};
