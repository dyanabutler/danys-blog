import PostsNavbar from "@/components/GalleryNavbar";
import getPostMetadata from "@/components/GetPostMetadata";
import PostPreview from "@/components/PostPreview";

const Blogpage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div>
        <PostsNavbar />
        <div className="m-8">
          <h3 className="items-center text-xl font-semibold mt-24">
          <div className="mx-auto max-w-3xl my-8 px-6 text-center text-lg">
        
      </div>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {postPreviews}</div>
    </div>
  );
};
 
export default Blogpage