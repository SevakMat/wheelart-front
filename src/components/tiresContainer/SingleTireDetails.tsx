import { Table, TableCell, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";

const SingleTireDetails = (tireInfo: any) => {
  return (
    <Box sx={{ width: "100%", paddingBottom: 5 }}>
      <Typography
        sx={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}
      >
        Details
      </Typography>
      <Table>
        <TableRow>
          <TableCell align="center" variant="head" sx={{ width: 100 }}>
            Model
          </TableCell>
          <TableCell align="center" sx={{ width: 100 }}>
            {tireInfo?.marka}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center" variant="head">
            Diameter
          </TableCell>
          <TableCell align="center">{tireInfo?.rimDiameter}"</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center" variant="head">
            Tire Aspect Ratio
          </TableCell>
          <TableCell align="center">{tireInfo?.tireAspectRatio}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center" variant="head">
            Width
          </TableCell>
          <TableCell align="center"> {tireInfo?.tireWidth}J</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center" variant="head">
            Stock
          </TableCell>
          <TableCell align="center">{tireInfo?.stock}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center" variant="head">
            ET offset
          </TableCell>
          <TableCell align="center">50</TableCell>
        </TableRow>
      </Table>
    </Box>
  );
};

export default SingleTireDetails;
