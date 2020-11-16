import React from 'react';
import './suitables.css';


function getImages() {
	function importAll(r) {
		return r.keys().map(r);
	}

	const img = importAll(require.context(`./sectionImages`, false, /\.(png|jpe?g|svg)$/));
	return img.map(val => val.default)
}

const [diabetes, sport, vegeterians] = getImages();

export default function Suitables() {
	return (
		<section className="suitable-section">
			<div className="suitable-title-wrapper">
				<h3 className="suitable-section-title">Наши десерты подходят</h3>
			</div>
			<div className="suitable-items">
				<div className="suitable-item">
					<img src={sport} alt="Спортсменам" />
					<h3>Спортсменам</h3>
					<span>В наших сладостях нет тяжелых углеводов</span>
				</div>
				<div className="suitable-item">
					<img src={diabetes} alt="Диабетикам" />
					<h3>Диабетикам</h3>
					<span>Мы не используем рафинированный сахар</span>
				</div>
				<div className="suitable-item">
					<img src={vegeterians} alt="Вегетарианцам" />
					<h3>Вегетарианцам</h3>
					<span>Нет продуктов животного происхождения</span>
				</div>
			</div>
  	</section>
	);
}