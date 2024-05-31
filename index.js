addEventListener('fetch', function(event) {
  const { request } = event;
  const response = handleRequest(request);
  event.respondWith(response);
});
// Thay
const dohEndpoints = [
    'https://dns1.nextdns.io/xxxxx',
    'https://dns1.nextdns.io/xxxxx',
    'https://dns1.nextdns.io/xxxxx',
    'https://dns1.nextdns.io/xxxxx',
    'https://dns1.nextdns.io/xxxxx',
    'https://dns1.nextdns.io/xxxxx',
    'https://dns1.nextdns.io/xxxxx',
    'https://dns1.nextdns.io/xxxxx',
    'https://dns1.nextdns.io/xxxxx',
    'https://dns1.nextdns.io/xxxxx',
  ];

let requestCounter = 0;

async function handleRequest(request) {
  const contype = 'application/dns-message';
  const { method, headers, url } = request;
  const { searchParams } = new URL(url);

  const currentEndpoint = dohEndpoints[requestCounter];

  if (method === 'GET' && searchParams.has('dns')) {
      const response = await fetch(currentEndpoint + '?dns=' + searchParams.get('dns'), {
          method: 'GET',
          headers: {
              'Accept': contype,
          }
      });

      // Increment the requestCounter for the next request
      requestCounter = (requestCounter + 1) % dohEndpoints.length;

      return response;
  } else if (method === 'POST' && headers.get('content-type') === contype) {
      const body = await request.arrayBuffer();
      const response = await fetch(currentEndpoint, {
          method: 'POST',
          headers: {
              'Accept': contype,
              'Content-Type': contype,
          },
          body: body,
      });

      // Increment the requestCounter for the next request
      requestCounter = (requestCounter + 1) % dohEndpoints.length;

      return response;
  } else {
      return new Response('', { status: 404 });
  }
}