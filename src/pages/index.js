
import Acomplishments from '../components/Acomplishments/Acomplishments'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies/Technologies'
import { Layout } from '../layout/Layout'


const Home = ()  => {
  return(
    <Layout>
    <Hero/>
    <Projects/>
    <Technologies/>
    <Acomplishments/>
    </Layout>
  )
}

export default Home