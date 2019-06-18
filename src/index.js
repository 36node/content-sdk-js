import fetch from "@36node/fetch";
import { denormalize } from "@36node/query-normalizr";

export default class SDK {
  /**@type {string} **/
  base;
  /**@type {string} **/
  token;

  /**
   * Sdk auth
   *
   * @returns {string} auth header
   * */
  get auth() {
    if (this.token) {
      return `Bearer ${this.token}`;
    }

    return "";
  }

  /**
   * Init store sdk
   *
   * @param {Object} opt
   * @param {string} opt.base  base url
   * @param {string} opt.token token fro authorization
   */
  constructor(opt = {}) {
    this.base = opt.base || "";
    this.token = opt.token || "";
  }

  /**
   * category's methods
   */
  category = {
    /**
     * List all categories
     *
     * @param {ListCategoriesRequest} req listCategories request
     * @returns {Promise<ListCategoriesResponse>} A paged array of categories
     */
    listCategories: (req = {}) => {
      const { query, headers } = req;

      if (!query) throw new Error("query is required for category");

      return fetch(`${this.base}/categories`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create a category
     *
     * @param {CreateCategoryRequest} req createCategory request
     * @returns {Promise<CreateCategoryResponse>} The Category created
     */
    createCategory: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createCategory");

      return fetch(`${this.base}/categories`, {
        method: "post",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Find category by id
     *
     * @param {GetCategoryRequest} req getCategory request
     * @returns {Promise<GetCategoryResponse>} Expected response to a valid request
     */
    getCategory: (req = {}) => {
      const { categoryId, query, headers } = req;

      if (!categoryId)
        throw new Error("categoryId is required for getCategory");

      return fetch(`${this.base}/categories/${categoryId}`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Update category
     *
     * @param {UpdateCategoryRequest} req updateCategory request
     * @returns {Promise<UpdateCategoryResponse>} The category
     */
    updateCategory: (req = {}) => {
      const { categoryId, headers, body } = req;

      if (!categoryId)
        throw new Error("categoryId is required for updateCategory");
      if (!body) throw new Error("requetBody is required for updateCategory");

      return fetch(`${this.base}/categories/${categoryId}`, {
        method: "put",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     *
     *
     * @param {DeleteCategoryRequest} req deleteCategory request
     * @returns {Promise<DeleteCategoryResponse>} category deleted
     */
    deleteCategory: (req = {}) => {
      const { categoryId, headers } = req;

      if (!categoryId)
        throw new Error("categoryId is required for deleteCategory");

      return fetch(`${this.base}/categories/${categoryId}`, {
        method: "delete",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * List all categories under one category
     *
     * @param {ListCategoriesByParentRequest} req listCategoriesByParent request
     * @returns {Promise<ListCategoriesByParentResponse>} A paged array of categories
     */
    listCategoriesByParent: (req = {}) => {
      const { categoryId, query, headers } = req;

      if (!categoryId)
        throw new Error("categoryId is required for listCategoriesByParent");
      if (!query) throw new Error("query is required for category");

      return fetch(`${this.base}/categories/${categoryId}/categories`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * post's methods
   */
  post = {
    /**
     * List posts
     *
     * @param {ListPostsRequest} req listPosts request
     * @returns {Promise<ListPostsResponse>} A paged array of posts
     */
    listPosts: (req = {}) => {
      const { query, headers } = req;

      if (!query) throw new Error("query is required for post");

      return fetch(`${this.base}/posts`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create an post
     *
     * @param {CreatePostRequest} req createPost request
     * @returns {Promise<CreatePostResponse>} The Post created
     */
    createPost: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createPost");

      return fetch(`${this.base}/posts`, {
        method: "post",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Find post by id
     *
     * @param {GetPostRequest} req getPost request
     * @returns {Promise<GetPostResponse>} Expected response to a valid request
     */
    getPost: (req = {}) => {
      const { postId, query, headers } = req;

      if (!postId) throw new Error("postId is required for getPost");

      return fetch(`${this.base}/posts/${postId}`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Update Post
     *
     * @param {UpdatePostRequest} req updatePost request
     * @returns {Promise<UpdatePostResponse>} The post
     */
    updatePost: (req = {}) => {
      const { postId, headers, body } = req;

      if (!postId) throw new Error("postId is required for updatePost");
      if (!body) throw new Error("requetBody is required for updatePost");

      return fetch(`${this.base}/posts/${postId}`, {
        method: "put",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * delete post
     *
     * @param {DeletePostRequest} req deletePost request
     * @returns {Promise<DeletePostResponse>} post deleted
     */
    deletePost: (req = {}) => {
      const { postId, headers } = req;

      if (!postId) throw new Error("postId is required for deletePost");

      return fetch(`${this.base}/posts/${postId}`, {
        method: "delete",
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * comment's methods
   */
  comment = {
    /**
     * List comments
     *
     * @param {ListCommentsRequest} req listComments request
     * @returns {Promise<ListCommentsResponse>} A paged array of comments
     */
    listComments: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/comments`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create a comment
     *
     * @param {CreateCommentRequest} req createComment request
     * @returns {Promise<CreateCommentResponse>} The comment created
     */
    createComment: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createComment");

      return fetch(`${this.base}/comments`, {
        method: "post",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Find comment by id
     *
     * @param {GetCommentRequest} req getComment request
     * @returns {Promise<GetCommentResponse>} Expected response to a valid request
     */
    getComment: (req = {}) => {
      const { commentId, query, headers } = req;

      if (!commentId) throw new Error("commentId is required for getComment");

      return fetch(`${this.base}/comments/${commentId}`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Update comment
     *
     * @param {UpdateCommentRequest} req updateComment request
     * @returns {Promise<UpdateCommentResponse>} The page
     */
    updateComment: (req = {}) => {
      const { commentId, headers, body } = req;

      if (!commentId)
        throw new Error("commentId is required for updateComment");
      if (!body) throw new Error("requetBody is required for updateComment");

      return fetch(`${this.base}/comments/${commentId}`, {
        method: "put",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     *
     *
     * @param {DeleteCommentRequest} req deleteComment request
     * @returns {Promise<DeleteCommentResponse>} comment deleted
     */
    deleteComment: (req = {}) => {
      const { commentId, headers } = req;

      if (!commentId)
        throw new Error("commentId is required for deleteComment");

      return fetch(`${this.base}/comments/${commentId}`, {
        method: "delete",
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * meta's methods
   */
  meta = {
    /**
     * Update meta to comment
     *
     * @param {UpdateCommentMetaRequest} req updateCommentMeta request
     * @returns {Promise<UpdateCommentMetaResponse>} The meta
     */
    updateCommentMeta: (req = {}) => {
      const { commentId, headers, body } = req;

      if (!commentId)
        throw new Error("commentId is required for updateCommentMeta");
      if (!body)
        throw new Error("requetBody is required for updateCommentMeta");

      return fetch(`${this.base}/comments/${commentId}/meta`, {
        method: "put",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Update meta to post
     *
     * @param {UpdatePostMetaRequest} req updatePostMeta request
     * @returns {Promise<UpdatePostMetaResponse>} The meta
     */
    updatePostMeta: (req = {}) => {
      const { postId, headers, body } = req;

      if (!postId) throw new Error("postId is required for updatePostMeta");
      if (!body) throw new Error("requetBody is required for updatePostMeta");

      return fetch(`${this.base}/posts/${postId}/meta`, {
        method: "put",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get favorites of a user
     *
     * @param {GetUserFavoritesRequest} req getUserFavorites request
     * @returns {Promise<GetUserFavoritesResponse>} The posts
     */
    getUserFavorites: (req = {}) => {
      const { userId, query, headers } = req;

      if (!userId) throw new Error("userId is required for getUserFavorites");

      return fetch(`${this.base}/users/${userId}/favorites`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * topic's methods
   */
  topic = {
    /**
     * List all topics
     *
     * @param {ListTopicsRequest} req listTopics request
     * @returns {Promise<ListTopicsResponse>} A paged array of topics
     */
    listTopics: (req = {}) => {
      const { query, headers } = req;

      if (!query) throw new Error("query is required for topic");

      return fetch(`${this.base}/topics`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Create a topic
     *
     * @param {CreateTopicRequest} req createTopic request
     * @returns {Promise<CreateTopicResponse>} The topic created
     */
    createTopic: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createTopic");

      return fetch(`${this.base}/topics`, {
        method: "post",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Find topic by id
     *
     * @param {GetTopicRequest} req getTopic request
     * @returns {Promise<GetTopicResponse>} Expected response to a valid request
     */
    getTopic: (req = {}) => {
      const { topicId, headers } = req;

      if (!topicId) throw new Error("topicId is required for getTopic");

      return fetch(`${this.base}/topics/${topicId}`, {
        method: "get",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Update topic
     *
     * @param {UpdateTopicRequest} req updateTopic request
     * @returns {Promise<UpdateTopicResponse>} The topic
     */
    updateTopic: (req = {}) => {
      const { topicId, headers, body } = req;

      if (!topicId) throw new Error("topicId is required for updateTopic");
      if (!body) throw new Error("requetBody is required for updateTopic");

      return fetch(`${this.base}/topics/${topicId}`, {
        method: "put",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     *
     *
     * @param {DeleteTopicRequest} req deleteTopic request
     * @returns {Promise<DeleteTopicResponse>} topic deleted
     */
    deleteTopic: (req = {}) => {
      const { topicId, headers } = req;

      if (!topicId) throw new Error("topicId is required for deleteTopic");

      return fetch(`${this.base}/topics/${topicId}`, {
        method: "delete",
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * tag's methods
   */
  tag = {
    /**
     * List all tags
     *
     * @param {ListTagsRequest} req listTags request
     * @returns {Promise<ListTagsResponse>} A paged array of tags
     */
    listTags: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/tags`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
}
