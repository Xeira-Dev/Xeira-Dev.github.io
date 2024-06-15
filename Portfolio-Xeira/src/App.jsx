import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './base/_index.scss';

function App() {
	const [currentSection, setCurrentSection] = useState('hero');

	return (
		<>
			<Navbar currentSection={currentSection} />
			<main>
				<Hero setSection={setCurrentSection} />
				<About setSection={setCurrentSection} />
				<Projects setSection={setCurrentSection} />
				<Contacts setSection={setCurrentSection} />
			</main>
			<Footer />
		</>
	);
}

export default App;
