import config from '@/config'

const { baseUrl, urlVersion } = config

const url = {
  mapService: `${baseUrl}/hospService/${urlVersion}/getAllService`,
  uidConfig: `${baseUrl}/location/locMapZone/${urlVersion}/idToZone`
}

export default url
