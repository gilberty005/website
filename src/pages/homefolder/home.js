import './home.css'; 
import { Footer, Blog, Header } from '../../containers'; 
import { Navbar } from '../../components'; 


export function Home() {
    return (
      <div className = "App">
        <div className = "gradient_bg">
          <Navbar /> 
          <Header /> 
        </div>
        {/*<Blog /> */}
        <Footer /> 
      </div>
    )
  }
  