// # 1 Import createAsyncThunk and createSlice here.
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// # 2 Create  asynchronous action creator called loadCommentsForArticleId here.
export const loadCommentsForArticleId = createAsyncThunk(
  'comments/loadCommentsForArticleId', // action type
  async(id) => {  // payload creator
     // asynchronous operations using  promise fetch(), json()
    const response = await fetch(`api/articles/${id}/comments`);
    const json = await response.json();
    // console.log(json);
    return json;
  }
);

// # 11 Create asynchronous action creator postCommentForArticleId here.
export const postCommentForArticleId = createAsyncThunk(
  'comments/postCommentForArticleId', // action type
  async({ articleId, comment }) => { // asynchronous callback with 2 props (articleId and comment)
  // # 12-A   call JSON.stringify() and pass in an object single property, comment
    const requestBody = JSON.stringify({comment: comment});
  
  // # 12-B Call the fetch() method to make a request to 'api/articles/articleId/comments'
    const response = await fetch(`api/articles/${articleId}/comments`,
  // Add a body key to the options object with the value equal requestBody.
    {
      method: 'POST',
      body: requestBody
    }
    );

    const json = await response.json();
    
    return json;
  }
);



export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
// #4a add a byArticleId property to initialState, and set it equal to an empty object..
// #5 Add two booleans properties both set to false bcoz neither loading comments nor failing to load comments 
// 13 Add two booleans—createCommentIsPending and failedToCreateComment
    byArticleId: {},
    isLoadingComments: false,
    failedToLoadComments: false,
    createCommentIsPending: false,
    failedToCreateComment: false

  },

  
  // # 6 Add an extraReducers property to the configurations options
  // # 7 Adding pending, fulfilled, and rejected promise lifecycle 3 actions
  // dispatched by loadCommentsForArticleId:
  //  The extraReducers option should be a function that receives a parameter called builder
  // https://redux.js.org/tutorials/essentials/part-5-async-logic
  
  extraReducers: (builder) => {
    builder
      .addCase(loadCommentsForArticleId.pending, (state, action) => {
        state.isLoadingComments = true;
        state.failedToLoadComments = true;
      })

      .addCase(loadCommentsForArticleId.fulfilled, (state, action) => {
        state.isLoadingComments = false;
        state.failedToLoadComments = false;
        state.byArticleId = {[action.payload.articleId]: action.payload.comments}
      })
      .addCase(loadCommentsForArticleId.rejected, (state, action) => {
        state.isLoadingComments = false;
        state.failedToLoadComments = false;
      })
      // # 13 postCommentForArticleId dispatch actions for pending/fulfilled/rejected promise lifecycle states.
      .addCase(postCommentForArticleId.pending, (state, action) => {
        state.isLoadingComments = true;
        state.failedToLoadComments = false;
      })

      .addCase(postCommentForArticleId.fulfilled, (state, action) => {
        state.isLoadingComments = false;
        state.failedToLoadComments = false;
        state.byArticleId[action.payload.articleId].push(action.payload)
      })
      .addCase(postCommentForArticleId.rejected, (state, action) => {
        state.isLoadingComments = false;
        state.failedToLoadComments = true;
      })
  
    }
});

export const selectComments = (state) => state.comments.byArticleId;
export const isLoadingComments = (state) => state.comments.isLoadingComments;
export const createCommentIsPending = (state) => state.comments.createCommentIsPending;

export default commentsSlice.reducer;
