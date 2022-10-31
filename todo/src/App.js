
import './App.css';
import Header from './Component/layout/header';
import Sidebar from './Component/layout/sidebar';
import Card from './Component/Card/Cards';
import CreateTask from './Component/Task/CreateTask';


function App() {
  return (
    <>
     <Header/>
     <Sidebar/>
     {/* <Card/> */}

     <CreateTask/>
    
    </>
  );
}

export default App;
