// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'
import Table from './components/Table'
import CustomTable from './components/CustomTable'
import Stag from './components/StagAnimate'
import Slider from './components/Slider'
//import { TableForm } from './components/TableForm'
import { TableForm2 } from './components/TableForm2'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    
     <div className="flex  flex-wrap justify-center">
    <button className="border-2 m-2 p-2 rounded-lg bg-blue-500 hover:bg-blue-800 text-white"><a href="/5">Table5</a></button>
    <button className="border-2 m-2 p-2 rounded-lg bg-blue-500 hover:bg-blue-800 text-white"><a href="/6">Table6</a></button>
    <button className="border-2 m-2 p-2 rounded-lg bg-blue-500 hover:bg-blue-800 text-white"><a href="/7">Table7</a></button>
    <button className="border-2 m-2 p-2 rounded-lg bg-blue-500 hover:bg-blue-800 text-white"><a href="/8">Table8</a></button>
    </div>
    <Table/>
    <CustomTable/>
    <TableForm2/>
    <Stag/>
    <Slider/>
    
     </>
  )
}
