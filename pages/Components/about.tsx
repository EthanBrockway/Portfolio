import Image from "next/image"
import profilePic from "../../public/images/EthanPFP.png"
import jsicon from "../../public/images/java-script (1).png"
import csharpIcon from "../../public/images/c-sharp.png"
import cssIcon from "../../public/images/css.png"
import reactIcon from "../../public/images/react.png"
import unityIcon from "../../public/images/unity.png"
import htmlIcon from "../../public/images/html-5.png"
import mysqlIcon from "../../public/images/mysql.png"
import graphqlIcon from "../../public/images/graphql.png"
import typescriptIcon from "../../public/images/typescript.png"
import expressIcon from "../../public/images/express.png"
import Typewriter from "typewriter-effect"
export default function AboutSection() {
  return (
    
      <div className="card">
        <Image
          className="portfolio-image"
          src={profilePic}
          width="200"
          height="250"
          alt="Picture of Developer"
        />
        <div className="about-text">
          <h1 className="typewriter-h1">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 70,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hello, I am Ethan Brockway")
                  .pauseFor(1000)
                  .deleteChars(14)
                  .typeString("A programmer")
                  .pauseFor(1000)
                  .deleteChars(10)
                  .typeString("FullStack Developer")
                  .pauseFor(1000)
                  .deleteChars(19)
                  .typeString("Game Developer")
                  .pauseFor(1000)
                  .start()
              }}
            />
          </h1>
          <p>
            I have loved all things technology since before I can remember.
            Becoming a programmer has always been a dream of mine that I finally
            started pursuing in late 2021. After taking my extensive software
            development boot-camp I have made different projects on my own time.
            Including a c# unity game to challenge my learning skills even
            further.
          </p>
          <div className="icons">
            {" "}
            <Image
              className="icon-image"
              src={csharpIcon}
              width="35"
              height="35"
              alt="Icon"
            />
            <Image
              className="icon-image"
              src={jsicon}
              width="35"
              height="35"
              alt="Icon"
            />
            <Image
              className="icon-image"
              src={typescriptIcon}
              width="35"
              height="35"
              alt="Icon"
            />
            <Image
              className="icon-image"
              src={reactIcon}
              width="35"
              height="35"
              alt="Icon"
            />
            <Image
              className="icon-image"
              src={cssIcon}
              width="35"
              height="35"
              alt="Icon"
            />
            <Image
              className="icon-image"
              src={htmlIcon}
              width="35"
              height="35"
              alt="Icon"
            />
            <Image
              className="icon-image"
              src={expressIcon}
              width="35"
              height="35"
              alt="Icon"
            />
            <Image
              className="icon-image"
              src={unityIcon}
              width="35"
              height="35"
              alt="Icon"
            />
            <Image
              className="icon-image"
              src={mysqlIcon}
              width="35"
              height="35"
              alt="Icon"
            />
            <Image
              className="icon-image"
              src={graphqlIcon}
              width="35"
              height="35"
              alt="Icon"
            />
          </div>
        </div>
      
    </div>
  )
}
