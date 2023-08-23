import Page from './news/[page]/page'

export default async function home() {
  return <Page params={{ page: 1 }} />
}