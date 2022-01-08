import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import { useQuery } from "@apollo/client";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { CAPSULE } from "../graphql/CapsuleQuery";
import { TopBar } from "./TopBar";
import { useParams } from "react-router-dom";
import LinearIndeterminate from './Progress';

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function CapsuleCard() {
  const { capsuleId } = useParams();
  const { loading, data } = useQuery(CAPSULE, { variables: { capsuleId } });
  if (loading) return <LinearIndeterminate />;
  return (
    <>
      <TopBar />
      <Grid container>
        <Grid item xs={2} md={4}></Grid>
        <Grid item xs={8} md={4}>
          <Card
            sx={{ minWidth: 275, backgroundColor: "#f5f3f4" }}
            className="capsulesStyle"
          >
            <Grid item container>
              <Grid item md={6} xs={12} sx={{ textAlign: "center" }}>
                <CardContent>
                  <CheckCircleTwoToneIcon />
                  <h3 className="capsuleTextStyle">{` Check Capsule`}</h3>

                  <Typography variant="h6" sx={{ marginTop: "20px" }}>
                    crew_capacity: {data.capsule.dragon.crew_capacity}
                    <br />
                  </Typography>
                  <Typography variant="h6" sx={{ marginTop: "20px" }}>
                    Status: {data.capsule.status}
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
                  Active:{" "}
                  {data.capsule.dragon.active ? (
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
                  ID: {data.capsule.dragon.id}
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                  sx={{ marginTop: "20px" }}
                >
                  Type: {data.capsule.type}
                </Typography>
                <CardActions></CardActions>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={2} md={4}></Grid>
      </Grid>
    </>
  );
}
