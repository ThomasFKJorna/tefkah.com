import { LinkObject } from './Post'
import { Octokit } from '@octokit/rest'
import { serialize as mdxSerialize } from 'next-mdx-remote/serialize'
import { cache } from 'react'
import { env } from '../../../env/server'

export const fetchpost = async ({
  repoOwner,
  repoName,
  branch,
  post,
}: {
  repoOwner: string
  repoName: string
  branch: string
  post: string
}) => {
  const rawpost = await fetch(`https://raw.githubusercontent.com/${repoOwner}/${repoName}/${branch}/${post}.md`)
  return rawpost.text()
}

export const escapeRegExp = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string

const makeURI = (path: string) => encodeURIComponent(path?.replace(/\.mdx?$/, ''))

export const fetchDir = cache(
  async ({
    repoOwner,
    repoName,
    branch,
  }: // redisUrl,
  // redisToken,
  {
    repoOwner: string
    repoName: string
    branch: string
  }) => {
    const octokit = new Octokit({
      auth: env.GITHUB_PAT,
    })

    const dir = (
      await octokit.git.getTree({
        owner: repoOwner,
        repo: repoName,
        tree_sha: branch as string,
        recursive: 'true',
      })
    ).data.tree.filter((item) => item.type === 'blob' && item?.path?.endsWith('.md'))

    return dir
  },
)

export const getProps = async (params: { post: string | string[]; branch?: string }) => {
  if (!params) {
    return {
      props: {
        rawpost: 'no params',
      },
    }
  }
  const { post, branch } = params ?? {}

  const currentBranch = branch ?? env.DEFAULT_BRANCH ?? 'main'

  const currentpost = typeof post === 'string' ? decodeURIComponent(post) : post?.join('/') ?? 'index'

  const rawpost = await fetchpost({
    repoOwner: env.REPO_OWNER,
    repoName: env.REPO,
    branch: currentBranch,
    post: currentpost,
  })
  // const currentpost = post

  const dir = await fetchDir({
    repoOwner: env.REPO_OWNER,
    repoName: env.REPO,
    branch: currentBranch,
    // redisUrl: env.UPSTASH_REDIS_REST_URL,
    // redisToken: env.UPSTASH_REDIS_REST_TOKEN,
  })

  const links =
    rawpost.match(/\[\[(.*?)\]\]/g)?.map((link) => {
      const [title, alias] = link.replace(/\[\[(.*?)(\|(.*?))?\]\]/, '$1±$3')?.split('±') ?? []
      const actualLink = dir.find((file) => new RegExp(`(^|/)${escapeRegExp(title)}\\.md`, 'i').test(file?.path ?? ''))
      return { title, alias, path: actualLink?.path ?? `${title}.md` }
    }) ?? []

  const linkTexts = (
    await Promise.all(
      links.map(async (link) => {
        const text = await fetchpost({
          repoOwner: env.REPO_OWNER,
          repoName: env.REPO,
          branch: currentBranch,
          post: encodeURIComponent(link.path.replace(/\.mdx?$/, '')),
        })
        console.log(text)
        // }) (
        //   await fetch(
        //     `https://raw.githubusercontent.com/${env.REPO_OWNER}/${
        //       env.REPO
        //     }/${currentBranch}/${encodeURIComponent(link.path)}`,
        //   )
        // ).text()

        return { ...link, text: text === '404: Not Found' ? null : text }
      }),
    )
  ).filter((link) => link.text)

  const linkies = await Promise.all(
    linkTexts?.map(async (link) => {
      const { title, alias, text, path } = link
      const linkTitle = alias || title
      const compiledText = await mdxSerialize(text!)
      return [
        title,
        {
          path,
          linkTitle,
          title,
          text: compiledText.compiledSource,
          frontMatter: compiledText.frontmatter,
        },
      ]
    }),
  )

  const linkMap: LinkObject = Object.fromEntries(linkies.filter((l) => l !== null))

  const mdx = await mdxSerialize(rawpost, {
    // pageResolver: (page) => [`/post/${makeURI(linkMap[page]?.path)}`],
  })

  const linkMapWithURL = linkies.map(([title, link]) => [
    `/post/${makeURI(typeof link === 'string' ? link : link.path)}`,
    link,
  ])
  console.log(linkies)

  return {
    rawpost,
    linkies: Object.fromEntries(linkMapWithURL),
    mdx,
  }
}
