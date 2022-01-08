import "./style.css";
import { Grid, Paper } from "@mui/material";
import { useQuery } from "@apollo/client";
import { DASHBOARDQuery } from "../graphql/companyQueri";
import { TopBar } from "./TopBar";
import LinearIndeterminate from './Progress';

export function Dashboard() {
  const { loading, error, data } = useQuery(DASHBOARDQuery);
  if(loading) return  <LinearIndeterminate />
  return (
    <div>
      <TopBar/>
      <Grid container>
        <Grid item xs={2} md={4}></Grid>
        <Grid item xs={8} md={4}>
          <Paper elevation={3} className="paperStyle" sx={{backgroundColor:'#f5f3f4'}}>
          <Grid item container justifyContent='center'>
              <Grid item xs={2} md={4}></Grid>
              <Grid item xs={8} md={4} className="center">
                <h1 style={{textAlign:'center'}}>COMPANY</h1>
                <Paper elevation={10} className="marginTopPaper" sx={{backgroundColor:'#ccd5ae'}}>
                  <h3 className="textMargin">{`ceo:`}</h3>
                  {data?.company?.ceo}
                </Paper>
                <Paper elevation={10} className="marginTopPaper" sx={{backgroundColor:'#ccd5ae'}}>
                  <h3 className="textMargin">{`founder:`}</h3>
                  {data?.company?.founder}
                </Paper>
                <Paper elevation={10} className="marginTopPaper" sx={{backgroundColor:'#ccd5ae'}}>
                <h3 className="textMargin">{`employees:`}</h3>
                  {data?.company?.employees}
                </Paper>
                <Paper elevation={10} className="marginTopPaper" sx={{backgroundColor:'#ccd5ae'}}>
                <h3 className="textMargin">{`valuation:`}</h3>
                  {data?.company?.valuation}
                </Paper>
              </Grid>
              <Grid item xs={2} md={4}></Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={2} md={4}></Grid>
      </Grid>
    </div>
  );
}
