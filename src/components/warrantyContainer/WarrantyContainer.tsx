import { Box, Typography } from "@mui/material";

const WarrantyContainer = () => {
  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
      <Box>
        <Typography variant="h3">La Garantie</Typography>
      </Box>
      <Box>
        <p>
          Chez Wheel Art, notre équipe propose un service complet et adapté à
          nos produits. C'est pourquoi, une <b>garantie</b> de <b>6 mois</b> est
          appliquée pour <b>chaque achat de jantes</b> que vous effectuerez.
        </p>
        <p>
          <b>
            Avant toute chose, veuillez nous contacter avant d'entamer
            quelconque démarche concernant la garantie, réparation ou rénovation
            avec notre société partenaire. Une réglementation sera à respecter à
            chaque utilisation de la garantie.
          </b>
        </p>
        <Box>
          <h3>
            <b>Réglementation</b>
          </h3>
          <ul>
            <li style={{ margin: "10px 0" }}>
              L'application de garantie lors d'une réparation ou rénovation ne
              sera pas valable si le délai de celle-ci est dépassé.
            </li>
            <li style={{ margin: "10px 0" }}>
              L'application de garantie ne s'effectuera que sous présentation
              d'un document valide (facture, preuve d'achat) lors de la
              rénovation et/ou la réparation.
            </li>
            <li style={{ margin: "10px 0" }}>
              L'application de garantie ne sera pas effectuée si la défaillance
              provient d'une pièce annexe entraînant ensuite l'endommagement de
              la jante.
            </li>
            <li style={{ margin: "10px 0" }}>
              L'application de garantie ne s'effectuera pas lors d'une
              réparation ou rénovation si les jantes n'ont pas été achetées au
              sein de notre atelier.
            </li>
            <li style={{ margin: "10px 0" }}>
              Le remplacement de jante ne se fera que si la réparation et/ou la
              rénovation sera dite impossible après un diagnostic de notre
              équipe. Cependant pour cette spécificité, la garantie ne sera
              applicable qu'à moitié, le client devra donc payer la moitié du
              prix de la nouvelle jante.
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default WarrantyContainer;
