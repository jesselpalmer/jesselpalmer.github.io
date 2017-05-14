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
    },
    {
      iconType: 'googleplus',
      itemUrl: 'http://plus.google.com/103647743417859490624',
      itemTitle: 'Google+'
    },
    {
      iconType: 'angellist',
      itemUrl: 'https://angel.co/jesselpalmer',
      itemTitle: 'Angel List'
    },
    {
      iconType: 'stackoverflow',
      itemUrl: 'http://stackoverflow.com/users/517797/jesse-palmer',
      itemTitle: 'Stack Overflow'
    },
    {
      iconType: 'quora',
      itemUrl: 'https://www.quora.com/profile/Jesse-Palmer-2',
      itemTitle: 'Quora'
    }
  ]
}

const SocialNetworks = props => (
  <div>
    <ContentSection sectionTitle={socialNetworksData.title} itemsData={socialNetworksData} />
  </div>
)

export default SocialNetworks
