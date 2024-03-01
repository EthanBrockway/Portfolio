import Image from "next/image"
import projectStyles from "./projects.module.css"
import { useState } from "react"
import classNames from "classnames"
import { motion } from "framer-motion"
import githubImg from "../../public/images/github.png"
import websiteIcon from "../../public/images/world-wide-web.png"
export default function Projects() {
  const [activeCard, setActiveCard] = useState<number>()

  return (
    <section className={projectStyles.section}>
      {/* Flarpy bard */}
      <motion.div
        layout
        draggable="false"
        transition={{
          layout: { duration: 1, type: "spring" },
        }}
        animate={{ x: 0 }}
        className={classNames(
          projectStyles.card,
          activeCard === 0
            ? projectStyles.cardActive
            : projectStyles.cardIsInactive
        )}
        onClick={() => {
          setActiveCard(0)
        }}
        style={{
          boxShadow: "0.7rem 0.7rem 0 rgb(29, 28, 28)",
          backgroundImage: "url(/images/flappybard.png)",
          backgroundColor: "#31a7b4",
        }}
      >
        <div className={projectStyles.title}>
          {activeCard === 0 && (
            <div className={projectStyles.list}>
              <ul>
                <motion.li
                  layout
                  initial={{ y: -40, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 0.5, type: "spring" },
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  Express
                </motion.li>
                <motion.li
                  layout
                  initial={{ y: -40, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 0.7, type: "spring" },
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  C#
                </motion.li>
                <motion.li
                  layout
                  initial={{ y: -40, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 0.9, type: "spring" },
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  JavaScript
                </motion.li>
                <motion.li
                  layout
                  initial={{ y: -40, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 1.1, type: "spring" },
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  Unity
                </motion.li>
                <motion.li
                  layout
                  initial={{ y: -40, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 1.3, type: "spring" },
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  MongoDB
                </motion.li>
              </ul>
            </div>
          )}
          <h1>Flarpy Bard</h1>
          {activeCard === 0 && (
            <div className={projectStyles.links}>
              <motion.a
                href="https://github.com/EthanBrockway/FlarpyBard"
                initial={{ y: 60, opacity: 0 }}
                animate={{
                  y: 0,

                  opacity: 1,
                  transition: { delay: 0.8, type: "springy" },
                }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.8 }}
              >
                <Image
                  className={projectStyles.icon}
                  src={githubImg}
                  width="50"
                  height="50"
                  alt="Picture of Developer"
                />
              </motion.a>
              <motion.a
                href="https://github.com/EthanBrockway/FlarpyBard"
                initial={{ y: 60, opacity: 0 }}
                animate={{
                  y: 0,

                  opacity: 1,
                  transition: { delay: 1.2, type: "springy" },
                }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.8 }}
              >
                <Image
                  className={projectStyles.icon}
                  src={websiteIcon}
                  width="50"
                  height="50"
                  alt="Picture of Developer"
                />
              </motion.a>
            </div>
          )}
        </div>
        {activeCard === 0 && (
          <p style={{ color: "white", fontSize: "26px" }}>
            Challenging myself to learn unity and C# I created simple online
            game where you tap to fly a bird through multiple pipes. Flying
            through more pipes before failing allows you to unlock new skins,
            create new highscores, and compete with your friends to be the best!
          </p>
        )}
      </motion.div>

      {/* Salon portfolio */}
      <motion.div
        layout
        draggable="false"
        transition={{
          layout: { duration: 1, type: "spring" },
        }}
        animate={{ x: 0 }}
        className={classNames(
          projectStyles.card,
          activeCard === 1
            ? projectStyles.cardActive
            : projectStyles.cardIsInactive
        )}
        onClick={() => {
          setActiveCard(1)
        }}
        style={{
          boxShadow: "0.7rem 0.7rem 0 rgb(29, 28, 28)",
          backgroundImage: "url(/images/salon.png)",
          backgroundColor: "#f3d4c3",
        }}
      >
        <div className={projectStyles.title}>
          {activeCard === 1 && (
            <div className={projectStyles.list}>
              <ul>
                <motion.li
                  layout
                  initial={{ y: -40, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 0.5, type: "spring" },
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  Express
                </motion.li>
                <motion.li
                  layout
                  initial={{ y: -40, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 0.7, type: "spring" },
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  C#
                </motion.li>
                <motion.li
                  layout
                  initial={{ y: -40, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 0.9, type: "spring" },
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  JavaScript
                </motion.li>
                <motion.li
                  layout
                  initial={{ y: -40, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 1.1, type: "spring" },
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  Unity
                </motion.li>
                <motion.li
                  layout
                  initial={{ y: -40, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 1.3, type: "spring" },
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  MongoDB
                </motion.li>
              </ul>
            </div>
          )}
          <h1>Salon Portfolio</h1>
          {activeCard === 1 && (
            <div className={projectStyles.links}>
              <motion.a
                href="https://github.com/EthanBrockway/luxe-salon"
                initial={{ y: 60, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.8, type: "springy" },
                }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.8 }}
              >
                <Image
                  className={projectStyles.icon}
                  src={githubImg}
                  width="50"
                  height="50"
                  alt="Picture of Developer"
                />
              </motion.a>
              <motion.a
                href="https://meghanandcarasbeauty.com/"
                initial={{ y: 60, opacity: 0 }}
                animate={{
                  y: 0,

                  opacity: 1,
                  transition: { delay: 1.2, type: "springy" },
                }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.8 }}
              >
                <Image
                  className={projectStyles.icon}
                  src={websiteIcon}
                  width="50"
                  height="50"
                  alt="Picture of Developer"
                />
              </motion.a>
            </div>
          )}
        </div>
        {activeCard === 1 && (
          <p style={{ color: "white", fontSize: "26px" }}>
            A website I built for my beautiful girlfriend to showcase her and
            her friends favorite hairstyles. It also has a brief description of
            each girls hobbies and specialties. This website was a fun one to
            build that reignited my understanding of css and HTML!
          </p>
        )}
      </motion.div>
      {/* Show Selector */}
      <motion.div
        layout
        draggable="false"
        transition={{
          layout: { duration: 1, type: "spring" },
        }}
        animate={{ x: 0 }}
        className={classNames(
          projectStyles.card,
          activeCard === 2
            ? projectStyles.cardActive
            : projectStyles.cardIsInactive
        )}
        onClick={() => {
          setActiveCard(2)
        }}
        style={{
          boxShadow: "0.7rem 0.7rem 0 rgb(29, 28, 28)",
          backgroundImage: "url(/images/showselector.png)",
          backgroundColor: "#060f2f",
        }}
      >
        <div className={projectStyles.title}>
          {activeCard === 2 && (
            <div className={projectStyles.list}>
              <ul>
                <motion.li
                  layout
                  initial={{ y: -40, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 0.5, type: "spring" },
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  Express
                </motion.li>
                <motion.li
                  layout
                  initial={{ y: -40, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 0.7, type: "spring" },
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  C#
                </motion.li>
                <motion.li
                  layout
                  initial={{ y: -40, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 0.9, type: "spring" },
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  JavaScript
                </motion.li>
                <motion.li
                  layout
                  initial={{ y: -40, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 1.1, type: "spring" },
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  Unity
                </motion.li>
                <motion.li
                  layout
                  initial={{ y: -40, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 1.3, type: "spring" },
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  MongoDB
                </motion.li>
              </ul>
            </div>
          )}
          <h1>Show Selector</h1>
          {activeCard === 2 && (
            <div className={projectStyles.links}>
              <motion.a
                href="https://github.com/EthanBrockway/show-selector"
                initial={{ y: 60, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.8, type: "springy" },
                }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.8 }}
              >
                <Image
                  className={projectStyles.icon}
                  src={githubImg}
                  width="50"
                  height="50"
                  alt="Picture of Developer"
                />
              </motion.a>
              <motion.a
                href="https://github.com/EthanBrockway/show-selector"
                style={{ backgroundColor: "white", borderRadius: "10px" }}
                initial={{ y: 60, opacity: 0 }}
                animate={{
                  y: 0,

                  opacity: 1,
                  transition: { delay: 1.2, type: "springy" },
                }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.8 }}
              >
                <Image
                  className={projectStyles.icon}
                  src={websiteIcon}
                  width="50"
                  height="50"
                  alt="Picture of Developer"
                />
              </motion.a>
            </div>
          )}
        </div>
        {activeCard === 2 && (
          <p style={{ color: "white", fontSize: "26px" }}>
            My final project for my software development bootcamp! We were
            challenged to work with a group of 3 other developers to create a
            fullstack program using an api of our choice. Unfortunatly the other
            people in the group ended up not doing the project and it is
            currently only an impressive graphQL backend coded by me!
          </p>
        )}
      </motion.div>
      {/* Inventory manager */}
      <motion.div
        layout
        draggable="false"
        transition={{
          layout: { duration: 1, type: "spring" },
        }}
        animate={{ x: 0 }}
        className={classNames(
          projectStyles.card,
          activeCard === 3
            ? projectStyles.cardActive
            : projectStyles.cardIsInactive
        )}
        onClick={() => {
          setActiveCard(3)
        }}
        style={{
          boxShadow: "0.7rem 0.7rem 0 rgb(29, 28, 28)",
          backgroundColor: "orange",
        }}
      >
        <div className={projectStyles.title}>
          {activeCard === 3 && (
            <div className={projectStyles.list}>
              <ul>
                <motion.li
                  layout
                  initial={{ y: -40, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 0.5, type: "spring" },
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  Express
                </motion.li>
                <motion.li
                  layout
                  initial={{ y: -40, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 0.7, type: "spring" },
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  C#
                </motion.li>
                <motion.li
                  layout
                  initial={{ y: -40, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 0.9, type: "spring" },
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  JavaScript
                </motion.li>
                <motion.li
                  layout
                  initial={{ y: -40, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 1.1, type: "spring" },
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  Unity
                </motion.li>
                <motion.li
                  layout
                  initial={{ y: -40, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 1.3, type: "spring" },
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  MongoDB
                </motion.li>
              </ul>
            </div>
          )}
          <h1 style={{ fontSize: "40px" }}>Inventory Manager</h1>
          {activeCard === 3 && (
            <div className={projectStyles.links}>
              <motion.a
                href="https://github.com/EthanBrockway"
                initial={{ y: 60, opacity: 0 }}
                animate={{
                  y: 0,

                  opacity: 1,
                  transition: { delay: 0.8, type: "springy" },
                }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.8 }}
              >
                <Image
                  className={projectStyles.icon}
                  src={githubImg}
                  width="50"
                  height="50"
                  alt="Picture of Developer"
                />
              </motion.a>
              <motion.a
                href="https://github.com/EthanBrockway"
                initial={{ y: 60, opacity: 0 }}
                animate={{
                  y: 0,

                  opacity: 1,
                  transition: { delay: 1.2, type: "springy" },
                }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.8 }}
              >
                <Image
                  className={projectStyles.icon}
                  src={websiteIcon}
                  width="50"
                  height="50"
                  alt="Picture of Developer"
                />
              </motion.a>
            </div>
          )}
        </div>
        {activeCard === 3 && (
          <p style={{ color: "white", fontSize: "26px" }}>Work In Progress!</p>
        )}
      </motion.div>
    </section>
  )
}
