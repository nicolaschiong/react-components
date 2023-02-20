import classNames from "classnames"
import { useState } from "react"
import styles from "./DeleteButton.module.css"

import { Poppins } from "@next/font/google"
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
})

export const DeleteButton = () => {
  const [isDeleting, setIsDeleting] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)

  const handleClick = () => {
    setIsDeleting(true)
    // do something async
    setTimeout(() => {
      setIsDeleting(false)
      setIsDeleted(true)
      setTimeout(() => {
        setIsDeleted(false)
      }, 1250)
    }, 2500)
  }

  return (
    <button
      onClick={handleClick}
      // className={isDeleting || isDeleted ? "deleting" : ""}
      className={classNames(styles.button, {
        [styles.deleting]: isDeleted || isDeleting,
      })}
      disabled={isDeleting || isDeleted}
    >
      <span className={classNames(styles.button_text, poppins.className)}>
        {isDeleting || isDeleted ? "Deleting" : "Delete"}
      </span>
      <span className={classNames(styles.animation)}>
        <span className={classNames(styles.balls)}></span>
        <span className={classNames(styles.lid)}></span>
        <span className={classNames(styles.can)}>
          <span className={classNames(styles.filler)}></span>
        </span>
      </span>
    </button>
  )
}
