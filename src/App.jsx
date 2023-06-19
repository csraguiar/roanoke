import { useState } from 'react'

import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ul className="md:grid md:grid-cols-3 md:space-x-8 list-none">
      <li>
        <Card 
          heading={"Instant Spell"}
          description={"Unleash a fiery storm dealing 4 damage to all enemy creatures on the field."}
          buttonText={"Use"} 
          footnote={"Mana Cost: 5 (4 Red, 1 Any)"}
        />
      </li>
      <li>
        <Card 
          heading={"Spectral Shield"}
          description={"Grants +2/+2 to a target creature and makes it immune to magic spells."}
          buttonText={"Use"} 
          footnote={"Mana Cost: 3 (3 Any)"}
          featured="true"
        />
      </li>
      <li>
        <Card 
          heading={"Rock Golem"}
          description={"Rock Golem has +2/+2 for each mountain card you control."}
          buttonText={"Use"} 
          footnote={"Mana Cost: 4 (2 Red, 2 Any), Power/Toughness: 2/2"}
        />
      </li>
    </ul>
    </>
  )
}

export default App
