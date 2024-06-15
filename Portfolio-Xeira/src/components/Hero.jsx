import { RiHtml5Fill, RiCss3Fill, RiReactjsFill, RiJavascriptFill, RiGitMergeLine, RiMapPin3Line } from '@remixicon/react';
import './Hero.scss';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

const Hero = ({ setSection }) => {
	const { ref, inView } = useInView({
		threshold: 0.5,
	});

	inView && setSection('hero');

	return (
		<section id='Hero' className='hero' ref={ref}>
			<div className='container'>
				<img src='/xeira.png' alt='hero picture' className='hero_pic'></img>
				<div className='hero_text'>
					<h2>Hi! I&apos;m Diogo.</h2>
					<p>
						A 23 years old Front-end developer based in Portugal.
						<RiMapPin3Line />
					</p>
					<span>Tech Stack</span>
					<div className='icons'>
						<RiHtml5Fill size={48} />
						<RiCss3Fill size={48} />
						<RiJavascriptFill size={48} />
						<RiReactjsFill size={48} />
						<RiGitMergeLine size={48} />
					</div>
				</div>
			</div>
		</section>
	);
};

Hero.propTypes = {
	setSection: PropTypes.func.isRequired,
};

export default Hero;
