import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
  TextField,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { AppDispatch, RootState, useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import {
  logOutEffect,
  updateUserInfoEffect,
} from "../../store/effects/auth/auth.effects";

const UserPage = () => {
  const [editMode, setEditMode] = useState(false);
  const { user } = useAppSelector((state: RootState) => state.auth);

  const dispatch: AppDispatch = useDispatch();

  const [firstName, setFirstName] = useState("user.firstName");
  const [lastName, setLastName] = useState("user.lastName");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("user.email");
  const [basketItemCounts, setBasketItemCounts] = useState("5");

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleSaveProfile = () => {
    setEditMode(false);
    // Handle saving profile data here
    // console.log()
    const updatedUserInfo = {
      firstName,
      lastName,
      phoneNumber,
      email,
      // password,
    };

    dispatch(updateUserInfoEffect(updatedUserInfo));
  };

  const handleLogout = () => {
    dispatch(logOutEffect());
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom style={{ marginBottom: "1rem" }}>
        Your Account
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Avatar sx={{ width: 100, height: 100, margin: "0 auto" }} />
              <Typography
                variant="h6"
                style={{ textAlign: "center", marginTop: "1rem" }}
              >
                {`${user?.firstName} ${user?.lastName}`}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ textAlign: "center", marginBottom: "1rem" }}
              >
                {user?.email}
              </Typography>
              {!editMode && (
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleEditProfile}
                  startIcon={<EditIcon />}
                >
                  Edit Profile
                </Button>
              )}
              <Button
                variant="contained"
                fullWidth
                onClick={handleLogout}
                style={{ marginTop: "0.5rem" }}
              >
                Logout
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Account Information
              </Typography>
              {editMode ? (
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      label="First Name"
                      variant="outlined"
                      fullWidth
                      value={user?.firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      value={user?.lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Phone Number"
                      variant="outlined"
                      fullWidth
                      value={user?.phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      value={user?.email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button variant="contained" onClick={handleSaveProfile}>
                      Save
                    </Button>
                  </Grid>
                </Grid>
              ) : (
                <Box>
                  <Typography
                    variant="body1"
                    style={{
                      marginBottom: "0.5rem",
                      borderBottom: "1px solid #ccc",
                      padding: "8px",
                    }}
                  >
                    <strong>First Name:</strong> {user?.firstName}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      marginBottom: "0.5rem",
                      borderBottom: "1px solid #ccc",
                      padding: "8px",
                    }}
                  >
                    <strong>Last Name:</strong> {user?.lastName}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      marginBottom: "0.5rem",
                      borderBottom: "1px solid #ccc",
                      padding: "8px",
                    }}
                  >
                    <strong>Phone Number:</strong> {user?.phoneNumber}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      marginBottom: "0.5rem",
                      borderBottom: "1px solid #ccc",
                      padding: "8px",
                    }}
                  >
                    <strong>Email:</strong> {user?.email}
                  </Typography>
                  {/* <Typography
                    variant="body1"
                    style={{
                      marginBottom: "0.5rem",
                      borderBottom: "1px solid #ccc",
                      padding: "8px",
                    }}
                  >
                    <strong>Password:</strong> ********
                  </Typography> */}
                  <Typography
                    variant="body1"
                    style={{
                      marginBottom: "0.5rem",
                      borderBottom: "1px solid #ccc",
                      padding: "8px",
                    }}
                  >
                    <strong>Order Counts:</strong> {user?.orders?.length}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      marginBottom: "0.5rem",
                      borderBottom: "1px solid #ccc",
                      padding: "8px",
                    }}
                  >
                    <strong>Basket Item Counts:</strong> {basketItemCounts}
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserPage;
