import { Post } from './Post'
import { getProps } from './utils'

const Page = async ({ params: { post } }: { params: { post: string } }) => {
  const { linkies, mdx } = await getProps({ post })

  console.log(post)
  return (
    <>
      {/* <div>{typeof post !== 'string' && post.slice(0, -1).join('/')}</div> */}
      <h1>{decodeURIComponent(post)?.replace(/.+\//, '')}</h1>
      <div className="flex gap-4">
        {/* {mdx?.frontmatter?.tags?.map((tag) => (
          <span
            key={tag}
            className="transition-all  text-black border-2 text-sm hover:shadow-[4px_4px_0_#000] bg-white hover:-translate-x-1 hover:-translate-y-1 rounded-full  border-black px-2 py-1"
          >
            {tag}
          </span>
        ))} */}
      </div>
      <hr className="bg-black h-0.5" />
      <Post mdx={mdx!} linkies={linkies} />
    </>
  )
}

export default Page
