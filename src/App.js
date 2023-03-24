/*
import Spin from './components/Spin'

const App = () => <Spin />

export default App
*/

import WheelComponent from 'react-wheel-of-prizes'
import Spin from './components/Spin'

import './App.css'

function App() {
  const segments = ['YES', 'NO', 'YES', 'NO', 'YES', 'NO', 'YES', 'NO']
  const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    'pink',
    'black',
    'grey',
  ]
  const onFinished = winner => {
    console.log(winner)
  }
  return (
    <div className="app">
      <div>
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={winner => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={190}
          upDuration={500}
          downDuration={600}
          fontFamily="Arial"
        />
      </div>
      <Spin />
    </div>
  )
}
export default App
