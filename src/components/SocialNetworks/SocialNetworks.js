import React from 'react'
import ContentSection from '../ContentSection'

const socialNetworksData = {
  title: 'Social Networks',
  items: [
    {
      iconType: 'github',
      itemUrl: 'http://github.com/jesselpalmer',
      itemTitle: 'GitHub'
    },
    {
      iconType: 'linkedin',
      itemUrl: 'http://linkedin.com/in/jesselpalmer',
      itemTitle: 'LinkedIn'
    },
    {
      iconType: 'twitter',
      itemUrl: 'http://twitter.com/jesselpalmer',
      itemTitle: 'Twitter'
    }
  ]
}

const SocialNetworks = props => (
  <div>
    <ContentSection sectionTitle={socialNetworksData.title} itemsData={socialNetworksData} />
  </div>
)

export default SocialNetworks
