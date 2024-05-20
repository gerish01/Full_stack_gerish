import ResumeImg from '../assets/resume.jpeg'

export default function Contact() {
    const config = {
        email: 'gerishjey@gmail.com',
        phone: '6374605982'
    }
    return <section className='contact' id='contact'>
        <div className='flex flex-col items-center contact-text'>
            <h1>Contact</h1>
            <p>If you want to discuss more in detail, Please Contact Me</p>
            <p><span className='font-bold '>E-mail : </span>{config.email}</p>
            <p><span className='font-bold '>Phone : </span>{config.phone}</p>
        </div>
    </section >
}