import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const WhoAreWeContainer = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
      <Box>
        <Typography variant="h3">Qui Sommes-Nous</Typography>
      </Box>
      <Box>
        <p>
          Bienvenue sur WHEELART.FR
          <br />
          <br />
          L’équipe WHEEL ART a la volonté de répondre à une demande de plus en
          plus grandissante concernant le marché de jantes en aluminiums, dans
          la région d’Ile de France.
          <br />
          <br />
          Implantée à{" "}
          <a
            target="_blank"
            href="https://www.google.fr/maps/place/WHEEL+ART/@48.6443899,2.3828517,15z/data=!4m5!3m4!1s0x47e5dfd96d8cbab9:0x9858f8dcde05b066!8m2!3d48.6474422!4d2.379192"
          >
            Grigny
          </a>{" "}
          (Essonne) depuis 2020 et animée par la passion de l'automobile, notre
          équipe met quotidiennement son expertise technique à votre service.
          <br />
          <br />
          Nous souhaitons offrir une expérience d’achat exceptionnelle, c’est
          pourquoi nous nous engageons à offrir un suivi personnalisé, rapide et
          efficace pour répondre à tous vos besoins.
          <br />
          <br />
          Il vous est également offert une gamme complète de pneumatiques de
          qualité pour répondre aux attentes des différents modes de conduite de
          nos clients. Que ce soit pour des performances sur route sèche,
          humide, ou gelée.
          <br />
          <br />
          Cette culture automobile étant associée à notre grande expérience dans
          la vente, nous permet de vous proposer des produits et services au
          meilleur rapport qualité/prix.
          <br />
          <br />
          Vous y trouverez divers tailles, allant de 17 à 22 pouces, ainsi que
          de nombreux coloris pour vos{" "}
          <a href="" onClick={() => navigate("/rims")}>
            jantes
          </a>
          .
          <br />
          <br />
          Si vous avez une demande bien précise des produits que souhaitez,
          n'hésitez pas à nous joindre directement par téléphone ou bien via la
          rubrique{" "}
          <a href="" onClick={() => navigate("/contact")}>
            "contact"
          </a>
          .
          <br />
          <br />
          Différents services s'offrent à vous lors de votre venue au sein du
          showroom, notamment celui du montage. En effet, vous avez la
          possibilité d’acheter nos produits et d’effectuer par la suite le
          montage et l’équilibrage au même endroit.
          <br />
          <br />
          Souhaitant s'adapter à tout budget, nous vous proposons des facilités
          de paiement, disponible en 3x ou 4x selon vos besoins.
          <br />
          <br />
          L'équipe Wheel Art, n'attend que vous !
        </p>
      </Box>
    </Box>
  );
};

export default WhoAreWeContainer;
