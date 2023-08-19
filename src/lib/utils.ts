import { IMAGE_API_URL } from '@/configs'

export function getImageUrl(path: string) {
  return `${IMAGE_API_URL}${path}`
}

export function getPlaceholder() {
  return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8+vz1fwAJKAO48yd7dQAAAABJRU5ErkJggg=='
}
