import React from 'react';
import { useParams } from 'react-router-dom';

import Loading from '../CommentLoading';

import Comment from '../Comment';
import { useComments } from '../../utils/hooks/useComments';

// import response from '../../utils/sample-comments.json';

function Comments() {
  // const comments = response.items;
  const { id: videoId } = useParams();
  const { comments, loading, error } = useComments(videoId);

  return (
    <section>
      {loading && <Loading />}
      {error && <p>{error.toString()}</p>}
      {!loading && !error && comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </section>
  );
}

export default Comments;