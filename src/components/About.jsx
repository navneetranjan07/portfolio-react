import React from 'react'
import aboutImg from '../assests/about.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto mt-5' id="about">

        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className='mt-4 md:mt-0 text-left flex'>

                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                    👋 Hello, I'm Navneet Ranjan, a passionate web developer with a knack for crafting elegant solutions in the digital space. My journey in coding began with a love for problem-solving, and it has since evolved into a full-fledged career in web development.

💻 I specialize in building responsive and user-friendly websites and web applications using cutting-edge technologies such as HTML5, CSS3, JavaScript, and various frameworks like React.js.

🚀 Whether it's creating dynamic interfaces, optimizing website performance, or solving complex technical challenges, I thrive on turning ideas into reality through clean, maintainable code. I'm constantly learning and staying up-to-date with the latest industry trends and best practices to deliver top-notch solutions.

🌟 Beyond coding, I'm deeply committed to fostering a collaborative and inclusive tech community. I actively contribute to open-source projects and enjoy sharing my knowledge through writing articles.

📫 Let's connect and collaborate! Feel free to explore my projects and drop me a message if you'd like to discuss ideas, collaborate on projects, or simply geek out about all things web development. Together, let's build the future of the web, one line of code at a time! 💻✨
                    </p>
                </div>
            </div>

            <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} width={300} height={300} alt="" />

        </div>

    </div>
  )
}

export default About