function PageHeader(props) {
  return (
    <div className="page-header">
      <h1><a href="http://jesselpalmer.com">{props.myName}</a></h1>
    </div>
  )
}

ReactDOM.render(
  <PageHeader myName="Jesse Palmer" />,
  document.getElementById('page-header')
);

function Tagline() {
  return (
    <div>
      <p className="lead">
        Hello there! I'm a Master Software Engineer at Capital One who resides in&nbsp;
        <a href="http://en.wikipedia.org/wiki/Arlington_County,_Virginia">Arlington, VA</a>.
      </p>
    </div>
  )
}

ReactDOM.render(
  <Tagline />,
  document.getElementById('tagline')
);

function Books(props) {
  return (
    <dl>
      <dt><h3>{props.sectionTitle}</h3></dt>
      <dd><i className="fa fa-book" />
        &nbsp;Testing Angular 2 Applications, Manning Publications, est. 2017 (Author)
      </dd>
      <dd>
        <i className="fa fa-book" />&nbsp;
          <a href="http://jesselpalmer.com/docs/AngularJS.Up.And.Running.Technical.Reviewer.Clip.pdf">
              AngularJS Up and Running, O'Reilly Media, 2014 (Technical Reviewer)
          </a>
      </dd>
      <dd>
        <i className="fa fa-book" />&nbsp;
          <a href="http://jesselpalmer.com/docs/Head.First.JavaScript.Programming.Technical.Reviewer.Clips.pdf">
              Head First JavaScript, O'Reilly Media, 2013 (Technical Reviewer)
          </a>
      </dd>
    </dl>
  )
}

ReactDOM.render(
  <Books sectionTitle="Books" />,
  document.getElementById('books')
);

function OpenSourceContributions(props) {
    return (
      <dl>
        <dt><h3>{props.sectionTitle}</h3></dt>
        <dd><i className="fa fa-file-code-o" />&nbsp;
            <a href="https://github.com/angular/angular.js/commits?author=jesselpalmer">AngularJS</a>
        </dd>
        <dd><i className="fa fa-file-code-o" />&nbsp;
            <a href="https://github.com/angular/material/commits?author=jesselpalmer">Angular Material</a>
        </dd>
        <dd><i className="fa fa-file-code-o" />&nbsp;
            <a href="https://github.com/dart-lang/www.dartlang.org/commits?author=jesselpalmer">Dart</a>
        </dd>
        <dd><i className="fa fa-file-code-o" />&nbsp;
            <a href="https://github.com/Polymer/core-input/commits?author=jesselpalmer">Polymer</a>
        </dd>
        <dd><i className="fa fa-file-code-o" />&nbsp;
            <a href="https://github.com/angular/protractor/commits?author=jesselpalmer">Protractor</a>
        </dd>
      </dl>
    )
}

ReactDOM.render(
  <OpenSourceContributions sectionTitle="Open Source Contributions" />,
  document.getElementById('open-source-contributions')
);

function Presentations(props) {
  return (
    <dl>
      <dt><h3>{props.sectionTitle}</h3></dt>
      <dd><i className="fa fa-file-powerpoint-o" />&nbsp;
          <a
            href="https://docs.google.com/presentation/d/1Kafn_dzmLqV-lNL1uFszJz8PnQbrG2dglAsi3UinzIQ/edit?usp=sharing">
              Getting Started with Contributing to Open Source
          </a>
      </dd>
      <dd><i className="fa fa-file-powerpoint-o" />&nbsp;
          <a
            href="https://docs.google.com/presentation/d/1Jb7P5Yreq168Gz4ieHJI_xZIgVAf3RP2twULK6rBScg/edit?usp=sharing">
              mini ng-conf 2015
          </a>
      </dd>
      <dd><i className="fa fa-file-powerpoint-o" />&nbsp;
          <a
            href="https://docs.google.com/presentation/d/1MCHSRHPJ2w8Y1ly4HDku3w_cdg1sIuGDWhkfriPBJG8/edit#slide=id.p">
              Coding Style 101
          </a>
      </dd>
    </dl>
  )
}

ReactDOM.render(
  <Presentations sectionTitle="Presentations" />,
  document.getElementById('presentations')
);

