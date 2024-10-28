import BaseRepository from '@/api/base-repository'

const resource = '/article'

export default {
  createArticle(payload: any) {
    return BaseRepository.post(`${resource}/`, payload)
  },
  search(data: any) {
    return BaseRepository.get(`${resource}/search`, {
      params: data,
    })
  },
}