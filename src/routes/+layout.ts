export const prerender = true;
// disables javascript on production, but not dev because it breaks hot module reloading
export const csr = import.meta.env.MODE === 'development';
