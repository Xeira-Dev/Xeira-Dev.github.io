import './Contacts.scss';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

const Contacts = ({ setSection }) => {
	const form = useRef();

	const { ref, inView } = useInView({
		threshold: 0.6,
	});

	inView && setSection('contacts');

	const [alerts, setAlerts] = useState([]);

	const sendEmail = e => {
		e.preventDefault();

		!form.current.querySelector('input[name="honeypot"]').checked &&
			emailjs
				.sendForm('service_pkmb0pn', 'template_4qwqr25', form.current, {
					publicKey: 'Rdjy6JWLKK4IK26HE',
				})
				.then(
					() => {
						console.log('SUCCESS!');
						setAlerts([...alerts, { title: 'Success!', message: 'Your message was sent successfully!' }]);
						setTimeout(() => {
							setAlerts([...alerts, { title: 'Success!', message: 'Your message was sent successfully!' }]);
						}, 100);
						form.current.reset();
					},
					error => {
						console.log('FAILED...', error.text);
						setAlerts([...alerts, { title: 'Failed..', message: 'Your message was not sent, please try again.' }]);
						setTimeout(() => {
							setAlerts([...alerts, { title: 'Failed..', message: 'Your message was not sent, please try again.' }]);
						}, 100);
					},
				);
	};

	document.querySelectorAll('.alert').forEach((alert, i) => {
		console.log(alert, i);
		alert.style.marginTop = `${alert.offsetHeight * i + 16 * i}px`;
		setTimeout(() => {
			alert.classList.add('hide');
			setTimeout(() => {
				alert.remove();
			}, 500);
		}, 7000);
	});

	return (
		<section id='Contacts' className='contacts' ref={ref}>
			<div className='container'>
				<h2>Get in touch!</h2>
				<form ref={form} onSubmit={sendEmail}>
					<label htmlFor='user_name'>Your Name</label>
					<input required={true} spellCheck='false' type='text' name='user_name' id='user_name' />
					<label htmlFor='user_email'>Your Email</label>
					<input required={true} spellCheck='false' type='email' name='user_email' id='user_email' />
					<label htmlFor='message'>How can I help you?</label>
					<textarea minLength={10} required={true} spellCheck='false' name='message' id='message' />
					<input type='checkbox' name='honeypot' />
					<input type='submit' value='Send' />
				</form>
				<div className='icons'></div>
			</div>
			{alerts.map((alert, i) => (
				<div className={'alert'} key={i}>
					<div className='alert_text'>
						<h3>{alert.title}</h3>
						<p>{alert.message}</p>
					</div>
				</div>
			))}
		</section>
	);
};

Contacts.propTypes = {
	setSection: PropTypes.func.isRequired,
};

export default Contacts;
