const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: `https://github.com/BeagleDad/mhphoto-themed.git`
  },
  () => {
    console.log('Deploy Complete!')
  }
)