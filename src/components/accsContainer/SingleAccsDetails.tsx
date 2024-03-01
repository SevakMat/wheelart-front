import { Table, TableCell, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";

const SingleAccsDetails = (accsInfo: any) => {
  return (
    <Box sx={{ width: "100%", paddingBottom: 5 }}>
      <Typography
        sx={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}
      >
        Details
      </Typography>
      <Table>
        <TableRow>
          <TableCell variant="head" align="center" sx={{ width: 100 }}>
            Largeur
          </TableCell>
          <TableCell align="center" sx={{ width: 100 }}>
            {accsInfo?.rimModel}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant="head" align="center">
            Longueur
          </TableCell>
          <TableCell align="center">{accsInfo?.sizeR}"</TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant="head" align="center">
            Couleur
          </TableCell>
          <TableCell align="center">
            {accsInfo?.studHoles}x{accsInfo?.pcd}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant="head" align="center">
            EAN
          </TableCell>
          <TableCell align="center"> {accsInfo?.width}J</TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant="head" align="center">
            Gramme
          </TableCell>
          <TableCell align="center">{accsInfo?.centerBore}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant="head" align="center">
            Inclus
          </TableCell>
          <TableCell align="center">50</TableCell>
        </TableRow>
      </Table>
    </Box>
  );
};

export default SingleAccsDetails;
