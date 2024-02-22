import { Box, List } from "@mui/material";

import { RootState, useAppSelector } from "../../store";

import AccsListCard from "./AccsListCard";

const AccsList = () => {
  // const { rimList } = useAppSelector((state: RootState) => state.rim)

  const fakeData = [
    {
      isPopular: false,
      image:
        "https://img.freepik.com/free-vector/industry-realistic-nuts-bolts-collection_23-2149395071.jpg?w=740&t=st=1706956490~exp=1706957090~hmac=ea7b22d73d5f6558c496b88f5800e05a508ea1c2c08bcad96387ac2966cb9f45",
      price: 12,
      id: 1,
      title: "M14x1,50 27mm",
      length: 27,
      color: "gray",
      gram: 1200,
    },
    {
      isPopular: false,
      image:
        "https://img.freepik.com/free-vector/industry-realistic-nuts-bolts-collection_23-2149395071.jpg?w=740&t=st=1706956490~exp=1706957090~hmac=ea7b22d73d5f6558c496b88f5800e05a508ea1c2c08bcad96387ac2966cb9f45",
      price: 12,
      id: 1,
      title: "M14x1,50 27mm",
      length: 27,
      color: "gray",
      gram: 1200,
    },
    {
      isPopular: false,
      image:
        "https://img.freepik.com/free-vector/industry-realistic-nuts-bolts-collection_23-2149395071.jpg?w=740&t=st=1706956490~exp=1706957090~hmac=ea7b22d73d5f6558c496b88f5800e05a508ea1c2c08bcad96387ac2966cb9f45",
      price: 12,
      id: 1,
      title: "M14x1,50 27mm",
      length: 27,
      color: "gray",
      gram: 1200,
    },
    {
      isPopular: false,
      image:
        "https://img.freepik.com/free-vector/industry-realistic-nuts-bolts-collection_23-2149395071.jpg?w=740&t=st=1706956490~exp=1706957090~hmac=ea7b22d73d5f6558c496b88f5800e05a508ea1c2c08bcad96387ac2966cb9f45",
      price: 12,
      id: 1,
      title: "M14x1,50 27mm",
      length: 27,
      color: "gray",
      gram: 1200,
    },
    {
      isPopular: false,
      image:
        "https://img.freepik.com/free-vector/industry-realistic-nuts-bolts-collection_23-2149395071.jpg?w=740&t=st=1706956490~exp=1706957090~hmac=ea7b22d73d5f6558c496b88f5800e05a508ea1c2c08bcad96387ac2966cb9f45",
      price: 12,
      id: 1,
      title: "M14x1,50 27mm",
      length: 27,
      color: "gray",
      gram: 1200,
    },
    {
      isPopular: false,
      image:
        "https://img.freepik.com/free-vector/industry-realistic-nuts-bolts-collection_23-2149395071.jpg?w=740&t=st=1706956490~exp=1706957090~hmac=ea7b22d73d5f6558c496b88f5800e05a508ea1c2c08bcad96387ac2966cb9f45",
      price: 12,
      id: 1,
      title: "M14x1,50 27mm",
      length: 27,
      color: "gray",
      gram: 1200,
    },
    {
      isPopular: false,
      image:
        "https://img.freepik.com/free-vector/industry-realistic-nuts-bolts-collection_23-2149395071.jpg?w=740&t=st=1706956490~exp=1706957090~hmac=ea7b22d73d5f6558c496b88f5800e05a508ea1c2c08bcad96387ac2966cb9f45",
      price: 12,
      id: 1,
      title: "M14x1,50 27mm",
      length: 27,
      color: "gray",
      gram: 1200,
    },
  ];

  return (
    <Box>
      <Box sx={{ margin: "30px 10px" }}>
        <List
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",

            "@media(max-width: 1000px)": {
              gap: 1,
            },
          }}
        >
          {fakeData.map((accs: any) => {
            return (
              <li>
                <AccsListCard
                  image={accs.image}
                  price={accs.price}
                  accsId={accs.id}
                  title={accs.title}
                  length={accs.length}
                  color={accs.color}
                  gram={accs.gram}
                />
              </li>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default AccsList;
