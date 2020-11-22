import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import './catalog.css';
import CatalogCards from './CatalogCards';

export default function Catalog(props) {
	const [error, setError] = useState(null);
	const [loaded, setLoaded] = useState(0);
	const [data, setData] = useState({catalog: []});
	const [active, setActive] = useState(0);
	const sections = useRef(null);

	useEffect(() => {
		if(!loaded) {
			function fetchData(){
				axios("./catalog.json")
					.then(response => response.data)
					.then(result => {
						setLoaded(1);
						setData(result);
					}, err => {
						setLoaded(1);
						setError(err);
					});
			}
			return fetchData();
		}
	}, [loaded]);

	function handleClick(e) {
		let sectionChildren = Array.from(sections.current.children);
		setActive(sectionChildren.indexOf(e.target));
	}

	const setActiveCategory = (index) => {
		return active === index ? "category-item active" : "category-item";
	}

	return (
			<section id="sCtlg" className="catalog-section">
				<h3 className="catalog-section-title">Каталог</h3>
				<div className="catalog-categories-wrapper" ref={sections}>
					<button className={setActiveCategory(0)} onClick={handleClick}>Чизкейки</button>
					<button className={setActiveCategory(1)} onClick={handleClick}>Вафельные</button>
					<button className={setActiveCategory(2)} onClick={handleClick}>Бисквитные</button>
					<button className={setActiveCategory(3)} onClick={handleClick}>Йогуртовые</button>
				</div>
				<CatalogCards setStateFunction={props.setStateFunction} loaded={loaded} error={error} data={data} section={active}/>
				<button className="call-button show-catalog">Смотреть весь каталог</button>
			</section>
	)
}