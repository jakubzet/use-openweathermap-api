import React from 'react'

import { useMyHook } from '@jakubzet/use-openweathermap-api'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
