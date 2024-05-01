import { Button } from "@mui/material";
import './MuiButton.css'
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";

export const MuiButton = () => {
  return (
      <Button
        variant="contained"
        type="submit"
        padding="0"
        startIcon={<LocationSearchingIcon fontSize="large" />}
        size="large"
      ></Button>
  );
};
