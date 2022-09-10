import './Produktkomponente.css'
const Produktkomponente = (props) => {
    return (
        <section className='flexContainer'>
            <div>
                <div>
                    <img src="/public/img/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpeg" alt="" />
                </div>
                <img src='{props.img}' alt='bild' />
                <h2>{props.Product}</h2>
                <p>{props.preis}</p>

                <button>Buy Now</button>
            </div>
        </section>
    )
}

export default Produktkomponente;