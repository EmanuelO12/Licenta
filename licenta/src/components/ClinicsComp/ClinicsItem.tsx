import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

export interface ClinicsItemInterface {
  nume: string;
  adresa: string;
  navigateToAppointment: () => void;
}

export const ClinicsItem = ({
  nume,
  adresa,
  navigateToAppointment,
}: ClinicsItemInterface) => {
  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <Avatar src="https://userstock.io/data/wp-content/uploads/2020/06/women-s-white-and-black-button-up-collared-shirt-774909-2-1024x1024.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={nume}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              ></Typography>
              {adresa}
            </React.Fragment>
          }
        />
        <Button
          onClick={navigateToAppointment}
          style={{ marginTop: "13px" }}
          size="small"
          color="info"
          variant="outlined"
        >
          View
        </Button>
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
};
