import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { AllPrograms } from '../src/components/home/all-programs'
import { Header } from '../src/components/header/header'
import { Footer } from '../src/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  return (
    <>
      
      <Header />
      
      <AllPrograms data={data} />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const { programs } = await import('/data/data.json')
  return {
      props: {
         data: programs, 
    }
  };
}

