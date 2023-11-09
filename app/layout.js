import './global.css'
import Navbar from "./_components/global/Navbar"
import CustomCursor from './_components/global/CustomCursor'
import Grained from './_components/global/Grained'

export const metadata = {
  title: 'Mansoor Roeen - Home',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="body">
        <CustomCursor />
        <Navbar />
        <Grained ele={'next__app'} opt={false}>
          {children}
        </Grained>
      </body>
    </html>
  )
}
