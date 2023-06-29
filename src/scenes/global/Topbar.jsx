import NotificationsBar from "../../components/NotificationsBar";
import MultiLanguage from "../../components/MultiLanguage";
import ColorMode from "../../components/ColorMode";

import { Box, IconButton } from "@mui/material";

const Topbar = () => {
  return (
    <Box display="flex" justifyContent="end" p={2}>
      <Box display="flex">
        <IconButton>
          <ColorMode />
        </IconButton>
        <IconButton>
          <MultiLanguage />
        </IconButton>
        <IconButton>
          <NotificationsBar />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
