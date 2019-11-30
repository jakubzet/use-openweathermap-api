# @jakubzet/use-openweathermap-api

> React hook for fetching and displaying weather data using OpenWeatherMap API

[![NPM](https://img.shields.io/npm/v/@jakubzet/use-openweathermap-api.svg)](https://www.npmjs.com/package/@jakubzet/use-openweathermap-api) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @jakubzet/use-openweathermap-api
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from '@jakubzet/use-openweathermap-api'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [jakubzet](https://github.com/jakubzet)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
