import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { PropTypes } from "prop-types";
import i18n from "../i18n";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      mb="30px"
      className={i18n.lng === "en" ? "iran-sans-en" : "iran-sans-fa"}
    >
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};
Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
export default Header;
