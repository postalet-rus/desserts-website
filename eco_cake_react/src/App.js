import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Preview from './components/preview/Preview';
import Promo from './components/promo/Promo';
import Suitables from './components/suitables/Suitables';
import Stages from './components/stages/Stages';
import Catalog from './components/catalog/Catalog';
import Order from './components/order/Order';
import Location from './components/location/Location';
import Modal from './components/modalCallBack/Modal';
import './App.css';

function App() {

  const [modalIsActive, setModalIsActive] = useState(0);
  const [scrolledSection, setScrolledSection] = useState(0);
  
  useEffect(() => {
    
    function clearModal(event) {
    if(modalIsActive === 1 && !document.querySelector(".modal-order")?.contains(event.target)) {
        setModalIsActive(0);
        document.body.style = "";
      }  
    }

    document.body.addEventListener("click", clearModal);

    return () => {
      document.body.removeEventListener("click", clearModal)
    }
  }, [modalIsActive]);

  function handleButtonClick() { 
    setModalIsActive(1);
    document.body.style.overflow = "hidden";
    return modalIsActive;
  };

  const handleScroll = (e) => {
    const off = window.pageYOffset;
    const elOff = (id) => document.querySelector(id).offsetTop;
    const includes = (el) => elOff(el) <= off && (elOff(el) + document.querySelector(el).clientHeight) >= off;
    const els = ["#sPrvw", "#sPrm", "#sStbls", "#sStgs", "#sLctn"];
    for(let i = 0; i < els.length; i++) {
      if(i === 4) {
        if(off + 2 >= document.documentElement.scrollHeight-document.documentElement.clientHeight) {
          setScrolledSection(4);
          return () => window.removeEventListener("scroll");
        }
      }
      if(includes(els[i])) {
        setScrolledSection(i);
        return () => window.removeEventListener("scroll");
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  })

  return (
    <div id="_app" className="app-container">
      <Header setStateFunction={handleButtonClick} currentSection={scrolledSection} />
      <Preview setStateFunction={handleButtonClick} />
      <Promo />
      <Suitables />
      <Stages />
      <Catalog setStateFunction={handleButtonClick} />
      <Order />
      <Location setStateFunction={handleButtonClick} />
      <Modal modalState={modalIsActive} />
    </div>
  );
}

export default App;