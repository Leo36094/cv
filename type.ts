export {}
declare global {
  interface Window<T = any> {
    webket?: T;
    gtag?: T;
    dataLayer?: T;
    vue?: T;
  }
}
