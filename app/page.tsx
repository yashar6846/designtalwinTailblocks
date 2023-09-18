import Image from 'next/image'
import Hero from './components/Hero'
import Content from './components/Content'
import Feature from './components/Feature'

export default function Home() {
  return (
   <main>
    <Hero />
    <Content />
    <Feature />
   </main>
  )
}
