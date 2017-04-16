import React from 'react'
import ContentSection from '../ContentSection'

const presentationsData = {
  items: [
    {
      iconType: 'presentation',
      itemUrl: 'https://docs.google.com/presentation/d/1Kafn_dzmLqV-lNL1uFszJz8PnQbrG2dglAsi3UinzIQ/edit?usp=sharing',
      itemTitle: 'Getting Started with Contributing to Open Source'
    },
    {
      iconType: 'presentation',
      itemUrl: 'https://docs.google.com/presentation/d/1Jb7P5Yreq168Gz4ieHJI_xZIgVAf3RP2twULK6rBScg/edit?usp=sharing',
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
    <ContentSection sectionTitle='Presentations' itemsData={presentationsData} />
  </div>
)

export default Presentations
