import { Trash2 } from "lucide-react";

const CommentList = ({ comments }) => {
  // Ensure comments is an array before using map
  if (!Array.isArray(comments)) {
    return <div>No comments to display</div>;
  }

  const handleDeleteComment = ()=>{
    

  }
  return (
    <div>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div
            key={comment?._id}
            className="mb-4 p-4 flex items-center gap-6  bg-gray-200 rounded-md"
          >
            <div className="sm:h-12 h-7 w-7 p-2 sm:w-12 bg-blue-900 rounded-full flex justify-center items-center sm:text-2xl text-white ">
              P
            </div>
            <div>
              <p className="text-gray-800 sm:text-lg font-semibold">
                {comment?.comment}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Posted on: {new Date(comment?.createdAt).toLocaleString()}
              </p>
            </div>
            <div className="flex items-end  flex-1 relative">
              <button className="text-end  absolute right-0" onClick={handleDeleteComment}>
                <Trash2 size={20}/>
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>No comments yet. Be the first to comment!</div>
      )}
    </div>
  );
};

export default CommentList;
