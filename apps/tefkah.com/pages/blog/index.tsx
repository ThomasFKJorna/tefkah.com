import { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods'
import Image from 'next/image'
import matter from 'gray-matter'
import { FooterProps } from 'ui'
import { octokit } from '../../services/github'
import { BasicLayout } from '../../layouts/BasicLayout'
import { getFooterProps } from '../../utils/getFooterProps'

export interface BlogPageProps {
  posts: (PostData & { title: string; meta: Record<string, unknown> })[]
  author: RestEndpointMethodTypes['users']['getAuthenticated']['response']
  footer: FooterProps
}

const BlogPage = (props: BlogPageProps) => {
  const { posts, author, footer } = props
  //  return <main>{JSON.stringify(posts)}</main>
  /* This example requires Tailwind CSS v2.0+ */
  // const posts = [
  //   {
  //     title: 'Boost your conversion rate',
  //     href: '#',
  //     category: { name: 'Article', href: '#' },
  //     description:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
  //     date: 'Mar 16, 2020',
  //     datetime: '2020-03-16',
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  //     readingTime: '6 min',
  //     author: {
  //       name: 'Roel Aufderehar',
  //       href: '#',
  //       imageUrl:
  //         'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //     },
  //   },
  //   {
  //     title: 'How to use search engine optimization to drive sales',
  //     href: '#',
  //     category: { name: 'Video', href: '#' },
  //     description:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
  //     date: 'Mar 10, 2020',
  //     datetime: '2020-03-10',
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  //     readingTime: '4 min',
  //     author: {
  //       name: 'Brenna Goyette',
  //       href: '#',
  //       imageUrl:
  //         'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //     },
  //   },
  //   {
  //     title: 'Improve your customer experience',
  //     href: '#',
  //     category: { name: 'Case Study', href: '#' },
  //     description:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
  //     date: 'Feb 12, 2020',
  //     datetime: '2020-02-12',
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  //     readingTime: '11 min',
  //     author: {
  //       name: 'Daniela Metz',
  //       href: '#',
  //       imageUrl:
  //         'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //     },
  //   },
  // ]

  // export default function Example() {
  return (
    <BasicLayout footer={footer}>
      <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className=" h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus
              atque, ducimus sed.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  {post?.meta?.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      className="h-48 w-full object-cover"
                      src={post.meta.imageUrl as string}
                      alt=""
                    />
                  ) : null}
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={`/blog/${post?.meta?.category}`} className="hover:underline">
                        {post?.meta?.category as string}
                      </a>
                    </p>
                    <a href={`/blog/${post.title}`} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">
                        {post?.meta?.description as string}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={author.url}>
                        <span className="sr-only">{author.data.name}</span>
                        <Image
                          height="40"
                          width="40"
                          className="h-10 w-10 rounded-full"
                          src={author.data.avatar_url}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={author.url} className="hover:underline">
                          {author.data.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time>{post.meta?.date as string}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{`${post.meta?.readingTime} read`}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BasicLayout>
  )
}

export default BlogPage

export interface PostData {
  name: string
  path: string
  sha: string
  size: number
  url: string
  html_url: string
  git_url: string
  download_url: string
  type: string
  content: string
  encoding: string
  _links: Links
}

interface Links {
  self: string
  git: string
  html: string
}

export const getStaticProps = async () => {
  const paths = await octokit.rest.repos.getContent({
    owner: process.env.NEXT_PUBLIC_BLOG_REPO_OWNER || 'ThomasFKJorna',
    repo: process.env.NEXT_PUBLIC_BLOG_REPO_REPO || 'blog',
    path: '.',
  })
  if (!Array.isArray(paths.data)) return { props: { posts: [] } }

  const mappedPosts = paths.data.map((path) => {
    if (!path.content) return { ...path, title: path.name.replace('.md', '') }

    const file = Buffer.from(path.content, 'base64').toString()

    const { data } = matter(file)

    return { ...path, title: path.name.replace('.md', ''), meta: data }
  })

  const author = await octokit.rest.users.getAuthenticated()

  return {
    props: {
      posts: mappedPosts,
      author,
      footer: getFooterProps(),
    },
  }
}
