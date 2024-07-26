import { useEffect } from 'react';
import './App.scss';
import { fetchProducts } from './api';
import { useDispatch } from 'react-redux';
import { actions } from './store/catalog';
import { Button } from '@mui/material';
import { ShoppingCartRounded } from '@mui/icons-material';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    fetchProducts().then((res) => {
      dispatch(actions.setProducts(res))
    })
  }, [])

  return (
    <div className="App">
      <Button variant="text" startIcon={<ShoppingCartRounded />}>
        Add item
      </Button>
    </div>
  );
}

export default App;
