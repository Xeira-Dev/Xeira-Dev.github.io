import './Projects.scss';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

const Projects = ({ setSection }) => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		fetch('json/projects.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (myJson) {
				setProjects(myJson);
			});
	}, []);

	const { ref, inView } = useInView({
		threshold: 0.5,
	});

	inView && setSection('projects');

	return (
		<section id='Projects' className='projects' ref={ref}>
			<div className='container'>
				<h2>Projects</h2>
				<p>I&apos;ll be updating this section with some of my projects!</p>

				{projects &&
					projects.map((project, i) => {
						return (
							<article key={i}>
								<div className='content'>
									<h3>{project.name}</h3>
									<p>{project.description}</p>
									<div className='tecnologies'>
										{project.tecnologies.map((tec, i) => (
											<span key={i} id={tec.split(' ').join('')}>
												#{tec}
											</span>
										))}
									</div>
								</div>
								<div className='image'>
									<img src={project.image} alt='' />
									<a target='_blank' href={project.link}>
										Open
									</a>
								</div>
							</article>
						);
					})}
			</div>
		</section>
	);
};

Projects.propTypes = {
	setSection: PropTypes.func.isRequired,
};

export default Projects;
