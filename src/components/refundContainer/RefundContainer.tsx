import { Box, Typography } from "@mui/material";

const RefundContainer = () => {
  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
      <Box>
        <Typography
          variant="h3"
          sx={{ "@media(max-width: 500px)": { fontSize: "38px" } }}
        >
          Politique de remboursement
        </Typography>
      </Box>
      <Box>
        <p>
          Les retours acceptés par le marchand visent uniquement les articles
          défectueux.
        </p>
        <p>
          Selon l'Article L221.21 du code français de la consommation, vous
          disposez d'un délai de quatorze (14) jours à compter de la réception
          de votre commande pour vous rétracter et nous retourner l’article.
        </p>
        <p>
          Nous n’acceptons pas les retours ou les échanges à moins que l’article
          que vous avez acheté soit défectueux. Si vous recevez un article
          défectueux, veuillez communiquer avec nous au numéro de téléphone ou à
          l’adresse courriel ci-après et fournir les détails du produit et du
          défaut. Nous vous indiquerons alors comment retourner le produit.
        </p>
        <p>
          Aucun droit de rétraction n'est applicable sur les commandes réalisées
          en montage personnalisé ou changement de commande suite à une
          indisponibilitée, aucune annulation ni aucune modification n'est
          possible lorsque la commande a le statut en cours de préparation. Pour
          tous les changements à cette étape il faut appeler au magasin.
        </p>
        <p>
          Aucun droit de rétractation ni aucune annulation n'est applicable sur
          un pack jante + pneus qui implique un montage spécifique aux véhicules
          clients.
        </p>
        <p>Aucun retour n'est accordé pour des accessoires.</p>
        <Box>
          <p>
            <b>
              <i>Les clients peuvent retourner des articles non utilisés</i>
            </b>
          </p>
          <p>
            <b>Return of unused items</b>
          </p>
          <p>
            We accept returns of unused items. You may return unused items in
            their original packaging within 14 days of your purchase, with a
            receipt or proof of purchase. If 14 days have passed since your
            purchase, we cannot offer you a refund or exchange.
          </p>
          <p>
            To track the status of your return, please contact us at the
            telephone number or email address below.
          </p>
        </Box>

        <Box>
          <p>
            <b>Échanges</b>
          </p>
          <p>
            Nous échangeons uniquement les marchandises qui sont défectueuses ou
            endommagées. Lorsque vous considérez qu’un produit est défectueux,
            veuillez communiquer avec nous, dans les 14 jours suivant votre
            achat, au numéro de téléphone ou à l’adresse courriel ci-après et
            fournir les détails du produit et du défaut. Nous vous indiquerons
            alors comment retourner le produit.
          </p>
          <p>
            <b>Exceptions</b>
          </p>
          <p>
            Certains articles ne sont ni remboursables ni échangeables. Ces
            articles sont désignés sur notre site Web comme étant non
            remboursables.
          </p>
          <p>
            <i>Aucun retour n'est accordé pour des accessoires.</i>
          </p>
          <p>
            <b>Expédition</b>
          </p>
          <p>
            Vous devrez assumer les frais d’expédition liés au retour de votre
            article. Nous ne sommes pas responsables des pertes ou des dommages
            survenus pendant le transport. Vous devez également, pour tous les
            retours, prépayer les frais d’expédition et d’assurance (le cas
            échéant). Si votre retour est admissible à un remboursement, ce
            dernier ne comprendra pas les frais d’expédition et de manutention
            pouvant figurer sur le bordereau d’emballage ou la facture.
          </p>
          <p>
            Pour retourner ou échanger l’article que vous avez acheté, veuillez
            l’envoyer par la poste, avec une copie de votre reçu et tout autre
            renseignement concernant votre achat, à l’adresse figurant aux
            coordonnées ci-après
          </p>
          <p>
            <b>Processus</b>
          </p>
          <p>
            Lorsque nous recevrons votre article, nous l’examinerons et nous
            vous aviserons par courriel, dans un délai raisonnable, si vous avez
            droit à un remboursement ou à un échange.
          </p>
          <p>
            Si vous avez droit à un remboursement, nous vous rembourserons le
            prix d’achat et un crédit sera appliqué au mode de paiement initial.
            Les frais d’expédition et de manutention que vous avez déjà payés ne
            sont pas remboursables et les montants remboursés n’incluront pas le
            coût de l’expédition. Une période maximale de 15 jours ouvrables
            après la réception de notre courriel peut s’écouler avant que vous
            ne voyiez le remboursement sur votre relevé.
          </p>
          <p>
            Si vous avez droit à un échange, nous vous enverrons un nouvel
            article à l’adresse d’expédition initiale.
          </p>
        </Box>

        <Box>
          <p>
            <b>WHEEL ART contact details</b>
          </p>
          <p>
            <a href="tel:33-6-14-91-25-52">+33 6 14 91 25 52</a>
          </p>
          <p>
            <a href="mailto:wheelartpro@gmail.com">wheelartpro@gmail.com</a>
          </p>
          <p>
            <a href="https://www.google.com/maps/place/WHEEL+ART/@48.7501207,2.3216116,11z/data=!4m6!3m5!1s0x47e5dfd96d8cbab9:0x9858f8dcde05b066!8m2!3d48.6474422!4d2.379192!16s%2Fg%2F11mgjgv7v4">
              10 bis Rue Jean Jacques Rousseau, 91350 Grigny
            </a>
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default RefundContainer;
