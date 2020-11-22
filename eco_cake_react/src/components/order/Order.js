import React from 'react';
import decoration from './decoration.png';
import donuts from './donuts.png';
import './order.css';

export default function Order() {
	return (
		<section className="order-section">
			<h3 className="order-section-title">Заполни форму для заказа</h3>
			<span>Наш оператор свяжется с Вами в течение 30 секунд</span>
			<form action="post" className="call-back-form">
				<label htmlFor="nameInput">Ваше имя</label>
				<input id="nameInput" type="text" placeholder="Имя" className="name-input input-button" />
				<label htmlFor="numberInput">Ваш телефон</label>
				<input id="numberInput" type="text" placeholder="Номер телефона" className="number-input input-button" />
				<input type="submit" value="Сделать заказ" className="input-button" />
			</form>
			<img className="decorative-cake" src={decoration} alt="" />
			<img className="decorative-donuts" src={donuts} alt="" />
		</section>
	);
}