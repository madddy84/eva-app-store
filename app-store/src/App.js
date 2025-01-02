import './App.css';
import LandingPage from './pages/LandingPage';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';


let api = axios.create({
  baseURL: 'https://example.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

api.interceptors.response.use((response) => response, (error) => {
  // whatever you want to do with the error
  console.log(error);
});
console.log("Test 1", process.env.REACT_APP_TEST_VAR)
function App() {
  return (
    
    <BrowserRouter>
      {}
      <LandingPage></LandingPage>
    </BrowserRouter>
  );
}

export default App;
