import React from 'react'
import { socialMedia } from '../../../contants'
import styles from '../../../style'

const Footer = () => {
  return (
    <section className={`${styles.flexStart} ${styles.paddingY} flex-col`}>
    <div className="-ml-64">
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
      </div>
      </section>
  )
}

export default Footer