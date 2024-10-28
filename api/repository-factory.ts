import ArticleRepository from "@/api/article-repository";
import get from "lodash.get";
import FileRepository from "@/api/file-repository";
const repositories = {
  article: ArticleRepository,
  file: FileRepository,
}

export const RepositoryFactory: {
  get: (name: 'article' | 'file') => any
} = {
  get: (name: 'article' | 'file') => get(repositories, name)
}