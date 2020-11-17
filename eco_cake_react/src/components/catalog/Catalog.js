import React from 'react';
import './catalog.css';

function getImages() {
	function importAll(r) {
		return r.keys().map(r);
	}

	const img = importAll(require.context(`./sectionImages`), false, /\.(png|jpe?g|svg)$/);
	return img.map(val => val.default)
}

const img = getImages();
const [Cake, cheeseCake, CheeseCake2] = img;

export default function Catolog() {
	return (
			<section className="catalog-section">
				<h3 className="catalog-section-title">Каталог</h3>
				<div className="catalog-categories-wrapper">
					<a href="/" className="category-item active">Чизкейки</a>
					<a href="/" className="category-item">Вафельные</a>
					<a href="/" className="category-item">Бисквитные</a>
					<a href="/" className="category-item">Йогуртовые</a>
				</div>
				<div className="sweet-container">
					<div className="sweet-item">
						<img src={CheeseCake2} alt="Чизкейк 'Какао бриз'" />
						<span className="sweet-title">Чизкейк "Какао бриз"</span>
						<span className="sweet-description">Шоколадно-сливочный чизкейк без выпечки вносит пикантное разнообразие в сладкую сливочную композицию</span>
						<span className="sweet-cost">2500 руб.</span>
						<button className="call-button sweet-button">Купить</button>
					</div>
					<div className="sweet-item">
						<img src={Cake} alt="Торт 'Фитоняшка'" />
						<span className="sweet-title">Торт “Фитоняшка”</span>
						<span className="sweet-description">Творожно-клубничный чизкейк с добавлением ароматного клубничного сиропа</span>
						<span className="sweet-cost">2500 руб.</span>
						<button className="call-button sweet-button">Купить</button>
					</div>
					<div className="sweet-item">
						<img src={cheeseCake} alt="Чизкейк 'Рай вкуса'" />
						<span className="sweet-title">Чизкейк “Рай вкуса”</span>
						<span className="sweet-description">Творожно-малиновый чизкейк с добавлением ванильного и малинового сиропа</span>
						<span className="sweet-cost">2500 руб.</span>
						<button className="call-button sweet-button">Купить</button>
					</div>
				</div>
				<button className="call-button show-catalog">Смотреть весь каталог</button>
			</section>
	)
}