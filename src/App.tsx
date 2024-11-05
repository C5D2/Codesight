import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles } from '@styles/globalStyles';
import { theme } from '@styles/theme';
import { RouterProvider } from 'react-router-dom';
import router from '@routes/routes';

function App() {
  return (
  <>
  <Global styles={globalStyles} />
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
  </>
  )
}

export default App
