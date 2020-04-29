const shortLinks = [
  { key: 'git', value: 'https://github.com/matthewjamesboyle' },
  { key: 'linkedin', value: 'https://www.linkedin.com/in/mattjamesboyle/' },
  { key: 'twitter', value: 'https://twitter.com/MattJamesBoyle' },
  { key: 'ukpf', value: 'https://reddit.com/r/ukpersonalfinance' },
]

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  r = request.url.split('/')

  res = matchReq(r[r.length - 1])

  if (res === null) {
    return new Response('404 :(', {
      headers: { 'content-type': 'text/plain' },
    })
  }

  return Response.redirect(res, 301)
}

function matchReq(part) {
  for (i = 0; i < shortLinks.length; i++) {
    j = shortLinks[i]
    if (part === j.key) {
      return j.value
    }
  }
  return null
}
