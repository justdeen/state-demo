import './App.css'
import Counter from './counter'
import Dumbo from './Dumbo'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'
import ScoreKeeper2 from './ScoreKeeper2'

function App() {

  return (
    <>
      {/* <h1>state demo</h1> */}
      <ScoreKeeper2 numPlayers={5} target={5}/>
      {/* <EmojiClicker/> */}
      {/* <ScoreKeeper/> */}
      {/* <Dumbo/> */}
      {/* <Counter/> */}
    </>
  )
}

export default App
