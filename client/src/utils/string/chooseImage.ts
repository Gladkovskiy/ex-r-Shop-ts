export const image = (hover: boolean, img_url: string[]): string => {
  if (img_url.length < 2) return img_url[0]

  return hover ? img_url[1] : img_url[0]
}
