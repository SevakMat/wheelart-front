import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const ContactUsContainer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
      <Box>
        <Typography variant="h3">Nous joindre</Typography>
      </Box>
      <Box>
        <p>
          Pour toute question ou requête concernant un produit ou service, nous
          restons à votre disposition
        </p>
        <Box>
          <p>Par téléphone portable: 06 14 91 25 52 </p>
          <p>Par téléphone fixe: 01 77 05 34 13</p>
        </Box>
      </Box>
      <Box>
        <p>Et également via le formulaire de contact ci-dessous</p>
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          required
          type="email"
        />
        <TextField
          fullWidth
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          margin="normal"
          required
          type="tel"
        />
        <TextField
          fullWidth
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          margin="normal"
          required
          multiline
          rows={4}
        />

        <Button
          variant="contained"
          type="submit"
          size="large"
          disableElevation
          sx={{ mt: 2, background: "black", "&:hover": { background: "grey" } }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactUsContainer;
