import React from 'react'
import { useTranslation } from 'react-i18next'
import "./Copyright.css"

const Copyright = () => {

    const [t] = useTranslation("global")

  return (
    <div>
        <p>
            &copy; {t('footer.copy')}
        </p>
    </div>
  )
}

export default Copyright