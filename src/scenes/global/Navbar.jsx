import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, Button, IconButton } from "@mui/material";
import {
  ShoppingBagOutlined,
  CastleRounded,
  GitHub 
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";
import { useAuth0 } from "@auth0/auth0-react";


function Navbar() {
  const { loginWithRedirect , logout , isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const openGitHub = () => {
    window.open('https://github.com/vinaylalam', '_blank');
  };
  const handleButtonClick = () => {
    window.open('https://thirdweb.com/sepolia/0x6128cc6E0CBc59be37a29Df1fBF85a4C9b1366e4', '_blank');
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[500]}
        >
          ARIES-NFT
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ color: 'black' }} onClick={openGitHub}>
          <GitHub />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black" }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          <IconButton sx={{ color: 'black' }} onClick={handleButtonClick}>
            <CastleRounded/>
          </IconButton>
          { isAuthenticated ?
          <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
         </Button> :<Button 
          onClick={() => loginWithRedirect()}      
         >Log In
         </Button>
          }
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;