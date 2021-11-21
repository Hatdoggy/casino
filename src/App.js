import Chips,{Intro,End,Pop,MobGreet} from './Components.js'
import Main,{MobMain} from './components/Main.js'
import {useState} from 'react'
import { useMediaQuery } from 'react-responsive';

function App() {

  const [end,showEnd] = useState(false);
  const [txt,updTxt] = useState({
    head:"",
    mes:0
  })
  const {data} = window.data; 

  const [stats,updStats] = useState({
    spins:3,
    cash:data.cash,
    pop:false,
    main:false,
    start:true,
    mobMain:false
  })
  const small = useMediaQuery({
    query: '(max-width : 1000px)'
  })   

  return (
    <div className="App pos-rel h-100 flx">
      {stats.pop&&<Pop stats={stats} cash={stats.cash} hide={updStats} end={showEnd} txt={txt}/>}
      { 
        stats.start&&!small?
            <Main stats={stats} pop={updStats} end={showEnd} txt={txt} upd={updTxt}/>
          :
            stats.mobMain&&!end?
              <MobMain stats={stats} pop={updStats} end={showEnd} txt={txt} upd={updTxt}/>
              :
              <MobGreet end={end} upd={updStats} stats={stats}/>        
      } 
      </div>
  );
}

export default App;
