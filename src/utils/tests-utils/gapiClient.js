import videoList from '../fixtures/sample-response.json';
import relatedList from '../fixtures/sample-related.json';
import channel from '../fixtures/sample-channel.json';
import comments from '../fixtures/sample-comments.json';
import search from '../fixtures/sample-search.json';

function gapiResult(result) {
  return { result };
}

function videoListFunction(params = {}) {
  const {
    chart = '',
    id = [],
  } = params;

  if (chart === 'mostPopular') return gapiResult(videoList);
  if (id.length === 1) return gapiResult(videoList);
  if (id.length > 1) return gapiResult(relatedList);
};

export default {
  init: () => { },
  youtube: {
    videos: {
      list: videoListFunction,
    },
    channels: {
      list: () => gapiResult(channel),
    },
    commentThreads: {
      list: () => gapiResult(comments),
    },
    search: {
      list: () => gapiResult(search),
    }
  },
};