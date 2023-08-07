import Link from "next/link";
import Image from 'next/image';
import { PostMetadata } from "./PostMetaData";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="text-center border border-slate-300 p-2 rounded-md shadow-sm
    bg-white"
    >
      <Link href={`blog/posts/${props.slug}`}>
        <h2 className="text-xl text-violet-600 hover:underline mb-2">{props.title}</h2>
      </Link>
      <p className="text-sm text-slate-400 mb-2">{props.date}</p>
      {props.image && 
        <div className="mb-4">
          <Image 
            src={props.image} 
            alt={`Image for post ${props.title}`}
            width={1600} // adjust this value to fit your needs
            height={900} // adjust this value to fit your needs
          
          />
        </div>
      }
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
