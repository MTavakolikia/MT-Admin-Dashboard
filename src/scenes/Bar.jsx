import { Box } from "@mui/material";
import Header from "../components/Headers";
import BarChart from "../components/BarChart";
import { useTranslation } from "react-i18next";

const Bar = () => {
  const { t } = useTranslation();
  return (
    <Box m="20px">
      <Header title={t("bar_chart")} subtitle={t("simple_bar_chart")} />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
