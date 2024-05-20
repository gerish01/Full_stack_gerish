import ecommerceImg from '../assets/ecommerce.jpeg'
import food from '../assets/food.jpeg'
import house from '../assets/2.8 Output.png'

export default function Projects() {
    const config = {
        projects: [
            {
                image: ecommerceImg,
                desc: 'A Ecommerce Website using Html and Css - Full Stack',
                link: 'https://github.com/justdjango/django-ecommerce'
            },
            {
                image: food,
                desc: 'Food Ecommerce website like Swiggy, Build with React - Full Stack',
                link: 'https://github.com/peter-kimanzi/food-ecommerce'
            },
            {
                image: house,
                desc: ' Project House Price Prediction - Machine Learning Engineer ',
                link: 'https://github.com/gerish01/MLE-Training'
            }
        ]
    }


    return <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full projects-text">
            <div className="flex  flex-col px-10 py-5">
                <h1>Projects</h1>
                <p className='flex text-center font-large'>These are some of My project and there are many more</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5 justify'>
                {config.projects.map((project) => (
                    <a href={project.link}>
                        <div className='relative'>
                            <img className='h-[250px] w-[500px]' src={project.image} />
                            <div className='project-desc'>
                                <p className='text-center px-5 py-5'>{project.desc}</p>
                                <div className='flex justify-center'>
                                    <a className='btn' target='_blank' href={project.link}>View Project</a>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section >
}