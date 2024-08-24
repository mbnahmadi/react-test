import { useState } from 'react'
import Header from './Header.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import Usergreeeting from './Usergreeting.jsx'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Usergreeeting isLogin={false} username="mobin"/>
      <Header/>
      <Card />
      <Button />
      <Student name="mobin" age={24} isStudent={true}/>
      <Student name="hosna" age={13} isStudent={true}/>
      <Student name="hanna" age={7} isStudent={true}/>
      <Student name="nila" age={1} isStudent={false}/>
      <Student />
      

    </>
  )
}

export default App
