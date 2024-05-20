import ResumeImg from '../assets/resume.jpeg'

export default function Resume() {
    const config = {
        link: 'https://www.jobseeker.com/en/resume'
    }

    return <section className='about-mob' id='resume'>
        <div className='resume-img'>
            <img className='w-[350px]' src={ResumeImg} />
        </div>
        <div className='about-text'>
            <div className='flex flex-col justify-center'>
                <h1>Resume</h1>
                <p>You can view my resume  <a className='btn' href={config.link}> Download</a></p>
            </div>
        </div>
    </section>
}