import { Box, Table, TableCell, TableRow, Typography } from "@mui/material";
import CreateAccordion from "../shere/accordion/CreateAccordion";

const SingleRimDetails = (rimInfo: any) => {
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
            Model
          </TableCell>
          <TableCell align="center" sx={{ width: 100 }}>
            {rimInfo?.rimModel}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant="head" align="center">
            Size
          </TableCell>
          <TableCell align="center">{rimInfo?.sizeR}"</TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant="head" align="center">
            Center distance
          </TableCell>
          <TableCell align="center">
            {rimInfo?.studHoles}x{rimInfo?.pcd}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant="head" align="center">
            Width
          </TableCell>
          <TableCell align="center"> {rimInfo?.width}J</TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant="head" align="center">
            Bore
          </TableCell>
          <TableCell align="center">{rimInfo?.centerBore}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell variant="head" align="center">
            ET offset
          </TableCell>
          <TableCell align="center">50</TableCell>
        </TableRow>
      </Table>
      <CreateAccordion>
        <Table>
          <TableRow>
            <TableCell variant="head" align="center">
              Color
            </TableCell>
            <TableCell align="center">{rimInfo?.color}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head" align="center">
              EAN
            </TableCell>
            <TableCell align="center">9830727110529</TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head" align="center">
              GRAM(4)
            </TableCell>
            <TableCell align="center">{rimInfo?.gram}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head" align="center">
              The pack includes
            </TableCell>
            <TableCell align="center">
              4x RIMS {rimInfo?.rimModel} <br />
              4x LOGOS <br />
              4x VALVES TR413
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head" align="center">
              TPMs compatible
            </TableCell>
            <TableCell align="center">Yes</TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head" align="center">
              State
            </TableCell>
            <TableCell align="center">Nine</TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head" align="center">
              Look Style (Not OEM)
            </TableCell>
            <TableCell align="center">Palmerstone</TableCell>
          </TableRow>
        </Table>
      </CreateAccordion>
    </Box>
  );
};

export default SingleRimDetails;
