import { tokens } from "../theme";
import { useTranslation } from "react-i18next";

import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { t } = useTranslation();
  return (
    <Box
      display="flex"
      backgroundColor={colors.primary[400]}
      borderRadius="3px"
    >
      <InputBase sx={{ ml: 2, mr: 2, flex: 1 }} placeholder={t("search")} />
      <IconButton type="button" sx={{ p: 1 }}>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </IconButton>
    </Box>
  );
};

export default SearchBar;
