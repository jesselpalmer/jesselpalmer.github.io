import React from 'react'
import ContentSection from '../ContentSection'

const presentationsData = {
  sectionTitle: 'Speaking',
  items: [
    {
      iconType: 'presentation',
      itemUrl: 'https://www.slideshare.net/JessePalmer1/state-of-the-mobile-web-frameworks',
      itemTitle: 'The State of the Mobile Web Frameworks'
    },
    {
      iconType: 'presentation',
      itemUrl: 'https://docs.google.com/presentation/d/1Kafn_dzmLqV-lNL1uFszJz8PnQbrG2dglAsi3UinzIQ/edit?usp=sharing',
      itemTitle: 'Getting Started with Contributing to Open Source'
    },
    {
      iconType: 'presentation',
      itemUrl: 'https://www.slideshare.net/JessePalmer1/miningconf2015',
      itemTitle: 'mini ng-conf 2015'
    },
    {
      iconType: 'presentation',
      itemUrl: 'https://docs.google.com/presentation/d/1MCHSRHPJ2w8Y1ly4HDku3w_cdg1sIuGDWhkfriPBJG8/edit#slide=id.p',
      itemTitle: 'Coding Style 101'
    }
  ]
}

const Presentations = props => (
  <div>
    <ContentSection sectionTitle={presentationsData.sectionTitle} itemsData={presentationsData} />
  </div>
)

export default Presentations
