import React from 'react';
import './preview.css';
import more from './more.svg';
import dessert from './dessert.png';

function Preview() {
	return (
		<section className="preview-section">
			<div className="preview-text-wrapper">
				<h1 className="preview-title">Полезные десерты</h1>
				<h2 className="preview-description">из натуральных ингрeдиентов</h2>
				<h2 className="preview-description">в городе Новосибирске</h2>
				<span className="preview-ads">Если ты любишь здоровое питание<br /> и не можешь отказать себе в сладком, тогда наши торты именно для тебя</span>
			</div>
				<button className="call-button call-preview">
					<span>Сделать заказ</span>
				</button> 
			<img className="preview-image" src={dessert} alt="Десерт" />
			<div className="more-button-container">
				<img className="more-button minimized" src={more} alt="" />
			</div>
  </section>
	);
}

export default Preview;