import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { WheelType } from "../../../store/types/wheel/wheel";

interface WheelCardProps {
  wheel: WheelType
}

export default function WheelCard({ wheel }: WheelCardProps) {

  const { price, sizeR, rimModel, imageUrl, centerBore, pcd, studHoles, id } = wheel
  const wheelInfo = `Size R${sizeR} `

  return (
    <Card
      sx={{
        maxWidth: price === "" ? 350 : 300,
        textAlign: "center",
        boxShadow: "none",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            width: price === "" ? "100%" : "250px",
            height: price === "" ? "200px" : "250px",
            objectFit: price === "" ? "cover" : "contain",
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
            {` ID - ${id}`} <br />

            {wheelInfo} <br />
            {` CBR - ${centerBore}`} <br />
            {` PCD - ${pcd}`} <br />
            {` studHoles - ${studHoles}`} <br />


            {rimModel}
          </Typography>
          <Typography variant="h5" color="text.primary">
            {price} EUR
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
