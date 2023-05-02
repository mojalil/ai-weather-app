import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='text-6xl'>
      <h1>GPT 4 Weather App</h1>
    </main>
  )
}
