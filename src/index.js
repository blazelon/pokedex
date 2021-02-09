import React from 'react'

import { AppNavigator } from './navigation'
import { PokedexProvider } from './providers'
import { ThemeProvider } from './theme'

export default function Root() {
  return (
    <PokedexProvider>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </PokedexProvider>
  );
}