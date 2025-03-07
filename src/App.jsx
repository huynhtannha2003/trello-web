import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import HomeIcon from '@mui/icons-material/Home'
import {  pink } from '@mui/material/colors'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>TanNha</div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <AccessAlarmIcon/>
      <HomeIcon sx = {{ color : pink[500] }}/>
    </>
  )
}

export default App
