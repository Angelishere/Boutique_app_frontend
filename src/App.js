import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeBout from './components/HomeBout';
import SearchBout from './components/SearchBout';
import SignUp from './components/SignUp';
import CatalogBout from './components/CatalogBout';

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomeBout/>}/>
        <Route path="/search" element={<SearchBout/>}/>
        <Route path="/sign" element={<SignUp/>}/>
        <Route path="/view" element={<CatalogBout/>}/>
       </Routes>
      </BrowserRouter>
  );
}

export default App;
