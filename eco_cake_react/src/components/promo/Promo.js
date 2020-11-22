import React, {useRef} from 'react';
import './Promo.css';

function getImages() {
	function importAll(r) {
		return r.keys().map(r);
	}

	const img = importAll(require.context(`./sectionImages`, false, /\.(png|jpe?g|svg)$/));
	return img.map(val => val.default)
}

const images = getImages();
const [ berries, cake, cocoa, dates, eggs, flour, honey, milk, nuts] = images;

export default function Promo() {
	const promoRef = useRef(null);

	return (
		<section id="sPrm" className="promo-section" ref={promoRef}>
			<h3 className="promo-title">Секрет наших тортов<br /> в натуральных ингрeдиентах</h3>
			<div className="ingredients-wrapper">
				<div className="ingredients-column col-1">
					<div className="ingredient-item" style={{"justifySelf": "flex-end"}}>
						<img src={flour} style={{"marginBottom": "12px"}} alt="Рисовая и льнаная мука" />
						<span className="ingredient-text">Рисовая, льняная мука</span>
					</div>
					<div className="ingredient-item">
						<img src={dates} style={{"marginBottom":"4px"}} alt="Финики" />
						<span className="ingredient-text">Финики для<br /> начинки</span>
					</div>
					<div className="ingredient-item">
						<img src={eggs} style={{"marginBottom":"15px"}} alt="Яйца" />
						<span className="ingredient-text">Фермерские<br /> яйца</span>
					</div>
					<div className="ingredient-item" style={{"justifySelf": "flex-end"}}>
						<img src={cocoa} style={{"marginBottom": "14px"}} alt="Какао" />
						<span className="ingredient-text">Натуральные<br /> какао бобы</span>
					</div>
				</div>
				<div className="ingredients-column col-center">
					<img src={cake} alt="Торт" className="cake" />
				</div>
				<div className="ingredients-column col-2">
					<div className="ingredient-item">
						<img src={nuts} style={{"marginBottom": "16px"}} alt="Орехи" />
						<span className="ingredient-text">Отборные и<br /> свежие орехи</span>
					</div>
					<div className="ingredient-item" style={{"justifySelf": "flex-end"}}>
						<img src={berries} style={{"marginBottom": "13px"}} alt="Ягоды" />
						<span className="ingredient-text">Фермерские<br /> ягоды</span>
					</div>
					<div className="ingredient-item" style={{"justifySelf": "flex-end"}}>
						<img src={milk} style={{"marginBottom": "15px"}} alt="Растительное молоко" />
						<span className="ingredient-text">Растительное<br /> молоко</span>
					</div>
					<div className="ingredient-item">
						<img src={honey} style={{"marginBottom": "9px"}} alt="Мёд" />
						<span className="ingredient-text">Мед вместо<br /> сахара</span>
					</div>
				</div> 
			</div>
 	 	</section>
	)
}

