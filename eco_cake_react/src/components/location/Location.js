import React from 'react';
import './location.css';
import geo from './geo.svg'; import instagram from './instagram.svg';
import mail from './mail.svg'; import phone from './phone.svg';
import pie from './pie.png';

export default function Location() {
	return (
		<section class="location-section">
			<h3 class="location-section-title">Вы можете забрать свой заказ лично</h3>
			<div class="locations-wrapper">
				<div class="location-item">
					<img src={geo} alt="Геолокация" />
					<span class="location-description">г. Новосибирск, ул. Ленина, 54</span>
				</div>
				<div class="location-item">
					<img src={phone} alt="Телефон" />
					<span class="location-description">+7 383 123-45-67</span>
				</div>
				<div class="location-item">
					<img src={instagram} alt="Почта" />
					<span class="location-description">info@ecocake.ru</span>
				</div>
				<div class="location-item">
					<img src={mail} alt="Инстаграмм" />
					<span class="location-description">@ecocake</span>
				</div>
			</div>
			<img src={pie} alt="" />
			<button class="input-button location-section-call">Связаться с нами</button>
		</section>
	);
}