const routes = {
  home: '/',

};

export const Url = (routeKey, params) => {
  let url = routes[routeKey] || routeKey;
  try {
    Object.keys(params).forEach((key) => {
      url = url.replace(`:${key}`, params[key]);
    });
  } catch (e) {
    console.error('Error in routes.js#Url(), routeKey is undefined');
  }
  return url;
};

export default routes;

