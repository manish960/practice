import Regi from './component/Regis';
// import BasicGrid from "./Grid"
import { useSelector,useDispatch } from 'react-redux';
import {fetchRequest} from "./../src/redux/action/index"


function App() {

  const mystate=useSelector(state=>state)
  const dispath = useDispatch();
  


  console.log(mystate);
  
  return (
    
        <>
        {/* <BasicGrid /> */}
    
        {/* <Regi/> */}

        <button onClick={()=>dispath(fetchRequest())}>redux </button>
        </>

    
  );
}

export default App;
