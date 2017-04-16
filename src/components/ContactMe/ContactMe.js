import React from 'react'
import ContentSection from '../ContentSection'

const contactMeData = {
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
    <ContentSection sectionTitle='Contact Me' itemsData={contactMeData} />
  </div>
)

export default ContactMe
