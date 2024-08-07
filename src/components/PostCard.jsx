import React, { useEffect, useState } from "react";
import appwriteServie from "../appwrite/config";
import authService from "../appwrite/auth";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const account = await authService.getCurrentUser();
      setUser(account);
    }
    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-customGreen rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img className="h-60 w-60"
            src={appwriteServie.getFilePreview(featuredImage)}
            alt="{title"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;


