import BaseRepository from '@/api/base-repository'

const resource = '/article'

export default {

  search(data: any) {
    return BaseRepository.get(`${resource}/search`, {
      params: data,
    })
  },
}