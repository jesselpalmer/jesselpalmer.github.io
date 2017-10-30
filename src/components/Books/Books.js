import React from 'react'
import ContentSection from '../ContentSection'

const booksData = {
  sectionTitle: 'Books',
  items: [
    {
      iconType: 'book',
      itemUrl: 'https://manning.com/books/testing-angular-applications',
      itemTitle: 'Testing Angular Applications, Manning Publications, estimated release, early 2018 (Coauthor)'
    },
    {
      iconType: 'book',
      itemUrl: 'https://s3.amazonaws.com/aws-website-jesselpalmercom-2u9to/docs/AngularJS.Up.And.Running.Technical.Reviewer.Clip.pdf',
      itemTitle: 'AngularJS Up and Running, O\'Reilly Media, 2014 (Technical Reviewer)'
    },
    {
      iconType: 'book',
      itemUrl: 'https://s3.amazonaws.com/aws-website-jesselpalmercom-2u9to/docs/Head.First.JavaScript.Programming.Technical.Reviewer.Clips.pdf',
      itemTitle: 'Head First JavaScript, O\'Reilly Media, 2013 (Technical Reviewer)'
    }
  ]
}

const Books = () => (
  <div>
    <ContentSection sectionTitle={booksData.sectionTitle} itemsData={booksData} />
  </div>
)

export default Books
