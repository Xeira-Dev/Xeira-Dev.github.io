import './About.scss';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

const About = ({ setSection }) => {
	const { ref, inView } = useInView({
		threshold: 0.6,
	});

	inView && setSection('about');

	const hoverEffect = (e, i) => {
		const activeLi = document.querySelector('.timeline ul li.active');
		const timelineImages = document.querySelector('.timeline_images');
		e.target.parentElement.classList.add('active');
		e.target.parentElement !== activeLi && activeLi.classList.remove('active');
		timelineImages.querySelector('.card.active').classList.remove('active');
		timelineImages.children[i].classList.add('active');
	};

	return (
		<section id='About' className='about' ref={ref}>
			<div className='container'>
				<h2>My Experience</h2>

				<div className='timeline'>
					<ul>
						<li onMouseEnter={e => hoverEffect(e, 0)} className='active'>
							<p>
								Around 2017, I developed a growing fascination with coding. Simultaneously, I was immersed in the study of electronics at ATEC Training Academy and took interest in programming with
								microcontrollers.
							</p>
						</li>
						<li onMouseEnter={e => hoverEffect(e, 1)}>
							<p>
								After graduating I got my first job working at a TV Station in Portugal &#40;TVI&#41; as a MCR Operator. Whilst employed at that company, I applied my programming skills to develop
								tools that improved our workflow.
							</p>
						</li>
						<li onMouseEnter={e => hoverEffect(e, 2)}>
							<p>
								My employment with Securitas Direct began in May 2023 as an alarm system technician and lasted for six months. Thereafter, I felt compelled to learn coding and seek a job opportunity
								in the coding industry.
							</p>
						</li>
						<li onMouseEnter={e => hoverEffect(e, 3)}>
							<p>At the beginning of 2024, I embarked upon a Full Stack Web Development learning journey at FLAG Academy.</p>
						</li>
						<li onMouseEnter={e => hoverEffect(e, 4)}>
							<p>I am at present exploring opportunities for my initial position in the field of Web Development.</p>
						</li>
					</ul>

					<div className='timeline_images'>
						<div className='card active'>
							<div className='frame'>
								<img title='ATEC' src='/timeline/Atec_Projeto_Final.png' alt='' />
								<span>2017</span>
							</div>
						</div>
						<div className='card'>
							<div className='frame'>
								<img src='/timeline/TVI_Tester.png' alt='' />
								<span>2020</span>
							</div>
						</div>
						<div className='card'>
							<div className='frame'>
								<img src='/timeline/Securitas.jpg' alt='' />
								<span>2023</span>
							</div>
						</div>
						<div className='card'>
							<div className='frame'>
								<img src='/timeline/Flag_Lisboa.jpg' alt='' />
								<span>2024</span>
							</div>
						</div>
						<div className='card'>
							<div className='frame'>
								<img src='/timeline/2024_Me.png' alt='' />
								<span>NOW</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

About.propTypes = {
	setSection: PropTypes.func.isRequired,
};

export default About;
