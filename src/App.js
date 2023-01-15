
import './App.css';
import Navbar from './newsComponents/Navbar';
import Newses from './newsComponents/Newses';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from "react-router-dom";

function App() {
  let pageSize=6;
  return (
    <BrowserRouter>
   
    <>
     <Navbar/>
  <Routes>
  
    <Route path='/'element={<Newses key="general" pageSize={pageSize}category='general'/>}/>
    <Route path='/health'element={<Newses key="health"pageSize={pageSize} category='health'/>}/>
    <Route path='/buisness'element={<Newses key="buisness"pageSize={pageSize} category='buisness'/>}/>
    <Route path='/entertainment'element={<Newses key="entertainment"pageSize={pageSize}  category='entertainment'/>}/>
    <Route path='/science'element={<Newses key="science"pageSize={pageSize} category='science'/>}/>
    <Route path='/sports'element={<Newses key="sports"pageSize={pageSize} category='sports'/>}/>
    <Route path='/technology'element={<Newses key="technology"pageSize={pageSize} category='technology'/>}/>
     
     </Routes>
    </>
    </BrowserRouter>
 
  )
}

export default App;
