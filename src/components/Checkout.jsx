import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const Checkout = () => {
  return (
    <div>
      <Link to="/cart">
        <Button variant="contained" color="secondary">
          Check Out
        </Button>
      </Link>
    </div>
  );
};

export default Checkout;