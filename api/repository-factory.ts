import ArticleRepository from "@/api/article-repository";
import get from "lodash.get";
const repositories = {
  article: ArticleRepository,
}

export const RepositoryFactory: {
  get: (name: 'article') => any
} = {
  get: (name: 'article') => get(repositories, name)
}