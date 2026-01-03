import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Blog } from './pages/blog/blog.jsx';
import { Contact } from './pages/contact/contact.jsx';
import { Portfolio } from './pages/portfolio/portfolio.jsx';
import { Projects } from './pages/projects/projects.jsx';
import { Home } from './pages/home/home.jsx';
import { Lithum } from './pages/lithum/lithum.jsx';
import { Frosci } from './pages/frosci/frosci.jsx';
import { Notfound } from './pages/notfound/notfound.jsx';
import Footer from './components/Footer/Footer';
import { Pedestrian } from './pages/projects/project_details/pedestrian.jsx';
import { YHacks } from './pages/projects/project_details/yhacks.jsx';
import { Pokemon } from './pages/blog/blogs/pokemon.jsx';
import Navbar from './components/navbar/Navbar';
import { routes, hideNavbarFooterRoutes } from './config/routes';

const RouteWrapper = () => {
  const location = useLocation();
  const showHeaderFooter = !hideNavbarFooterRoutes.includes(location.pathname);

  return (
    <>
      {showHeaderFooter && <Navbar />}
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.portfolio} element={<Portfolio />} />
        <Route path={routes.projects} element={<Projects />} />
        <Route path={routes.blog} element={<Blog />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.lithum} element={<Lithum />} />
        <Route path={routes.frosci} element={<Frosci />} />
        <Route path={routes.pedestrian} element={<Pedestrian />} />
        <Route path={routes.yhacks} element={<YHacks />} />
        <Route path={routes.pokemon} element={<Pokemon />} />
        <Route path={routes.notFound} element={<Notfound />} />
      </Routes>
      {showHeaderFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <RouteWrapper />
    </Router>
  );
};

export default App;
