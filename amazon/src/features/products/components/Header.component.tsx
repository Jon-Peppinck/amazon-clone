import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppBar, Badge, Box, Button, Toolbar } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux/hooks';
import { logout, selectedUser } from '../../auth/authSlice';

const HeaderComponent = () => {
  const { user } = useAppSelector(selectedUser);
  const { cart } = useAppSelector((state) => state.product);

  const [cartCount, setCartCount] = useState(0);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(() => totalQty);
  }, [cart]);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{ backgroundColor: '#131921', color: 'white', padding: '4px' }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <img
            onClick={() => navigate('/')}
            style={{
              width: '113px',
              height: '50px',
              paddingTop: '10px',
              cursor: 'pointer',
            }}
            src='/amazon-logo.png'
            alt='amazon logo'
          />
          <div style={{ display: 'flex' }}>
            <div>
              <div>Hello, {user?.name}</div>
              <Button
                onClick={logoutHandler}
                sx={{ padding: 0, marginRight: '16px' }}
                color='inherit'
              >
                Sign out
              </Button>
            </div>
            <Button onClick={() => navigate('/cart')}>
              <Badge badgeContent={cartCount} color='primary'>
                <ShoppingCartOutlinedIcon fontSize='large' />
              </Badge>
              <span>Cart</span>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderComponent;
