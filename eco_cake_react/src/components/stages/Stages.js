import React from 'react';
import './stages.css';

function getImages() {
	function importAll(r) {
		return r.keys().map(r);
	}

	const img = importAll(require.context(`./sectionImages`, false, /\.(png|jpe?g|svg)$/));
	return img.map(val => val.default)
}

const [four, one, three, two] = getImages();

export default function Stages() {
	return (
		<section class="order-stages-section">
			<h3 class="stages-title">Процесс заказа и доставки</h3>
			<div class="stages-container">
				<div class="stage-item">
					<img src={one} alt="1" />
					<h4>Заказ</h4>
					<span>Сделайте заявку на нашем сайте или позвоните сами</span>
					<hr />
				</div>
				<div class="stage-item">
					<img src={two} alt="2" />
					<h4>Детали</h4>
					<span>Наш оператор свяжется с Вами для уточнения деталей</span>
					<hr />
				</div>
				<div class="stage-item">
					<img src={three} alt="3" />
					<h4>Приготовление</h4>
					<span>Мы готовим Ваш заказ и упаковываем для дальнейшей доставки</span>
					<hr />
				</div>
				<div class="stage-item">
					<img src={four} alt="4" />
					<h4>Доставка</h4>
					<span>Курьер выезжает в назначенное время и доставляет десерт</span>
				</div>
			</div>
		</section>
	)
	
}