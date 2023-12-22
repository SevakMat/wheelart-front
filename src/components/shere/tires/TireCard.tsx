import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { TireType } from "../../../store/types/tire/tire";

interface TireCardProps {
  tire: TireType
}

export default function TireCard({ tire }: TireCardProps) {

  const { id, imageUrl, marka, rimDiameter, stock, tireAspectRatio, tireWidth } = tire

  return (
    <Card
      sx={{
        maxWidth: 300,
        textAlign: "center",
        boxShadow: "none",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            marginLeft: "auto",
            marginRight: "auto",

            "@media (max-width: 1090px)": {
              width: "180px",
              height: "180px",
              marginLeft: "auto",
              marginRight: "auto",
              objectFit: "cover",
            },
          }}
          image={imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            {` marka - ${marka}`} <br />
            {`  ${tireWidth}/${tireAspectRatio}/${rimDiameter}`} <br />


          </Typography>
          <Typography variant="h5" color="text.primary">
            {1000} EUR
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
