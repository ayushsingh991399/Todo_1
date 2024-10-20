import "./About.css"

const About = () => {
  return (
    <div className="about d-flex justify-content-center align-items-center">
        <div className="container">
            <div className=" d-flex">
                <h1>About me</h1>
            </div>
            <p>I'm Ayush, a passionate Full Stack Developer with a keen eye for design and a strong communication skills. I'm currently available for freelance projects or collaborations. Please don't hesitate to reach out if you need help with anything.</p>
          
            <ul className="social-icon">
      <li className="social-icon__item"><a className="social-icon__link"  href="mailto:Ayushkumar991399@gmail.com">
          <ion-icon name="mail-outline"></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="https://www.linkedin.com/in/
ayush-singh-625a33333
">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="https://www.instagram.com/ayush_gurjar_10/profilecard/?igsh=MW80cml0N296bGxuZQ==">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="https://github.com/ayushsingh991399">
          <ion-icon name="logo-github"></ion-icon>

        </a></li>
    </ul>
         

            </div>
      
    </div>
  )
}

export default About