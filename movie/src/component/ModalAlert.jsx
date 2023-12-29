import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Typography from "@mui/material/Typography";
import { Slide } from "@mui/material";

const ModalAlert = ({ isOpen, setIsOpen, actors }) => {
  const handleClose = () => setIsOpen(false);
  return (
    <Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 300,
          },
        }}
      >
       
        <Slide in={isOpen}>
  
          <Box
            sx={{

              position: "absolute",
              left: "40%",
              top: "30%",
              transform: "translate(-50%, -50%)",
              bgcolor: "#fff",
              borderRadius: "8px",
              boxShadow: 24,
              animation: "appear 350ms ease-in 1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

            }}
            onClick={handleClose}
          >
            <Box sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
            }}>
              {actors?.map((actor,index)=>(
                <Typography key={index} sx={{}}>
                  {actor}
                </Typography>

              ))}
            </Box>
          </Box>
        </Slide>
      </Modal>
    </Box>
  );
};

export default ModalAlert;
