import { useState, useEffect } from 'react'
import Header from './components/header'
import Links from './components/links'
import Footer from './components/footer'
import initData from './assets/data/config.json'

function App() {

  const [groups, setGroups] = useState([])
  const [tiles, setTiles] = useState([])

  document.title = initData.pageTitle

  useEffect(() => {
    const getRoles = async () => {
      try {
        const res = await fetch(initData.userInfoUrl)
        const data = await res.json()
        setGroups(data.groups)
      } catch {
        console.error('error fetching user roles')
      }
    }
    getRoles()
  }, [initData.userInfoUrl])

  useEffect(() => {
    setTiles(initData.tiles.filter(tile => tile.roles.toString() === '*' || tile.roles.some(item => groups.includes(item))))
  }, [initData.tiles, groups])

  return (
    <div className='App'>
      <Header
        title={initData.header}
        image={initData.headerImage}
        aboutUsEnabled={initData.aboutUs.enabled}
        aboutUsTitle={initData.aboutUs.title}
        aboutUsText={initData.aboutUs.text}
      />
      <Links
        tiles={tiles}
      />
      <Footer
        groups={groups}
      />
    </div>
  )
}

export default App
