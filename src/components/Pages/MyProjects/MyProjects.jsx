import React from 'react'
import { useTranslation } from 'react-i18next'


const MyProjects = () => {

  const [t] = useTranslation("global")

  return (
    <div className='projectsDisplay'>
        <h1>
          {t('main.projectsPage.h1')}
        </h1>
        <ul>
          <li>
            <a href="https://mb-construcciones-en-seco.com.ar/" target='BLANK_'>{t('main.projectsPage.projectsList.mbPVC')}</a>
          </li>
          <li>

          </li>
        </ul>
    </div>
  )
}

export default MyProjects