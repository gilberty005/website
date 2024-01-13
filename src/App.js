import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Blog } from './pages/blogfolder/blog';
import { Contact } from './pages/contactfolder/contact';
import { Portfolio } from './pages/portfoliofolder/portfolio';
import { Projects } from './pages/projectsfolder/projects';
import { Home } from './pages/homefolder/home';
import { Notfound } from './pages/notfoundfolder/notfound';
import { Footer } from './containers';
import { Navbar } from './components';
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator, Button, Heading, View, Card } from "@aws-amplify/ui-react";

const App = ({ signOut }) => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
      <View className="App">
        <Card>
          <Heading level={1}>We now have Auth!</Heading>
        </Card>
        <Button onClick={signOut}>Sign Out</Button>
      </View>
    </Router>
  );
}

export default withAuthenticator(App);