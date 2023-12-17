import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import { useEffect, useState } from "react"
import axios from "axios";

export default function Feed({username}) {
  const [posts,setPosts] = useState([]);
  

  useEffect(()=>{
    const fetchPosts = async () =>{
      const res = username 
      ? await axios.get("posts/profile/" + username) 
      : await axios.get("posts/timeline/641d26acfdde98a0a2cafb55");
      setPosts(res.data)
    };
    fetchPosts();
    
  },[])
  return (
    <div className="feed">


      <div className="feedWrapper">
        <Share/>
        {posts.map((p)=>(
          <Post key={p._id} post={p}/>
        ))}
      </div>
    </div>
  )
}
