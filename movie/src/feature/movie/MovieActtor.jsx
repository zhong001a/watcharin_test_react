import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Typography from "@mui/material/Typography";
import { Slide } from "@mui/material";

const MovieActtor = (isOpen, setIsOpen, actor) => {
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
              maxWidth: "500px",
              minWidth: "500px",
              width: "100%",
              height: "100%",
              maxHeight: "120px",
              position: "absolute",
              left: "40%",
              top: "10%",
              transform: "translate(-50%, -50%)",
              bgcolor: "#fff",
              borderRadius: "8px",
              boxShadow: 24,
              animation: "appear 350ms ease-in 1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderTop: "30px solid #d00217",
            }}
            onClick={handleClose}
          >
            <Box>
              <Typography variant="h5" sx={{}}>
                คุณยังไม่ได้เลือก :

              </Typography>
            </Box>
          </Box>
        </Slide>
      </Modal>
    </Box>
  );
};

export default MovieActtor;

