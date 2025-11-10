import React from "react";

const FeedBack = ({ username, feedback, onDelete }) => {
  return (
    <div className="bg-gray-200 p-3 rounded-md my-3">
      <div className="text-purple-700">{username}</div>
      <div className="flex flex-col gap-2">
        <p className="">{feedback}</p>
        <div className="flex gap-4">
          <button
            className="bg-blue-600 rounded-sm px-3 text-white"
            onClick={onDelete}
          >
            Delete
          </button>
          <button className="bg-red-600 rounded-sm px-3 text-white">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
