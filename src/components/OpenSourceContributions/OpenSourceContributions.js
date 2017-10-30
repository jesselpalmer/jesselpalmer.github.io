import React from 'react'
import ContentSection from '../ContentSection'

const openSourceContributionsData = {
  items: [
    {
      iconType: 'code',
      itemUrl: 'https://github.com/angular/angular/commits?author=jesselpalmer',
      itemTitle: 'Angular'
    },
    {
      iconType: 'code',
      itemUrl: 'https://github.com/angular/angular.io/commits?author=jesselpalmer',
      itemTitle: 'Angular.io'
    },
    {
      iconType: 'code',
      itemUrl: 'https://github.com/angular/angular.js/commits?author=jesselpalmer',
      itemTitle: 'AngularJS'
    },
    {
      iconType: 'code',
      itemUrl: 'https://github.com/angular/angular-cli/commits?author=jesselpalmer',
      itemTitle: 'Angular CLI'
    },
    {
      iconType: 'code',
      itemUrl: 'https://github.com/angular/material/commits?author=jesselpalmer',
      itemTitle: 'Angular Material'
    },
    {
      iconType: 'code',
      itemUrl: 'https://github.com/angular/material2/commits?author=jesselpalmer',
      itemTitle: 'Angular Material 2'
    },
    {
      iconType: 'code',
      itemUrl: 'https://github.com/angular/angularfire2/commits?author=jesselpalmer',
      itemTitle: 'Angular Fire 2'
    },
    {
      iconType: 'code',
      itemUrl: 'https://github.com/dart-lang/www.dartlang.org/commits?author=jesselpalmer',
      itemTitle: 'Dart'
    },
    {
      iconType: 'code',
      itemUrl: 'https://github.com/Polymer/core-input/commits?author=jesselpalmer',
      itemTitle: 'Polymer'
    },
    {
      iconType: 'code',
      itemUrl: 'https://github.com/angular/protractor/commits?author=jesselpalmer',
      itemTitle: 'Protractor'
    }
  ]
}

const OpenSourceContributions = () => (
  <div>
    <ContentSection sectionTitle='Open Source Contributions' itemsData={openSourceContributionsData} />
  </div>
)

export default OpenSourceContributions
