import BaseRepository from '@/api/base-repository'

const resource = '/file'

export default {

  localUpload(payload: FormData) {
    return BaseRepository.post(`${resource}/local/upload`, payload)
  },
  multiFileUploads(payload: FormData) {
    return BaseRepository.post(`${resource}/local/uploads`, payload)
  },
}