function Community(props) {
  return (
    <dl>
      <dt><h3>{props.sectionTitle}</h3></dt>
      <dd><i className="fa fa-users" />&nbsp;<a href="http://www.tysonsjs.com">tysons.js Meetup (Organizer)</a></dd>
    </dl>
  )
}

ReactDOM.render(
  <Community sectionTitle="Community" />,
  document.getElementById('community')
);

function WebApps(props) {
  return (
    <dl>
      <dt><h3>{props.sectionTitle}</h3></dt>
      <dd><i className="fa fa-gamepad" />&nbsp;
        <a href="http://jesselpalmer.com/labs/brickbreaker">Brick Breaker</a>
        (<i className="fa fa-file-code-o" />&nbsp;
        <a href="http://github.com/jesselpalmer/brick-breaker">Source Code</a>)
      </dd>
      <dd><i className="fa fa-gamepad" />&nbsp;
        <a href="http://jesselpalmer.com/labs/paddlebattle">Paddle Battle</a>
        (<i className="fa fa-file-code-o" />&nbsp;
        <a href="http://github.com/jesselpalmer/paddle-battle">Source Code</a>)
      </dd>
      <dd><i className="fa fa-gamepad" />&nbsp;
        <a href="http://jesselpalmer.com/labs/hangman">Hangman</a>
        (<i className="fa fa-file-code-o" />&nbsp;
        <a href="http://github.com/jesselpalmer/hangman">Source Code</a>)
      </dd>
      <dd>
        <i className="fa fa-map" />&nbsp;
        <a href="http://distance-finder.appspot.com/">Distance Finder</a>
        (<i className="fa fa-file-code-o" />&nbsp;
        <a href="http://github.com/jesselpalmer/distance-finder">Source Code</a>)
      </dd>
    </dl>
  )
}

ReactDOM.render(
  <WebApps sectionTitle="WebApps" />,
  document.getElementById('web-apps')
);

function Libraries(props) {
  return (
    <dl>
      <dt><h3>{props.sectionTitle}</h3></dt>
      <dd>
          <i className="fa fa-file-code-o" />&nbsp;
          <a href="https://github.com/jesselpalmer/collision.js">collision.js</a>
      </dd>
    </dl>
  )
}

ReactDOM.render(
  <Libraries sectionTitle="Libraries" />,
  document.getElementById('libraries')
);

function SocialNetworks(props) {
  return (
    <dl>
      <dt><h3>{props.sectionTitle}</h3></dt>
      <dd>
          <i className="fa fa-wordpress" />&nbsp;<a href="http://jesselpalmer.com/blog">Blog</a>
      </dd>
      <dd>
          <i className="fa fa-github-square" />&nbsp;<a href="http://github.com/jesselpalmer">GitHub</a>
      </dd>
      <dd>
          <i className="fa fa-linkedin-square" />&nbsp;<a href="http://linkedin.com/in/jesselpalmer">LinkedIn</a>
      </dd>
      <dd>
          <i className="fa fa-twitter-square" />&nbsp;<a href="http://twitter.com/jesselpalmer">Twitter</a>
      </dd>
      <dd>
          <i className="fa fa-google-plus-square" />&nbsp;
          <a href="http://plus.google.com/103647743417859490624">Google+</a>
      </dd>
    </dl>
  )
}

ReactDOM.render(
  <SocialNetworks sectionTitle="Social Networks" />,
  document.getElementById('social-networks')
);

function ContactMe(props) {
  return (
    <dl>
      <dt><h3>{props.sectionTitle}</h3></dt>
      <address>
        <dd>
            <i className="fa fa-envelope" />&nbsp;<a href="mailto:jesselpalmer@gmail.com">jesselpalmer@gmail.com</a>
        </dd>
      </address>
    </dl>
  )
}

ReactDOM.render(
  <ContactMe sectionTitle="Contact Me" />,
  document.getElementById('contact-me')
);

function PageFooter(props) {
  return (
    <div>
      <hr />
      <p>&copy; {props.myName} 2016</p>
    </div>
  )
}

ReactDOM.render(
  <PageFooter myName="Jesse Palmer" />,
  document.getElementById('page-footer')
);