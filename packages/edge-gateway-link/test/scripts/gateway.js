export default {
  /**
   * @param {Request} request
   */
  async fetch(request) {
    const reqUrl = new URL(request.url)
    // We need to perform requests as path based per localhost subdomain resolution
    const subdomainCid = getCidFromSubdomainUrl(reqUrl)
    if (subdomainCid) {
      return new Response('Hello w3s.link! 😎')
    }

    throw new Error('no cid in request')
  },
}

/**
 * Parse subdomain URL and return cid
 *
 * @param {URL} url
 */
function getCidFromSubdomainUrl(url) {
  const splitHost = url.hostname.split('.ipfs.')

  if (!splitHost.length) {
    return undefined
  }

  return splitHost[0]
}
