import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Home, About, Skills, Projects, Timeline, Contact, Terminal } from './pages/Sections'
import { portfolio } from './data/portfolio'
import './styles/index.css'
export default function App(){const [loading,setLoading]=useState(true);useEffect(()=>{const t=setTimeout(()=>setLoading(false),1250);return()=>clearTimeout(t)},[]);return <><div className={`loader ${loading?'':'loader--done'}`}><div className="loader-mark">AM<span>/</span></div><div className="loader-line"><i/></div><p>initializing portfolio</p></div><div className={loading?'app app--hidden':'app'}><Navbar/><main><Home/><About/><Skills/><Projects/><Timeline id="experience" label="04 / Experience" title={<>Places I&apos;ve<br/><em>contributed.</em></>} items={portfolio.experience}/><Timeline id="education" label="05 / Education" title={<>Always<br/><em>learning.</em></>} items={portfolio.education}/><Terminal/><Contact/></main><footer><span>© 2024 Alex Morgan</span><span>Made with curiosity &amp; care</span><div><a href="#home">GH</a><a href="#contact">IN</a></div></footer></div></>}
