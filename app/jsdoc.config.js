module.exports = {
  source: {
    include: ['.'],
    exclude: ['./node_modules'],
    includePattern: '.+\\.js(doc|x)?$',
    excludePattern: '(^|\\/|\\\\)_'
  },
  opts: {
    template: 'node_modules/docdash',
    destination: './__docs/'
  },
  recurseDepth: 10
};
