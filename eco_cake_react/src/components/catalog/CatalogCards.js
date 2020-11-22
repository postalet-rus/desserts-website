import React from 'react';
import './catalog.css';

const CatalogCards = (props) => {
	if(props.loaded && !props.error && props.data.length) {
		return (
			<div className="sweet-container">
				{props.data.filter(item => item.section === props.section).map(item => (
					<div key={item.id + 1024} className="sweet-item">
						<img src={item.image} alt={item.cake} />
						<span className="sweet-title">{item.cake}</span>
						<span className="sweet-description">{item.description}</span>
						<span className="sweet-cost">{item.cost}</span>
        	<button className="call-button sweet-button" onClick={props.setStateFunction}>Купить</button>
      		</div>
				))}
			</div>
		)
	} else {
		return null
	}
}

export default CatalogCards;