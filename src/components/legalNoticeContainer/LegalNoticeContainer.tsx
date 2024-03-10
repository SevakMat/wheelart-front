import { Box, Typography } from "@mui/material";

const LegalNoticeContainer = () => {
  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
      <Box>
        <Typography variant="h3">Mentions Légales</Typography>
      </Box>
      <Box>
        <p>
          SASU WHEEL ART, négoce, importation et commercialisation de pièces
          automobiles neuves, jantes alu, et pneumatiques en ligne depuis 2018
        </p>
        <p>
          <b>Adresse</b>
        </p>
        <p>
          WHEEL ART
          <br />
          10 bis Rue Jean Jacques Rousseau, <br />
          91350 Grigny
          <br />
          FRANCE
        </p>
        <p>
          Tél: 07 88 11 39 65 ou 01 77 05 34 13 <br /> Du lundi au samedi, de
          9h30-13h00 14h00-18h00.
        </p>
        <p>
          Traitement commandes: Du lundi au samedi, de 9h30-13h00 14h00-18h00.
        </p>
        <p>
          <b>WHEEL ART</b>, société par actions simplifiée, au capital social de
          5 000,00 €, dont le siège social est situé au 10 b rue jean jacques
          rousseau, 91350 GRIGNY, immatriculée au Registre du Commerce et des
          Sociétés de Evry sous le numéro 895 307 411 représentée par M Vardan
          ABRAHAMYAN agissant et ayant les pouvoirs nécessaires en tant que
          président.
        </p>
        <p>
          RCS: Evry B 895 307 411 <br />
          <br />
          Siret : 895 307 411 00010
          <br />
          <br />
          (4520A)
          <br />
          <br />
          Numéro de TVA : FR05895307411
        </p>
      </Box>
    </Box>
  );
};

export default LegalNoticeContainer;
