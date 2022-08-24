import { AppProps } from 'next/app'
import Layout from '@components/layout'
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider
} from '@mantine/core'
import { useColorScheme, useLocalStorage } from '@mantine/hooks'

function MyApp({ Component, pageProps, router }: AppProps) {
  const preferredColorScheme = useColorScheme()
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true
  })

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme }}
      >
        <Layout router={router}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default MyApp
