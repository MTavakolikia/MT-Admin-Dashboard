import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { languages } from "../i18n";

import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { LanguageContext } from "../theme";
import { useContext } from "react";

const MultiLanguage = () => {
  const [anchorElLang, setAnchorElLang] = useState(null);
  const { i18n } = useTranslation();

  const handleCloseLangMenu = (code) => {
    setAnchorElLang(null);
    i18n.changeLanguage(code);
  };
  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  const handleOpenLangMenu = (event) => {
    setAnchorElLang(event.currentTarget);
  };

  const changeLang = useContext(LanguageContext);

  useEffect(() => {
    document.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage]);

  return (
    <>
      <IconButton onClick={(e) => handleOpenLangMenu(e)}>
        <LanguageIcon />
      </IconButton>

      <Box sx={{ flexGrow: 0 }}>
        <Menu
          sx={{ mt: "35px" }}
          id="menu-appbar"
          anchorEl={anchorElLang}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElLang)}
          onClose={handleCloseLangMenu}
        >
          {languages.map((lang) => (
            <MenuItem
              key={lang.code}
              onClick={() => {
                handleCloseLangMenu(lang.code);
                changeLang.toggleLanguage(lang.code);
              }}
            >
              <Typography m={"auto"}>{lang.name}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
};

export default MultiLanguage;
