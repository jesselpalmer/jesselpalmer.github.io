var PageHeader = React.createClass({displayName: 'PageHeader',
  render: function() {
    return (
      <div className="page-header">
        <h1><a href="http://jesselpalmer.com">Jesse Palmer</a></h1>
      </div>
    )
  }
});

ReactDOM.render(
  React.createElement(PageHeader, null),
  document.getElementById('page-header')
);

var Tagline = React.createClass({displayName: 'Tagline',
  render: function() {
    return (
        <div>
        <p className="lead">
          Hello there! I'm a Master Software Engineer at Capital One who resides in&nbsp;
          <a href="http://en.wikipedia.org/wiki/Arlington_County,_Virginia">Arlington, VA</a>.
        </p>
      </div>
    )
  }
});

ReactDOM.render(
  React.createElement(Tagline, null),
  document.getElementById('tagline')
);

var Books = React.createClass({displayName: 'Books',
  render: function() {
    return (
      <dl>
        <dt><h3>Books</h3></dt>
        <dd><i className="fa fa-book"></i>
          &nbsp;Testing Angular 2 Applications, Manning Publications, est. 2017 (Author)
        </dd>
        <dd><i className="fa fa-book"></i>&nbsp;
        <a href="http://jesselpalmer.com/docs/AngularJS.Up.And.Running.Technical.Reviewer.Clip.pdf">AngularJS Up and Running, O'Reilly Media, 2014 (Technical Reviewer)</a></dd>
        <dd><i className="fa fa-book"></i>&nbsp;<a href="http://jesselpalmer.com/docs/Head.First.JavaScript.Programming.Technical.Reviewer.Clips.pdf">Head First JavaScript, O'Reilly Media, 2013 (Technical Reviewer)</a></dd>
      </dl>
    )
  }
});

ReactDOM.render(
  React.createElement(Books, null),
  document.getElementById('books')
);

var OpenSourceContributions = React.createClass({displayName: 'OpenSourceContributions',
  render: function() {
    return (
      <dl>
        <dt><h3>Open Source Contributions</h3></dt>
        <dd><i className="fa fa-file-code-o"></i>&nbsp;<a href="https://github.com/angular/angular.js/commits?author=jesselpalmer">AngularJS</a></dd>
        <dd><i className="fa fa-file-code-o"></i>&nbsp;<a href="https://github.com/angular/material/commits?author=jesselpalmer">Angular Material</a></dd>
        <dd><i className="fa fa-file-code-o"></i>&nbsp;<a href="https://github.com/dart-lang/www.dartlang.org/commits?author=jesselpalmer">Dart</a></dd>
        <dd><i className="fa fa-file-code-o"></i>&nbsp;<a href="https://github.com/Polymer/core-input/commits?author=jesselpalmer">Polymer</a></dd>
        <dd><i className="fa fa-file-code-o"></i>&nbsp;<a href="https://github.com/angular/protractor/commits?author=jesselpalmer">Protractor</a></dd>
      </dl>
    )
  }
});

ReactDOM.render(
  React.createElement(OpenSourceContributions, null),
  document.getElementById('open-source-contributions')
);

var Presentations = React.createClass({displayName: 'Presentations',
  render: function() {
    return (
      <dl>
        <dt><h3>Presentations</h3></dt>
        <dd><i className="fa fa-file-powerpoint-o"></i>&nbsp;<a href="https://docs.google.com/presentation/d/1Kafn_dzmLqV-lNL1uFszJz8PnQbrG2dglAsi3UinzIQ/edit?usp=sharing">Getting Started with Contributing to Open Source</a></dd>
        <dd><i className="fa fa-file-powerpoint-o"></i>&nbsp;<a href="https://docs.google.com/presentation/d/1Jb7P5Yreq168Gz4ieHJI_xZIgVAf3RP2twULK6rBScg/edit?usp=sharing">mini ng-conf 2015</a></dd>
        <dd><i className="fa fa-file-powerpoint-o"></i>&nbsp;<a href="https://docs.google.com/presentation/d/1MCHSRHPJ2w8Y1ly4HDku3w_cdg1sIuGDWhkfriPBJG8/edit#slide=id.p">Coding Style 101</a></dd>
      </dl>
    )
  }
});

ReactDOM.render(
  React.createElement(Presentations, null),
  document.getElementById('presentations')
);

