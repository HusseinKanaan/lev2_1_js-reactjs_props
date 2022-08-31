import './Produktkomponente.css'
const Produktkomponente = (props) => {
    return (
        <div>
            <div className='flexContainer'>
                <h1>Supershop</h1>
                <img src='{props.img}' alt='bild' />
                <h2>{props.Product}</h2>
                <p>{props.preis}</p>
                <div>
                    <img src="/public/img/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpeg" alt="" />
                </div>

                <button>Buy Now</button>
            </div>
        </div>
    )
}

export default Produktkomponente;