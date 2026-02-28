export default async (request, context) => {
  const authHeader = request.headers.get('authorization');
  if (authHeader) {
    const decoded = atob(authHeader.replace('Basic ', ''));
    const pass = decoded.split(':')[1];
    if (pass === 'pursuits') return context.next();
  }
  return new Response('Unauthorized', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="PursuitsHQ Preview"' },
  });
};
export const config = { path: '/*' };
