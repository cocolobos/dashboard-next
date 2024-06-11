import PostsTable from "@/components/posts/PostsTable";
import BackButton from '@/components/BackButton';
import PostsPagination from "@/components/posts/PostPagination";

export default function PostsPage() {
  return (
    <>
      <BackButton text="Go Back" link="/"/>
      <PostsTable/>
      <PostsPagination />
    </>
  );
}
  