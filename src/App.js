import './App.css';
import Header from './components/HeadNav/Header'
import Hero from './components/Hero/Hero';
import OrgsList from './components/OrgsList/OrgsList';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className='root-container'>
      <Header />
      <Hero />
      <OrgsList />
      <Skills />
    </div>
  );
}

export default App;