var Community = React.createClass({displayName: 'Community',
  render: function() {
    return (
      <dl>
        <dt><h3>Community</h3></dt>
        <dd><i className="fa fa-users"></i>&nbsp;<a href="http://www.tysonsjs.com">tysons.js Meetup (Organizer)</a></dd>
      </dl>
    )
  }
});

ReactDOM.render(
  React.createElement(Community, null),
  document.getElementById('community')
);

var WebApps = React.createClass({displayName: 'WebApps',
  render: function() {
    return (
      <dl>
        <dt><h3>Web Apps</h3></dt>
        <dd><i className="fa fa-gamepad"></i>&nbsp;<a href="http://jesselpalmer.com/labs/brickbreaker">Brick Breaker</a> (<i className="fa fa-file-code-o"></i>&nbsp;<a href="http://github.com/jesselpalmer/brick-breaker">Source Code</a>)</dd>
        <dd><i className="fa fa-gamepad"></i>&nbsp;<a href="http://jesselpalmer.com/labs/paddlebattle">Paddle Battle</a> (<i className="fa fa-file-code-o"></i>&nbsp;<a href="http://github.com/jesselpalmer/paddle-battle">Source Code</a>)</dd>
        <dd><i className="fa fa-gamepad"></i>&nbsp;<a href="http://jesselpalmer.com/labs/hangman">Hangman</a> (<i className="fa fa-file-code-o"></i>&nbsp;<a href="http://github.com/jesselpalmer/hangman">Source Code</a>)</dd>
        <dd><i className="fa fa-map"></i>&nbsp;<a href="http://distance-finder.appspot.com/">Distance Finder</a> (<i className="fa fa-file-code-o"></i>&nbsp;<a href="http://github.com/jesselpalmer/distance-finder">Source Code</a>)
        </dd>
      </dl>
    )
  }
});

ReactDOM.render(
  React.createElement(WebApps, null),
  document.getElementById('web-apps')
);

var Libraries = React.createClass({displayName: 'Libraries',
  render: function() {
    return (
      <dl>
        <dt><h3>Libraries</h3></dt>
        <dd><i className="fa fa-file-code-o"></i>&nbsp;<a href="https://github.com/jesselpalmer/collision.js">collision.js</a></dd>
      </dl>
    )
  }
});

ReactDOM.render(
  React.createElement(Libraries, null),
  document.getElementById('libraries')
);

var SocialNetworks = React.createClass({displayName: 'SocialNetworks',
  render: function() {
    return (
      <dl>
        <dt><h3>Social Networks</h3></dt>
        <dd><i className="fa fa-wordpress"></i>&nbsp;<a href="http://jesselpalmer.com/blog">Blog</a></dd>
        <dd><i className="fa fa-github-square"></i>&nbsp;<a href="http://github.com/jesselpalmer">GitHub</a></dd>
        <dd><i className="fa fa-linkedin-square"></i>&nbsp;<a href="http://linkedin.com/in/jesselpalmer">LinkedIn</a></dd>
        <dd><i className="fa fa-twitter-square"></i>&nbsp;<a href="http://twitter.com/jesselpalmer">Twitter</a></dd>
        <dd><i className="fa fa-google-plus-square"></i>&nbsp;<a href="http://plus.google.com/103647743417859490624">Google+</a></dd>
      </dl>
    )
  }
});

ReactDOM.render(
  React.createElement(SocialNetworks, null),
  document.getElementById('social-networks')
);

var ContactMe = React.createClass({displayName: 'ContactMe',
  render: function() {
    return (
      <dl>
        <dt><h3>Contact Me</h3></dt>
        <address>
          <dd><i className="fa fa-envelope"></i>&nbsp;<a href="mailto:jesselpalmer@gmail.com">jesselpalmer@gmail.com</a></dd>
        </address>
      </dl>
    )
  }
});

ReactDOM.render(
  React.createElement(ContactMe, null),
  document.getElementById('contact-me')
);

var PageFooter = React.createClass({displayName: 'PageFooter',
  render: function() {
    return (
      <div>
        <hr />
        <p>&copy; Jesse Palmer 2016</p>
      </div>
    )
  }
});

ReactDOM.render(
  React.createElement(PageFooter, null),
  document.getElementById('page-footer')
);