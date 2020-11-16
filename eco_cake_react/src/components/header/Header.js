import React from 'react';
import './header.css';
import logo from './logo.svg';

function Header() {
	return (
		<header className="header">
			<div className="logo">
				<img src={logo} alt="Логотип" />
			</div>
			<nav className="navigation-header">
				<span className="menu-item">Каталог</span>
				<span className="menu-item">Ингрeдиенты</span>
				<span className="menu-item">Преимущества</span>
				<span className="menu-item">Доставка</span>
				<span className="menu-item">Контакты</span>
			</nav>
			<button className="call-button">
				<span className="call-header">Заказать звонок</span>
			</button>
  	</header>	
	)
}

export default Header;