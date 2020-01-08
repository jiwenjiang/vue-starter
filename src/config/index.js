let config = {
  baseUrl: 'http://192.168.4.134/temple',
  mapUrl: 'https://map.parkbobo.com/gis-server',
  urlVersion: 'v1', // url 版本
  version: 'v3.1' // 项目版本
}

if (process.env.NODE_ENV === 'production') {
  config = window.config
}

export default config
