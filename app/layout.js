import Sidebar from './components/Sidebar'
import { MiContextoProvider } from './components/context'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio de Ulises Rodriguez',
  keywords: 'Ulises Ivo Rodriguez, Coderhouse, Skills, HTML, CSS'
}

export default function RootLayout({ children }) {
  return (
    <MiContextoProvider>
    <html lang="en">
      <body className='bodyContainer'><Sidebar/>{children}</body>
    </html>
    </MiContextoProvider>
  )
}
