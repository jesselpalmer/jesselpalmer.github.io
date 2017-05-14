import React from 'react'
import './ContactSection.css'

const contentSectionIcons = {
  angellist: 'fa fa-angellist',
  book: 'fa fa-book',
  code: 'fa fa-file-code-o',
  email: 'fa fa-envelope-o',
  github: 'fa fa-github',
  googleplus: 'fa fa-google-plus',
  linkedin: 'fa fa-linkedin',
  presentation: 'fa fa-file-powerpoint-o',
  quora: 'fa fa-quora',
  stackoverflow: 'fa fa-stack-overflow',
  twitter: 'fa fa-twitter'
}

const ContentSection = props => {
  const data = props.itemsData

  const items = data.items.map((project, i) => {
    const icon = iconType => {
      const classType = contentSectionIcons[iconType]
      return (<span className={classType} />)
    }

    return (
      <dd key={i}>{icon(project.iconType)}&nbsp;
        { project.itemUrl ? <a href={project.itemUrl}>{project.itemTitle}</a> : project.itemTitle }
      </dd>
    )
  })

  return (
    <section id={props.sectionTitle}>
      <dl>
        <dt><h3>{props.sectionTitle}</h3></dt>
        {items}
      </dl>
    </section>
  )
}

export default ContentSection
