import React from 'react';
import './header.css';
import logo from './logo.svg';

function Header(props) {
	let cS = props.currentSection;
	return (
		<header className="header">
			<div className="logo">
				<a href="#sPrvw"><img src={logo} alt="Логотип" /></a>
			</div>
			<nav className="navigation-header">
				<a href="#sPrvw" className={cS===0?"menu-item current-menu-item":"menu-item"}>Каталог</a>
				<a href="#sPrm" className={cS===1?"menu-item current-menu-item":"menu-item"}>Ингрeдиенты</a>
				<a href="#sStbls" className={cS===2?"menu-item current-menu-item":"menu-item"}>Преимущества</a>
				<a href="#sStgs" className={cS===3?"menu-item current-menu-item":"menu-item"}>Доставка</a>
				<a href="#sLctn" className={cS===4?"menu-item current-menu-item":"menu-item"}>Контакты</a>
			</nav>
			<button className="call-button" onClick={() => props.setStateFunction()}>
				<span className="call-header">Заказать звонок</span>
			</button>
  	</header>	
	)
}

export default Header;