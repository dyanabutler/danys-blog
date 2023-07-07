import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/GetPostMetadata";
import PostsNavbar from "@/components/PostsNavbar";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <>
      <PostsNavbar />
      <div className="mt-24 mx-auto max-w-3xl">
        <div className="my-12 text-center">
          <h1 className="text-2xl ">{post.data.title}</h1>
          <p className=" mt-2">{post.data.date}</p>
        </div>
        <article className="prose mx-auto space-y-4">
          <Markdown className="dark:text-white text-black">{post.content}</Markdown>
        </article>
      </div>
    </>
  );
};

export default PostPage;

