const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: `https://github.com/BeagleDad/mhp-pub.git,`
  },
  () => {
    console.log('Deploy Complete!')
  }
)