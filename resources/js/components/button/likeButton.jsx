import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";



const LikeButton = () => {
   
   return (
      <IconButton aria-label="delete" >
         <FavoriteIcon color="red" />
      </IconButton>
   )
}
export default LikeButton;

