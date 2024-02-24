import Image from "next/image"
import profilePic from "../../public/images/EthanPFP.png"
import projectStyles from "./projects.module.css"
import { useState } from "react"
import classNames from "classnames"
import { motion } from "framer-motion"

export default function Projects() {
  const [activeCard, setActiveCard] = useState<number>()

  return (
    <section className={projectStyles.section}>
      {/* Flarpy bard */}
      <motion.div
        layout
        draggable="false"
        transition={{ layout: { duration: 1, type: "spring" } }}
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
          backgroundImage: "url(images/flappybard.png)",
          backgroundSize: "100% 100%",
          backgroundColor: "#31a7b4",
        }}
      >
        <motion.div layout className={projectStyles.title}>
          {activeCard === 0 && (
            <motion.div className={projectStyles.list}>
              <motion.ul>
                <motion.li>Express</motion.li>
                <motion.li>C#</motion.li>
                <motion.li>JavaScript</motion.li>
                <motion.li>Unity</motion.li>
                <motion.li>MongoDB</motion.li>
              </motion.ul>
            </motion.div>
          )}

          <motion.h1 layout>Flarpy Bard</motion.h1>
          {activeCard === 0 && (
            <div className={projectStyles.links}>
              <motion.a
                layout
                href="https://github.com/EthanBrockway"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <Image
                  className="icon"
                  src={profilePic}
                  width="35"
                  height="35"
                  alt="Picture of Developer"
                />
              </motion.a>
              <motion.a
                layout
                transition={{ duration: 0.5 }}
                href="https://github.com/EthanBrockway"
              >
                <Image
                  className="icon"
                  src={profilePic}
                  width="35"
                  height="35"
                  alt="Picture of Developer"
                />
              </motion.a>
            </div>
          )}
        </motion.div>
        {activeCard === 0 && (
          <p>
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
        transition={{ layout: { duration: 1, type: "spring" } }}
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
          backgroundSize: "100% 100%",
          backgroundColor: "#f3d4c3",
        }}
      >
        <motion.div layout className={projectStyles.title}>
          {activeCard === 1 && (
            <motion.div className={projectStyles.list}>
              <motion.ul>
                <motion.li>Express</motion.li>
                <motion.li>C#</motion.li>
                <motion.li>JavaScript</motion.li>
                <motion.li>Unity</motion.li>
                <motion.li>MongoDB</motion.li>
              </motion.ul>
            </motion.div>
          )}
          <h1>Salon Portfolio</h1>
          {activeCard === 1 && (
            <motion.div className={projectStyles.links}>
              <motion.a
                layout
                transition={{ hidden: { x: 0 } }}
                href="https://github.com/EthanBrockway"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <Image
                  className="icon"
                  src={profilePic}
                  width="35"
                  height="35"
                  alt="Picture of Developer"
                />
              </motion.a>

              <motion.a
                layout
                transition={{ duration: 0.5 }}
                href="https://github.com/EthanBrockway"
              >
                <Image
                  className="icon"
                  src={profilePic}
                  width="35"
                  height="35"
                  alt="Picture of Developer"
                />
              </motion.a>
            </motion.div>
          )}
        </motion.div>
        {activeCard === 1 && (
          <p>
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
                    transition: { delay: 0.8, type: "spring" },
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
                    transition: { delay: 1, type: "spring" },
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
                    transition: { delay: 1.2, type: "spring" },
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
                    transition: { delay: 1.4, type: "spring" },
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
                    transition: { delay: 1.6, type: "spring" },
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
                href="https://github.com/EthanBrockway"
                initial={{ y: 60, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 1, type: "springy" },
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <Image
                  className="icon"
                  src={profilePic}
                  width="35"
                  height="35"
                  alt="Picture of Developer"
                />
              </motion.a>
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
        draggable="false"
        transition={{ layout: { duration: 0.6, type: "spring" } }}
        layout
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
        <motion.div
          className={projectStyles.title}
          style={{ fontSize: "25px" }}
        >
          {activeCard === 3 && (
            <motion.div className={projectStyles.list}>
              <motion.ul>
                <motion.li>Express</motion.li>
                <motion.li>C#</motion.li>
                <motion.li>JavaScript</motion.li>
                <motion.li>Unity</motion.li>
                <motion.li>MongoDB</motion.li>
              </motion.ul>
            </motion.div>
          )}
          <h1>Inventory Manager</h1>
          {activeCard === 3 && (
            <div className={projectStyles.links}>
              <motion.a layout href="https://github.com/EthanBrockway">
                <Image
                  className="icon"
                  src={profilePic}
                  width="35"
                  height="35"
                  alt="Picture of Developer"
                />
              </motion.a>
              <motion.a layout href="https://github.com/EthanBrockway">
                <Image
                  className="icon"
                  src={profilePic}
                  width="35"
                  height="35"
                  alt="Picture of Developer"
                />
              </motion.a>
            </div>
          )}
        </motion.div>
        {activeCard === 3 && (
          <p style={{ fontSize: "50px" }}>WORK IN PROGRESS</p>
        )}
      </motion.div>
    </section>
  )
}
