import Head from 'next/head'
import Header from '../components/Main/Header/Header'
import Matches from '../components/Main/Matches.js/Matches'
import News from '../components/Main/News/News.js'
import Titles from '../components/Main/Titles/Titles'
import Players from '../components/Main/Players/Players'
import Title from '../components/Title/Title'
import styles from '../styles/Home.module.css'
import Sponsors from '../components/Sponsors/Sponsors'
//Import Components


export default function Home() {
  return (
       <>
       <Header/>
       <Matches/>
       <Title text='Wydad News'/>
       <News/>
       <Title text='the most titled in morocco'/>
       <Titles/>
       <Title text='Wydad Players'/>
       <Players/>
       <Sponsors/>
       </>
  )
}
