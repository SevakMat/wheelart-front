import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import "../../../fonts/monsterrat.css";

export default function BlogCard({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <Card sx={{ maxWidth: 345, height: 280 }}>
      <CardActionArea sx={{ height: 280 }}>
        <CardMedia component="img" height="180" image={image} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontFamily: "'Montserrat', sans-serif", textAlign: "center" }}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
