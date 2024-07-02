import contactStyles from "./contact.module.css"
import classNames from "classnames"
import { motion } from "framer-motion"
export default function Contact() {
  return (
    <div className={contactStyles.container}>
      <h1>Contact Me!!</h1>

      <form
        action="https://formsubmit.co/ebrockway01@gmail.com"
        method="POST"
        id="form1"
        className={contactStyles.contactForm}
      >
        <div
          className={classNames(contactStyles.firstInput, contactStyles.input)}
        >
          <input
            type="text"
            id={contactStyles.inputField}
            required
            placeholder="First Name"
            name="firstName"
          ></input>
        </div>
        <div
          className={classNames(contactStyles.lastInput, contactStyles.input)}
        >
          <input
            required
            type="text"
            id={contactStyles.inputField}
            placeholder="Last Name"
            name="lastName"
          ></input>
        </div>
        <div
          className={classNames(contactStyles.emailInput, contactStyles.input)}
        >
          <input
            required
            type="text"
            id={contactStyles.inputField}
            placeholder="Email"
            title="Please enter valid email address."
            pattern="^[\w\-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
            name="email"
          ></input>
        </div>
        <div
          className={classNames(contactStyles.numberInput, contactStyles.input)}
        >
          <input
            required
            type="tel"
            id={contactStyles.inputField}
            placeholder="(123)-123-1234"
            title="Please enter valid phone number."
            pattern="\(?([\d]{3})\)?[.\- ]?[\d]{3}[.\- ]?[\d]{4}"
            name="phoneNumber"
          ></input>
        </div>
        <div
          className={classNames(
            contactStyles.messageInput,
            contactStyles.input
          )}
        >
          <label for="message">Leave me a Message!</label>
          <textarea
            required
            type="text"
            id={contactStyles.message}
            placeholder="Ethan you are super awesome and I would love to offer you a position at our company."
            name="message"
          ></textarea>
        </div>
      </form>
      <motion.button
        className={contactStyles.submitBtn}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        type="submit"
        form="form1"
        value="submit"
      >
        Send Message!
      </motion.button>
      <div className={contactStyles.links}>
        <motion.a
          href="https://github.com/EthanBrockway"
          layout
          whileHover={{ scale: 1.1 }}
          className={contactStyles.github}
        >
          GitHub
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/ethan-brockway/"
          layout
          whileHover={{ scale: 1.1 }}
          className={contactStyles.linkedIn}
        >
          LinkedIn
        </motion.a>
        <motion.a className={contactStyles.phoneNumber}>479-719-1044</motion.a>
      </div>
    </div>
  )
}
