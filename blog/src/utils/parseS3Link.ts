export const parseSrcS3ToHttps = (s3: string) => {
  return s3.replace('s3://wasedatime-feeds', 'https://wasedatime-feeds.s3-ap-northeast-1.amazonaws.com');
}
export const getArticleTitle = (s3: string) => {
  return s3.replace('s3://wasedatime-feeds/blogs/', '');
}