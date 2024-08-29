import './App.css'
import ContentContainer from './Components/Containers/ContentContainer'
import Footer from './Components/Containers/Footer'
import MainContainer from './Components/Containers/MainContainer'
import NavigationBar from './Components/Navigation/NavigationBar'
import AboutScreen from './Components/Screens/AboutScreen'
import ContactScreen from './Components/Screens/ContactScreen'
import HomeScreen from './Components/Screens/HomeScreen'
import ProjectsScreen from './Components/Screens/ProjectsScreen'
import ServicesScreen from './Components/Screens/ServicesScreen'

function App() {

  return (
    <>
    <NavigationBar />
    <MainContainer>
      <ContentContainer>
        <HomeScreen/>
      </ContentContainer>
      <ContentContainer>
        <ServicesScreen/>
      </ContentContainer>
      <ContentContainer>
        <ProjectsScreen/>
      </ContentContainer>
      <ContentContainer>
        <AboutScreen/>
      </ContentContainer>
      <ContentContainer>
        <ContactScreen/>
      </ContentContainer>
      <Footer/>
    </MainContainer>
  </>
  )
}

export default App
