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
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const Profile = () => {
  const [isOpen, setISOpen] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const list = (
    <Box
      role="presentation"
      onClick={() => setISOpen(false)}
      onKeyDown={() => setISOpen(false)}
      backgroundColor={colors.primary[400]}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton onClick={() => setISOpen(true)}>
        <PersonOutlinedIcon />
      </IconButton>

      <Drawer anchor={"left"} open={isOpen} onClose={() => setISOpen(false)}>
        {list}
      </Drawer>
    </>
  );
};

export default Profile;
