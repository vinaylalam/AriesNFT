import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Subscribe = () => {
  const [email, setEmail] = useState("");
const newTab= URL => {
  window.open(URL)
} 

  return (
    <Box width="80%" margin="80px auto" textAlign="center">
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize="large" />
      </IconButton>
      <Typography variant="h3">Join To Our Discord NFT Marketplace</Typography>
      <Typography>
      <button
       onClick={() => newTab('https://discord.gg/TYJQCH7u')}
       style={{
       backgroundColor: 'black',
       color: 'white',
       border: 'none',
       borderRadius: '4px',
       padding: '8px 16px',
       cursor: 'pointer',
       }}
      >
      Join
      </button>

      </Typography>
      <Typography>      
        you can join to our discord channel by clicking on this above join button,to add your own NFT for sale
      </Typography>     
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        backgroundColor="#F2F2F2"
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter your metaMask WalletAddress"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />               
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Typography sx={{ p: "10px", ":hover": { cursor: "pointer" } }}>
        <button>Enter</button>  
        </Typography>
      </Box>
    </Box>
  );
};

export default Subscribe;