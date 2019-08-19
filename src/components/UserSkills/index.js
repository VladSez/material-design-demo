import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import "../../index.css";

export function UserSkills({
  title,
  skills = [{ language: "english" }, { language: "german" }]
}) {
  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h6" color="textSecondary">
          {title ? title : "Title"}
        </Typography>
        {skills.map(skill => (
          <Chip
            style={{ marginRight: "10px", marginTop: "10px" }}
            label={skill.language}
          />
        ))}
      </CardContent>
      <Divider />
      <CardActions className="editButtonContainer">
        <Typography className="editButton">Edit</Typography>
      </CardActions>
    </Card>
  );
}
