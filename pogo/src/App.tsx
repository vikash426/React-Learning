import { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import { fetchProducts } from './api';
import { useDispatch } from 'react-redux';
import {actions} from './store/catalog';

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    fetchProducts().then((res)=>{
      dispatch(actions.setProducts(res))
    })
  }, [])

  return (
    <div className="App">
    Hello React
    </div>
  );
}

export default App;
