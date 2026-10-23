import s from './Hero.module.css'


function Hero() {


    return (

    <section className={s.hero}>
        <h1>CREATEX CONSTRUCTION</h1>
        <p>Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. </p>
        <ul>
            <li>
                <button>Learn more about us</button>
            </li>
            <li>
                <button>SUBMIT REQUEST</button>
            </li>
        </ul>
    </section>

    )
}

export default Hero