import PropTypes from 'prop-types';
import './Navbar.scss';
const Navbar = ({ currentSection }) => {
	return (
		<header>
			<div className='container'>
				<h1>
					Xeira<span>.</span>Dev
				</h1>
				<nav>
					<ul>
						<li>
							<a className={currentSection === 'hero' ? 'active' : ''} href='#'>
								Home
							</a>
						</li>
						<li>
							<a className={currentSection === 'about' ? 'active' : ''} href='#About'>
								About
							</a>
						</li>
						<li>
							<a className={currentSection === 'projects' ? 'active' : ''} href='#Projects'>
								Projects
							</a>
						</li>
						<li>
							<a className={currentSection === 'contacts' ? 'active' : ''} href='#Contacts'>
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

Navbar.propTypes = {
	currentSection: PropTypes.string.isRequired,
};

export default Navbar;
