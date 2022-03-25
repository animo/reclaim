import { motion } from 'framer-motion'
import React from 'react'

import { buttonHover, fadeDelay } from '../FramerAnimations'

interface CredentialCardProps {
  title: string
  cardColor: string
  imagePath?: string
  subTitle?: string
  organizationsCount?: number
  onClaim?: () => void
}

const styles = (cardColor: string): Record<string, React.CSSProperties> => {
  return {
    card: {
      backgroundColor: cardColor,
      width: 330,
      height: 210,
      borderRadius: 20,
      padding: 15,
      position: 'relative',
      color: 'white',
      margin: 20,
      marginBottom: 40,
    },
    headerContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    imageContainer: {
      borderRadius: 10,
      width: 60,
      height: 60,
      backgroundColor: 'white',
      marginRight: 15,
      display: 'flex',
      color: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 24,
    },
    subTitle: {
      fontSize: 18,
    },
    organizationContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'absolute',
      bottom: 15,
    },
    button: {
      position: 'absolute',
      right: 20,
      bottom: 20,
    },
  }
}

export const CredentialCard: React.FC<CredentialCardProps> = ({
  cardColor,
  title,
  imagePath,
  organizationsCount,
  subTitle,
  onClaim,
}) => {
  const style = styles(cardColor)

  return (
    <div style={style.card} className="shadow-lg">
      <div style={style.headerContainer}>
        <div style={style.imageContainer}>
          {imagePath ? <div>IMG</div> : <h1 style={{ fontWeight: 'bold' }}>{title[0]}</h1>}
        </div>
        <div style={style.titlesContainer}>
          <h1 style={style.title}>{title}</h1>
          {subTitle && <h3 style={style.subTitle}>By {subTitle}</h3>}
        </div>
      </div>
      <div>
        {organizationsCount && (
          <div style={style.organizationContainer}>
            <p>Organizations</p> <b>{organizationsCount}</b>
          </div>
        )}
      </div>
      <motion.button
        style={style.button}
        variants={fadeDelay}
        whileHover={buttonHover}
        className="bg-animo-white text-animo-black py-3 px-5 rounded-lg font-semibold shadow-sm dark:shadow-none select-none "
        onClick={onClaim}
      >
        claim
      </motion.button>
    </div>
  )
}
