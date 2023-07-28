import { useState } from "react";
import { tokens } from "../theme";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const NotificationsBar = () => {
  const [isOpen, setISOpen] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const notficationsList = [
    "You have loged in at today.",
    "Your profile name has been changed!",
    "Please autorize your phone number.",
  ];
  const notificationList = (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      backgroundColor={colors.primary[400]}
      onClick={() => setISOpen(false)}
      onKeyDown={() => setISOpen(false)}
    >
      <List>
        {notficationsList.map((text, index) => (
          <>
            <ListItem key={index + Math.random(5)} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NotificationsOutlinedIcon color="info" />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton onClick={() => setISOpen(true)}>
        <NotificationsOutlinedIcon />
      </IconButton>

      <Drawer anchor={"bottom"} open={isOpen} onClose={() => setISOpen(false)}>
        {notificationList}
      </Drawer>
    </>
  );
};

export default NotificationsBar;
