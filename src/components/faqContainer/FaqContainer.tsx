import { Box, Button, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FaqContainer = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
      <Box>
        <Typography variant="h3">Foire aux Questions</Typography>
      </Box>
      <Box>
        <Box>
          <h4>Où êtes-vous situés?</h4>
          <p>
            Notre atelier est situé en Ile-de-France dans l'Essonnes (91), plus
            précisément au{" "}
            <Link
              target="_blank"
              href="https://www.google.com/maps/place/WHEEL+ART+(Jantes+et+Pneus)/@48.7501207,2.3216116,11z/data=!4m6!3m5!1s0x47e5dfd96d8cbab9:0x9858f8dcde05b066!8m2!3d48.6479621!4d2.379003!16s%2Fg%2F11mgjgv7v4?entry=ttu"
            >
              10 Bis Rue Jean Jacques Rousseau à Grigny
            </Link>
            .
          </p>
        </Box>
        <Box>
          <h4>Quels sont vos horaires d'ouverture?</h4>
          <p>
            Le showroom vous ouvre ses portes à partir de 9h30 jusqu'à 13h, puis
            de 14h à 18h et cela du Lundi au Samedi.
          </p>
        </Box>
        <Box>
          <h4>Est-il possible d'effectuer un paiement en plusieurs fois?</h4>
          <p>
            Vous avez la possibilité de payer en 3 ou 4 fois, si vous le
            souhaitez. Cela peut se faire directement en ligne sur le site
            internet ou bien avec nous en magasin. Cependant des frais de
            dossier s'appliqueront.
          </p>
        </Box>
        <Box>
          <h4>Tous les moyens de paiement sont-ils acceptés?</h4>
          <p>
            Au sein de notre atelier, seulement la carte bancaire et l'espèce
            sont acceptés.
          </p>
        </Box>
        <Box>
          <h4>
            La prise de rendez-vous est-elle obligatoire pour venir à l'atelier?
          </h4>
          <p>Nous vous laissons la liberté de venir sans rendez-vous.</p>
        </Box>
        <Box>
          <h4>Tous les achats sont-ils couverts d'une garantie?</h4>
          <p>
            Vous êtes couvert d'une garantie pour chaque achat de jantes
            effectué chez nous. Vous n'êtes en revanche pas couvert sur les
            pneus.
          </p>
        </Box>
        <Box>
          <h4>Quel est le délais de livraison de ma commande?</h4>
          <p>
            Si vous avez effectué une commande en semaine avant 16h, vous pouvez
            être certain qu'elle sera expédiée dans la journée et vous la
            recevrez dès le lendemain.
            <br />
            <br />
            Si vous effectuez une commande le week-end ou en fin de semaine
            (vendredi), la réception se fera 3 à 4 jours plus tard.
            <br />
            <br />
            Un numéro de suivi sera disponible directement sur la commande
            effectuée.
          </p>
        </Box>
        <Box>
          <h4>L'achat de jante peut-elle se faire à l'unité?</h4>
          <p>
            La vente à l'unité ne sera pas disponible chez Wheel Art. Elle se
            réalisera obligatoirement par 4. Vous avez cependant la possibilité
            d'acheter les pneus par 2 ou par 4.
          </p>
        </Box>
        <Box>
          <h4>Vendez-vous des pneus indépendamment des jantes ? </h4>
          <p>
            Chez Wheel Art nous vous laissons libre choix pour l'achat de
            produit. L'achat de pneus (minimum par 2) uniquement est totalement
            possible.
          </p>
        </Box>
        <Box>
          <h4>Faites-vous de la vente de jantes/pneus d'occasion ?</h4>
          <p>
            Tout est neuf ! En matière de qualité nous sommes très exigeants et
            proposons donc des produits haut de gamme aux meilleurs prix.
          </p>
        </Box>
        <Box>
          <h4>
            Est-il possible de commander des produits qui ne sont plus en stock?
          </h4>
          <p>
            Nous avons la possibilité de commander des produits non présents
            dans notre stock. Nous pouvons soit le faire à distance, par
            téléphone ou bien directement en physique, au showroom.
          </p>
        </Box>
        <Box>
          <h4>Faites-vous de la reprise de jantes?</h4>
          <p>
            Nous ne faisons aucune reprise et aucun échange de jantes, même en
            bon état.
          </p>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4>
          Vous n'avez pas trouvé la réponse à votre question? Besoin d'aide?
        </h4>
        <Button
          onClick={() => navigate("/contact")}
          sx={{
            borderRadius: "20px",
            background: "#009B23",
            width: "200px",
            color: "white",

            "&:hover": {
              background: "#03C600",
            },
          }}
        >
          Contactez nous
        </Button>
      </Box>
    </Box>
  );
};

export default FaqContainer;
