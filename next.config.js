const prod = process.env.NODE_ENV === 'production';
module.exports = {
  basePath: prod ? '/photos' : '',
  assetPrefix: prod ? '/photos/' : '',
};
