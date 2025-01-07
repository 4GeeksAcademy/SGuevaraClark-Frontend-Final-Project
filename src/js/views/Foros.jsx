import React from "react";
import "../../styles/foros.css";


import reptiles from "../../img/Reptiles.png";
import gatos from "../../img/Gatos.png";
import perros from "../../img/Perros.png";
import roedores from "../../img/Roedores.png";
import artropodos from "../../img/Artropodos.png";
import aves from "../../img/Aves.png";

export const Foros = () => {
    return (
        <div className="foros-container">
            <div className="decorative-line-1"></div>
            <div className="decorative-line-2"></div>        
            <div className="content-section">
                <h1 className="main-title">
                    <span className="pink-text">CONSEJOS Y</span><br />
                    <span className="pink-text">COMUNIDAD</span>
                </h1>
                <h2 className="subtitle">/ A UN CLICK /</h2>
                
                <p className="welcome-text">
                    Bienvenidos a la comunidad de <strong>Petpals</strong>. Este es el lugar donde podrás encontrar todo
                    lo que necesitas para el día a día con tu mascota.<br />
                    Entra en un foro y habla con gente de todo el mundo, sigue sus perfiles y acompañanos
                    en esta nueva aventura. No olvides visitar nuestras secciones secundarias para saber
                    más sobre los cuidados, salud, alimentación y bienestar de tus pequeños.
                </p>
            </div>

            <div className="carousel-section">
                <div id="petCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {/* First slide - Initial 4 images */}
                        <div className="carousel-item active">
                            <div className="carousel-group">
                                <div className="pet-card">
                                    <img src={reptiles} alt="Reptiles" />
                                    <span className="pet-label">¡ REPTILES !</span>
                                </div>
                                <div className="pet-card">
                                    <img src={gatos} alt="Gatos" />
                                    <span className="pet-label">¡ GATOS !</span>
                                </div>
                                <div className="pet-card">
                                    <img src={perros} alt="Perros" />
                                    <span className="pet-label">¡ PERROS !</span>
                                </div>
                                <div className="pet-card">
                                    <img src={roedores} alt="Roedores" />
                                    <span className="pet-label">¡ ROEDORES !</span>
                                </div>
                            </div>
                        </div>
                        {/* Second slide - Shift one image */}
                        <div className="carousel-item">
                            <div className="carousel-group">
                                <div className="pet-card">
                                    <img src={gatos} alt="Gatos" />
                                    <span className="pet-label">¡ GATOS !</span>
                                </div>
                                <div className="pet-card">
                                    <img src={perros} alt="Perros" />
                                    <span className="pet-label">¡ PERROS !</span>
                                </div>
                                <div className="pet-card">
                                    <img src={roedores} alt="Roedores" />
                                    <span className="pet-label">¡ ROEDORES !</span>
                                </div>
                                <div className="pet-card">
                                    <img src={artropodos} alt="Artrópodos" />
                                    <span className="pet-label">¡ ARTRÓPODOS !</span>
                                </div>
                            </div>
                        </div>
                        {/* Third slide - Shift one more image */}
                        <div className="carousel-item">
                            <div className="carousel-group">
                                <div className="pet-card">
                                    <img src={perros} alt="Perros" />
                                    <span className="pet-label">¡ PERROS !</span>
                                </div>
                                <div className="pet-card">
                                    <img src={roedores} alt="Roedores" />
                                    <span className="pet-label">¡ ROEDORES !</span>
                                </div>
                                <div className="pet-card">
                                    <img src={artropodos} alt="Artrópodos" />
                                    <span className="pet-label">¡ ARTRÓPODOS !</span>
                                </div>
                                <div className="pet-card">
                                    <img src={aves} alt="Aves" />
                                    <span className="pet-label">¡ AVES !</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#petCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#petCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};