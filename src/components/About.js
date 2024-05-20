import AboutImg from '../assets/about.png'

export default function About() {
    const config = {
        line1: "Hi, My name is GR Gerish, from SRM Institue of science and technology, Currently i am working in Tiger Analytics.",
        line2: "I am a Machine Learning Engineer and a Full Stack Developer. I build a Websites with React.js and Tailwind.",
        line3: "I am Proficient in Frontend skill in React,js, GitHub, Excel, pandas and many more.",
    }


    return <section className='about-mob' id='about'>
        <div className='about-img'>
            <img src={AboutImg} />
        </div>
        <div className='about-text'>
            <div className='flex flex-col justify-center'>
                <h1>About Me</h1>
                <p>{config.line1}</p>
                <p>{config.line2}</p>
                <p>{config.line3}</p>
            </div>
        </div>
    </section>
}