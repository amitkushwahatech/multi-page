import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import { useParams } from "react-router-dom";
import './details.css'



const ItemDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(id)); 
  }, [dispatch, id]);

  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === parseInt(id))
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4 shadow-sm">
            <div className="card-img">
            <img
              
              src={`https://picsum.photos/200?random=${post.id}`}
              alt=""
            />
            </div>
            
            <div className="card-body1">
            <h4 className="card-text">
               User ID: <span className="card-t2" style={{color: "darkorange",}}> {post.userId}</span>
              </h4>
              <h5 className="card-title" style={{color: "chocolate"}}>Title: <span className="card-t2" style={{color: "black"}}> {post.title}</span></h5>
              <p className="card-text" style={{color: "blue", fontWeight:"bolder"}}>Details:  <span className="card-t" style={{color: "black"}}> {post.body}</span></p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
