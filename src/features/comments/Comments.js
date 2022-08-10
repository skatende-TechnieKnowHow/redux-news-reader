import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadCommentsForArticleId,
  selectComments,
  isLoadingComments,
} from '../comments/commentsSlice';

import { selectCurrentArticle } from '../currentArticle/currentArticleSlice';
import CommentList from '../../components/CommentList';
import CommentForm from '../../components/CommentForm';

const Comments = () => {
  const dispatch = useDispatch();
  const article = useSelector(selectCurrentArticle);
  
  // #8 Declare additional selected data here.
  //  comments is assigned comments currently in state  and commentsAreLoading was
  // assigned commentsAreLoading or not

  const comments = useSelector(selectComments);
  const commentsAreLoading = useSelector(isLoadingComments);

  // #9-A Dispatch loadCommentsForArticleId with useEffect here.
  // which includes dispatch and article in the dependency array 

  useEffect(() => {
    if (article !== undefined) {
      dispatch(loadCommentsForArticleId(article.id))
    };
    
  }, [dispatch, article]);

  // #9-B Define a constant, commentsForArticleId, which should
  // be an empty array when article is undefined otherwise should be equal to comments[article.id]. 

  const commentsForArticleId = article ? comments[article.id] : [];
  

  if (commentsAreLoading) return <div>Loading Comments</div>;
  if (!article) return null;

  // # 9C Replace the empty array we’ve passed as 
  // the CommentList‘s comments prop with commentsForArticleId. 
  return (
    <div className='comments-container'>
      <h3 className='comments-title'>Comments</h3>
      <CommentList comments={commentsForArticleId} />
      <CommentForm articleId={article.id} />
    </div>
  );
};

export default Comments;
