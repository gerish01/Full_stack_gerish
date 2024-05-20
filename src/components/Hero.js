import heroImag from '../assets/hero.png';
import { AiOutlineTwitter, AiOutlineApple, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const config = {
        subtitle: "I'm a Full Stack Developer",
        social: {
            twitter: 'https://x.com/?lang=en',
            instagram: 'https://www.instagram.com/',
            linkedin: 'https://in.linkedin.com/',
            apple: 'https://www.apple.com/in/store?afid=p238%7Cs8Vs8GkTq-dc_mtid_187079nc38483_pcrid_694334137323_pgrid_112258962467_pntwk_g_pchan__pexid__ptid_kwd-10778630_&cid=aos-IN-kwgo-brand--slid---product-'
        }
    }

    return <section className='sec bg-primary'>
        <div className='text'>
            <h1>Hi, <br />I'm GERISH <span className='text-black'>GR</span>
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='icons'>
                <a href={config.social.twitter} className='pr-5 hover:text-blue-400 text-black'><AiOutlineTwitter size={40} /></a>
                <a href={config.social.instagram} className='pr-5 hover:text-pink-500  text-black'><AiOutlineInstagram size={40} /></a>
                <a href={config.social.linkedin} className='pr-5 hover:text-blue-400  text-black'><AiOutlineLinkedin size={40} /></a>
                <a href={config.social.apple} className='pr-5 hover:text-white  text-black' ><AiOutlineApple size={40} /></a>
            </div>
        </div>
        <img src={heroImag}></img>
    </section >
}