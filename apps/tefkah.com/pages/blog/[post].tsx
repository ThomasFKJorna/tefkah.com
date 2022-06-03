import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
// import dynamic from 'next/dynamic'
import { Footer, FooterProps } from 'ui'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { octokit } from '../../services/github'
import { getFooterProps } from '../../utils/getFooterProps'

export interface PostPageProps {
  mdxSource: MDXRemoteSerializeResult
  footer: FooterProps
}

export const PostPage = (props: PostPageProps) => {
  const { mdxSource, footer } = props
  // const components = {
  // }

  return (
    <div className="w-[100vw] dark:bg-gradient-to-b dark:from-slate-800 dark:to-onyx  bg-gradient-to-b from-moon to-blood flex flex-col item-center justify-center gap-20">
      <nav className="sticky top-0 text-onyx p-4 text-3xl font-bold">
        <Link href="/" passHref>
          <motion.a
            whileHover={{ scale: 1.5 }}
            className="dark:text-cool transition-colors dark:hover:text-ice hover:text-blood-900  text-onyx"
          >
            tefkah.
          </motion.a>
        </Link>
      </nav>
      <article className="prose dark:prose-invert w-[40ch] min-h-[100vh] md:w-[70ch] mx-auto">
        <MDXRemote {...mdxSource} />
      </article>

      <Footer {...footer} />
    </div>
  )
}
export default PostPage

export const getStaticPaths: GetStaticPaths = async () => {
  const pathpaths = await octokit.rest.repos.getContent({
    owner: process.env.NEXT_PUBLIC_BLOG_REPO_OWNER || 'ThomasFKJorna',
    repo: process.env.NEXT_PUBLIC_BLOG_REPO_REPO || 'blog',
    path: '.',
  })
  if (!Array.isArray(pathpaths.data)) return { paths: [], fallback: false }

  const paths = pathpaths.data
    .filter((path) => /\.mdx?/.test(path.name))
    .map((path) => ({
      params: { post: path.name.replace(/\.mdx?/, '') },
    }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // @ts-expect-error yaea
  const { post } = params

  const raw = await octokit.rest.repos.getContent({
    owner: process.env.NEXT_PUBLIC_BLOG_REPO_OWNER || 'ThomasFKJorna',
    repo: process.env.NEXT_PUBLIC_BLOG_REPO_REPO || 'blog',
    path: `${post}.md`,
    mediaType: { format: 'application/vnd.github.VERSION.raw' },
  })

  if (Array.isArray(raw.data)) return { props: {} }
  // console.log(raw)
  // @ts-expect-error yea
  const file = Buffer.from(raw.data.content, 'base64').toString()
  const { content } = matter(file)

  // const componentNames = [/<SomeHeavyComponent/.test(content) ? 'SomeHeavyComponent' : null].filter(
  //   Boolean,
  // )

  const mdxSource = await serialize(content)

  return {
    props: {
      mdxSource,
      footer: getFooterProps(),
    },
  }
}
