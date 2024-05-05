// for static site generation
// maybe this file should be renamed to '+page.ts'??
export const prerender = true;
// disables javascript on production, but not dev because it breaks hot module reloading
export const csr = import.meta.env.MODE === 'development';
// export const csr = false;
