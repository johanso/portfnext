import './globals.scss'
import type { Metadata } from 'next'
import { Lekton, Roboto } from 'next/font/google'
import Providers from './Providers'
import { Header, Nav, Topbar } from '@/components'
import { DataContextProvider } from '@/context/dataProvider'

const lekton = Lekton({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: "--font-lekton",
})

const roboto = Roboto({
  weight: ['500', '700'],
  subsets: ['latin'],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: 'Johan Ricardo - Frontend UI Developer',
  description: "Welcome to my portfolio! I'm a Frontend UI Developer with expertise in CSS, HTML5, JavaScript, and more. Explore my work and learn about my web design journey.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true} className='light' style={{ colorScheme: 'light'}}>
      <body className={`${lekton.variable} ${roboto.variable}`}>
        <DataContextProvider>
          <Providers>
            <div className='boxbg'>
              <main>
                <Header>
                  <Topbar />
                  <Nav />
                </Header>
                {children}
              </main>
            </div>
          </Providers>
        </DataContextProvider>
      </body>
    </html>
  )
}
