import React from 'react';
import './location.css';
import geo from './geo.svg'; import instagram from './instagram.svg';
import mail from './mail.svg'; import phone from './phone.svg';
import pie from './pie.png';

export default function Location(props) {
	return (
		<section id="sLctn" className="location-section">
			<h3 className="location-section-title">Вы можете забрать свой заказ лично</h3>
			<div className="locations-wrapper">
				<div className="location-item">
					<img src={geo} alt="Геолокация" />
					<span className="location-description">г. Новосибирск, ул. Ленина, 54</span>
				</div>
				<div className="location-item">
					<img src={phone} alt="Телефон" />
					<span className="location-description">+7 383 123-45-67</span>
				</div>
				<div className="location-item">
					<img src={instagram} alt="Почта" />
					<span className="location-description">info@ecocake.ru</span>
				</div>
				<div className="location-item">
					<img src={mail} alt="Инстаграмм" />
					<span className="location-description">@ecocake</span>
				</div>
			</div>
			<img className= "location-pie" src={pie} alt="" />
			<button onClick={() => props.setStateFunction()} className="input-button location-section-call">Связаться с нами</button>
		</section>
	);
}