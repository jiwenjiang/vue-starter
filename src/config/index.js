let config = {
  baseUrl: 'http://192.168.4.134/temple',
  // baseUrl: 'http://192.168.4.241:1020/temple',
  mapUrl: 'http://192.168.4.202/'
}

if (process.env.NODE_ENV === 'production') {
  config = window.config
}

export default config
