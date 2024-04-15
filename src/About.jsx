import './App.css'
import profilePhoto from './assets/pozik.png'
import mailIcon from './assets/mail.png'
import linkedinIcon from './assets/linkedin.png'
import githubIcon from './assets/github.png'
import Topbar from './components/Topbar'

const pages = ["about", "experience", "projects", "education"];
function Home() {

  return (
    <>
    <nav className='page-links'>
      <Topbar items={pages}></Topbar>
    </nav>
    <header>
        <div>
        <h1 id="name">Andreea-Florina <br/> Brindea</h1>
        <section className="social-links">
            <a href="mailto:andreeabrindea61@gmail.com"><img src={mailIcon} className="social-links-icon" alt='mail icon'/></a>
            <a href="https://www.linkedin.com/in/andreea-florina-brindea/" target="_blank"><img src={linkedinIcon} className="social-links-icon" alt='linkedin icon'/></a>
            <a href="https://github.com/andreeabrindea" target="_blank"><img src={githubIcon} className="social-links-icon" alt='github icon'/></a>
        </section>
        <p>Hello! I am Andreea, an aspiring <b>Fullstack Software Developer</b> with a penchant for silly-looking frontends and bug-free backends. Currently navigating the fascinating seas of Data Science.</p>
    </div>
        <img id="profile-photo" src={profilePhoto}/>
</header>
    <main>
    <p style={{width: "32vw", marginTop: "4vh"}}>My journey has taken me through diverse internships, from donning the Quality Assurance cape to weaving magic as a Backend Developer and frolicking in the whimsical realms of Frontend Development. Along the way, I've discovered my passion for crafting interfaces that are as visually pleasing as they are functional, and tinkering with code to create seamless digital experiences.</p>
    </main>
    </>
  )
}

export default Home;
