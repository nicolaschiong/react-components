import Image from "next/image"
import { useState } from "react"
import styles from "./ReloadButton.module.css"
import icon from "./reload.svg"
import classNames from "classnames"

import { Poppins } from "@next/font/google"
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
})

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const ReloadButton = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleClick = async () => {
    setIsLoading(true)
    await delay(3000)
    setIsLoading(false)
  }

  return (
    <button
      disabled={isLoading}
      onClick={handleClick}
      className={classNames(styles.button, { [styles.loading]: isLoading })}
    >
      <Image src={icon} alt="loading" />
      <span className={poppins.className}>
        {isLoading ? "Reloading" : "Reload App"}
      </span>
    </button>
  )
}
