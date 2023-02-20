import { useState } from "react"
import styles from "./LoaderButton.module.css"
import iconSettings from "./settings.svg"
import Image from "next/image"
import classNames from "classnames"

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

import { Poppins } from "@next/font/google"
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
})

export const LoaderButton = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleClick = async () => {
    setIsLoading(true)
    await delay(3500)
    setIsLoading(false)
  }

  return (
    <button
      onClick={handleClick}
      // className={button ${isLoading ? "loading" : ""}`}
      // className={styles.button}
      className={classNames(styles.button, { [styles.loading]: isLoading })}
    >
      <Image src={iconSettings} alt="gear" />
      <span className={poppins.className}>
        {isLoading ? "Deploying" : "Deploy Site"}
      </span>
    </button>
  )
}
