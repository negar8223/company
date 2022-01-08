import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import { TopBar } from "./TopBar";
import { useQuery } from "@apollo/client";
import { CAPSULES } from "../graphql/CapsulesQuery";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import LinearIndeterminate from "./Progress";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  const navigate = useNavigate();
  const { loading, data } = useQuery(CAPSULES);
  if (loading) return <LinearIndeterminate />;
  const handleClickCapsule = (id) => {
    navigate("/capsule/" + id);
  };
  return (
    <>
      <TopBar />
      <Grid container>
        <Grid item xs={2} md={4}></Grid>
        <Grid item xs={8} md={4}>
          {data.capsules.map((capsule) => {
            return (
              <Card
                sx={{ minWidth: 275, backgroundColor: "#f5f3f4" }}
                className="capsulesStyle"
                key={capsule.id}
              >
                <Grid item container>
                  <Grid item md={6} xs={12} sx={{ textAlign: "center" }}>
                    <CardContent>
                      <CheckCircleTwoToneIcon />
                      <h3 className="capsuleTextStyle">{` Check Capsule`}</h3>

                      <Typography variant="h6" sx={{ marginTop: "20px" }}>
                        crew_capacity: {capsule.dragon.crew_capacity}
                        <br />
                      </Typography>
                      <Typography variant="h6" sx={{ marginTop: "20px" }}>
                        Status: {capsule.status}
                        <br />
                      </Typography>
                    </CardContent>
                    <CardActions></CardActions>
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    sx={{ paddingLeft: "15px", textAlign: "center" }}
                  >
                    <Typography
                      sx={{ mb: 1.5 }}
                      color="text.secondary"
                      sx={{ marginTop: "20px" }}
                    >
                      Active:
                      {capsule.dragon.active ? (
                        <CheckIcon style={{ color: "green" }} />
                      ) : (
                        <CloseIcon style={{ color: "red" }} />
                      )}
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5 }}
                      color="text.secondary"
                      sx={{ marginTop: "20px" }}
                    >
                      ID: {capsule.id}
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5 }}
                      color="text.secondary"
                      sx={{ marginTop: "20px" }}
                    >
                      Type: {capsule.type}
                    </Typography>
                    <IconButton
                      sx={{
                        backgroundColor: "#ccd5ae",
                        color: "black",
                        margin: "5px",
                        float: "right",
                      }}
                      id="button"
                      onClick={() => handleClickCapsule(capsule.id)}
                    >
                      <DoubleArrowIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Card>
            );
          })}
        </Grid>
        <Grid item xs={2} md={4}></Grid>
      </Grid>
    </>
  );
}
