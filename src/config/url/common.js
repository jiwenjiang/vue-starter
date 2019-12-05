import config from '@/config'

const { baseUrl, urlVersion } = config

const url = {
  mapService: `${baseUrl}/hospService/${urlVersion}/getAllService`
}

export default url
