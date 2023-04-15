import './style/bloco.css'
import perfume from './images/perfume.jpg'
import icon from './images/icon-cart.svg'
export function Blocos(){
    return (
        <div className="bloco">
            <img src={perfume} alt="" className="bloco-image" />
            <div className="bloco-text">
                <span className="bloco-category">PERFUME</span>
                <h1 className="bloco-title">Gabrielle Essence Eau De Parfum</h1>
                <p className="bloco-description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                <div className="price-section">
                    <h1 className="actual-price">$149.99</h1>
                    <span className="last-price">$169.99</span>
                </div>
                <a href="#" className="button"><img src={icon} alt="" className="button-icon" /><span className="button-label">Add to Cart</span></a>
            </div>
        </div>
    )
} 