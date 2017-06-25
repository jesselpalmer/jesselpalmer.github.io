import React from 'react'
import ContentSection from '../ContentSection'

const contactMeData = {
  sectionTitle: 'Contact Me',
  items: [
    {
      iconType: 'email',
      itemUrl: 'mailto:jesselpalmer@gmail.com',
      itemTitle: 'jesselpalmer@gmail.com'
    }
  ]
}

const ContactMe = () => (
  <div>
    <ContentSection sectionTitle={contactMeData.sectionTitle} itemsData={contactMeData} />
  </div>
)

export default ContactMe
