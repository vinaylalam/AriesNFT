import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            ARIES-NFT
          </Typography>
          <div>
            The Aries NFT marketplace in India is an innovative online platform that revolutionizes 
            the way artists and creators monetize their digital creations. It provides a secure and 
            decentralized marketplace where individuals can buy, sell, and trade NFTs, which are unique 
            digital assets authenticated by blockchain technology. This marketplace opens up new opportunities 
            for artists to showcase and sell their digital artwork, music, videos, and other digital collectibles 
            to a global audience. It serves as a hub for NFT enthusiasts, collectors, and investors, fostering a 
            vibrant ecosystem for digital creativity and ownership in India.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">NFT's</Typography>
          <Typography mb="30px">About Marketplace</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your NFT</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            soet hnbg university srinagar 246174
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: vinayramcharan150@gmail.com
          </Typography>
          <Typography mb="30px">8179729822</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;