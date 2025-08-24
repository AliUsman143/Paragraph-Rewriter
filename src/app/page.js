import React from 'react'
import WriterText from './components/paragraphWriter'
import Featured from './components/featured'
import AiTool from './components/AItool'

const page = () => {
  return (
    <div>
      <WriterText/> 
      <Featured/>
      <AiTool/>
    </div>
  )
}

export default page
