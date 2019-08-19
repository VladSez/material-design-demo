import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import "../../index.css";

export function UserSummary() {
  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h6" color="textSecondary">
          Summary
        </Typography>
        <Typography>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit.
        </Typography>
      </CardContent>
      <Divider />
      <CardActions className="editButtonContainer">
        <Typography className="editButton">Edit</Typography>
      </CardActions>
    </Card>
  );
}
