import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./actions/actionGames";



function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadGames())
  })
  return (
    <div className="App">
      sdfsdfasd
    </div>
  );
}

export default App;
