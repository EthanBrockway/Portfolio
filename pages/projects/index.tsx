import Image from "next/image"
import profilePic from "../../public/images/EthanPFP.png"
import projectStyles from "./projects.module.css"
export default function Projects() {
  return (
    <section className={projectStyles.section}>
      <div className={projectStyles.card}>
        <Image
          className="project-image"
          src={profilePic}
          width="100"
          height="150"
          alt="Picture of project"
        />
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          quam, veritatis voluptatibus cum excepturi nobis, voluptatum, numquam
          cupiditate debitis rerum possimus nisi. Voluptates incidunt vitae
          consequatur! Dolore, eum illo. Expedita!
        </p>
        <a href="https://github.com/EthanBrockway">
          <Image
            className="icon"
            src={profilePic}
            width="35"
            height="35"
            alt="Picture of Developer"
          />
        </a>
        <a href="https://github.com/EthanBrockway">
          <Image
            className="icon"
            src={profilePic}
            width="35"
            height="35"
            alt="Picture of Developer"
          />
        </a>
      </div>
      <div className={projectStyles.card}>
        <Image
          className="project-image"
          src={profilePic}
          width="100"
          height="150"
          alt="Picture of Developer"
        />
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          quam, veritatis voluptatibus cum excepturi nobis, voluptatum, numquam
          cupiditate debitis rerum possimus nisi. Voluptates incidunt vitae
          consequatur! Dolore, eum illo. Expedita!
        </p>
        <a href="https://github.com/EthanBrockway">
          <Image
            className="icon"
            src={profilePic}
            width="35"
            height="35"
            alt="Picture of Developer"
          />
        </a>
        <a href="https://github.com/EthanBrockway">
          <Image
            className="icon"
            src={profilePic}
            width="35"
            height="35"
            alt="Picture of Developer"
          />
        </a>
      </div>
      <div className={projectStyles.card}>
        <Image
          className="project-image"
          src={profilePic}
          width="100"
          height="150"
          alt="Picture of Developer"
        />
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          quam, veritatis voluptatibus cum excepturi nobis, voluptatum, numquam
          cupiditate debitis rerum possimus nisi. Voluptates incidunt vitae
          consequatur! Dolore, eum illo. Expedita!
        </p>
        <a href="https://github.com/EthanBrockway">
          <Image
            className="icon"
            src={profilePic}
            width="35"
            height="35"
            alt="Picture of Developer"
          />
        </a>
        <a href="https://github.com/EthanBrockway">
          <Image
            className="icon"
            src={profilePic}
            width="35"
            height="35"
            alt="Picture of Developer"
          />
        </a>
      </div>
      <div className={projectStyles.card}>
        <Image
          className="project-image"
          src={profilePic}
          width="100"
          height="150"
          alt="Picture of Developer"
        />
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          quam, veritatis voluptatibus cum excepturi nobis, voluptatum, numquam
          cupiditate debitis rerum possimus nisi. Voluptates incidunt vitae
          consequatur! Dolore, eum illo. Expedita!
        </p>
        <a href="https://github.com/EthanBrockway">
          <Image
            className="icon"
            src={profilePic}
            width="35"
            height="35"
            alt="Picture of Developer"
          />
        </a>
        <a href="https://github.com/EthanBrockway">
          <Image
            className="icon"
            src={profilePic}
            width="35"
            height="35"
            alt="Picture of Developer"
          />
        </a>
      </div>
    </section>
  )
}
