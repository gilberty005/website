import './home.css'; 
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from '../../containers'; 
import { Navbar } from '../../components'; 


export function Home() {
    return (
      <div className = "App">
        <div className = "gradient_bg">
          <Navbar /> 
          <Header /> 
        </div>
        <WhatGPT3/> 
        <Features /> 
        <Possibility /> 
        <Blog /> 
        <Footer /> 
      </div>
    )
  }
  