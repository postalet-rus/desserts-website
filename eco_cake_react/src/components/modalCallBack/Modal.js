import React from 'react';
import './modal.css';

export default function Modal(props) {
	let modalState = props.modalState;

	if (modalState === 1) {
		return (
			<div className="modal-order" >
				<span className="modal-title">Заполни форму для заказа</span>
				<span className="modal-sub-title">Наш оператор свяжется с Вами в течении 30 секунд</span>
				<form className="call-back-modal">
					<label htmlFor="modalNameInput">Ваше имя</label>
					<input id="modalNameInput" type="text" placeholder="Имя" className="name-input input-button" />
					<label htmlFor="modalNumberInput">Ваш телефон</label>
					<input id="modalNumberInput" type="text" placeholder="Номер телефона" className="number-input input-button" />
					<input type="submit" value="Сделать заказ" className="modal-button input-button" />
				</form>
			</div>
		);
	} else if (modalState === 0) {
		return null;
	}
}