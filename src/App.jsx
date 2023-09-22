import { useRef } from 'react'
import NavBar from './components/NavBar/NavBar'
import SectionOne from './components/Sections/SectionOne/SectionOne'
import SectionTwo from './components/Sections/SectionTwo/SectionTwo'
import SectionThree from './components/Sections/SectionThree/SectionThree'
import SectionFour from './components/Sections/SectionFour/SectionFour'
import SectionFive from './components/Sections/SectionFive/SectionFive'
import SectionSix from './components/Sections/SectionSix/SectionSix'
import SectionSeven from './components/Sections/SectionSeven/SectionSeven'
import SectionEight from './components/Sections/SectionEight/SectionEight'

function App() {
  const forProjectsRef = useRef(null)
  const forInvestorsRef = useRef(null)

  const scrollToSection = (e, ref) => {
    // prevent default behavior of anchor tag in Firefox (refresh)
    e.preventDefault()

    // Scroll
    ref.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <>
      <NavBar
        scrollToSectionFour={(e) => scrollToSection(e, forProjectsRef)}
        scrollToSectionFive={(e) => scrollToSection(e, forInvestorsRef)}
      />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour ref={forProjectsRef} />
      <SectionFive ref={forInvestorsRef} />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
    </>
  )
}

export default App
