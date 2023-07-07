import Link from "next/link";
import Image from 'next/image';
import { PostMetadata } from "./PostMetaData";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="border border-slate-300 p-4 rounded-md shadow-sm
    bg-white"
    >
      {props.image && 
        <div className="mb-4">
          <Image 
            src={props.image} 
            alt={`Image for post ${props.title}`}
            width={700} // adjust this value to fit your needs
            height={400} // adjust this value to fit your needs
          />
        </div>
      }
      <p className="text-sm text-slate-400">{props.date}</p>
      <Link href={`blog/posts/${props.slug}`}>
        <h2 className=" text-violet-600 hover:underline mb-4">{props.title}</h2>
      </Link>
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;