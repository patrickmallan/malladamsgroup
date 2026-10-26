import { useEffect } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage, ArchitecturePage, WorkPage, VisionPage, AboutPage, ConnectPage } from './components/Pages'
import './App.css'

const pages = {
  '/': { title: 'Energetic Architecture | Malladams Group', description: 'Explore Energetic Architecture, private organizational leadership engagements, and the future vision of Malladams Group.', component: HomePage },
  '/energetic-architecture': { title: 'Energetic Architecture | Malladams Group', description: 'Explore the patterns, relationships and conditions that shape people, organizations, systems and spaces.', component: ArchitecturePage },
  '/work-with-us': { title: 'Private Leadership Engagements | Malladams Group', description: 'Annissa Adams leads private organizational leadership engagements exploring culture, leadership dynamics and possibilities for change.', component: WorkPage },
  '/our-vision': { title: 'Our Vision | Malladams Group', description: 'Our longer-term vision for environments and businesses designed to support life, beginning with a connection to Squamish.', component: VisionPage },
  '/about': { title: 'About the Founders | Malladams Group', description: 'Meet Annissa Adams and Patrick Mallan, co-founders of Malladams Group.', component: AboutPage },
  '/connect': { title: 'Begin the Conversation | Malladams Group', description: 'Enquire about a private leadership engagement or the wider Malladams Group vision.', component: ConnectPage },
} as const

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const page = pages[path as keyof typeof pages]

  useEffect(() => {
    if (!page) return
    document.title = page.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', page.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', page.description)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', `https://www.malladamsgroup.com${path === '/' ? '/' : path}`)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `https://www.malladamsgroup.com${path === '/' ? '/' : path}`)
  }, [page, path])

  const Page = page?.component
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main">{Page ? <Page /> : <section className="section page-missing shell"><h1 className="display display--lg">Page not found</h1><p className="body-text">This page is unavailable.</p><a className="text-link" href="/">Return home</a></section>}</main>
    <Footer />
  </>
}

export default App
