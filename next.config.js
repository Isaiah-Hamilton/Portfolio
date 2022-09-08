/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/dotfiles',
        destination: 'https://github.com/isaiah-hamilton/dotfiles',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/isaiah-hamilton',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/isaiah7hamilton',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/isaiah-hamilton-093361209/',
        permanent: true,
      },
    ]
  },
}
