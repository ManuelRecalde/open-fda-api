import { useState } from 'react';
import {
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  IconButton,
  Typography,
  Tooltip,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  GetApp as GetAppIcon,
} from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Sobre mi">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32, color:'#0b113a', backgroundColor:'#eaeaea' }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Typography variant="inherit" sx={{fontWeight:'bold'}}>Manuel Recalde Garzon</Typography>
        </MenuItem>
        <MenuItem component="a" href="https://github.com/ManuelRecalde/open-fda-api" target="_blank">
          <ListItemIcon>
            <GitHubIcon fontSize="small" />
          </ListItemIcon>
          GitHub ↗
        </MenuItem>
        <MenuItem component="a" href="https://www.linkedin.com/in/manuel-recalde/" target="_blank">
          <ListItemIcon>
            <LinkedInIcon fontSize="small" />
          </ListItemIcon>
          LinkedIn ↗
        </MenuItem>
        <MenuItem component="a" href="/CV Manuel Recalde -  Desarrollador Fron End.pdf" download>
          <ListItemIcon>
            <GetAppIcon fontSize="small" />
          </ListItemIcon>
          Descargar CV
        </MenuItem>
        <Divider />
        <MenuItem>
          <Typography variant="inherit">Contacto:</Typography>
        </MenuItem>
        <MenuItem component="a" href="https://wa.me/+34613732284" target="_blank">
          <ListItemIcon>
            <WhatsAppIcon fontSize="small" />
          </ListItemIcon>
          WhatsApp
        </MenuItem>
        <MenuItem component="a" href="mailto:manuelrecaldegarzon@gmail.com" target="_blank">
          <ListItemIcon>
            <EmailOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Email
        </MenuItem>
      </Menu>
    </>
  );
}