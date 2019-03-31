export = SDK;

declare class SDK {
  constructor(opts?: SDK.Options);

  base: string;
  token: string;
  auth: string;

  category: SDK.CategoryAPI;
  post: SDK.PostAPI;
  comment: SDK.CommentAPI;
  meta: SDK.MetaAPI;
  topic: SDK.TopicAPI;
  tag: SDK.TagAPI;
}

declare namespace SDK {
  export interface Options {
    base?: string;
    token?: string;
  }

  export interface CategoryAPI {
    /**
     * List all categories
     */
    listCategories(req: ListCategoriesRequest): Promise<ListCategoriesResponse>;
    /**
     * Create a category
     */
    createCategory(req: CreateCategoryRequest): Promise<CreateCategoryResponse>;
    /**
     * Find category by id
     */
    getCategory(req: GetCategoryRequest): Promise<GetCategoryResponse>;
    /**
     * Update category
     */
    updateCategory(req: UpdateCategoryRequest): Promise<UpdateCategoryResponse>;
    /**
     *
     */
    deleteCategory(req: DeleteCategoryRequest): Promise<DeleteCategoryResponse>;
  }
  export interface PostAPI {
    /**
     * List posts
     */
    listPosts(req: ListPostsRequest): Promise<ListPostsResponse>;
    /**
     * Create an post
     */
    createPost(req: CreatePostRequest): Promise<CreatePostResponse>;
    /**
     * Find post by id
     */
    getPost(req: GetPostRequest): Promise<GetPostResponse>;
    /**
     * Update Post
     */
    updatePost(req: UpdatePostRequest): Promise<UpdatePostResponse>;
    /**
     * delete post
     */
    deletePost(req: DeletePostRequest): Promise<DeletePostResponse>;
  }
  export interface CommentAPI {
    /**
     * List comments
     */
    listComments(req: ListCommentsRequest): Promise<ListCommentsResponse>;
    /**
     * Create a comment
     */
    createComment(req: CreateCommentRequest): Promise<CreateCommentResponse>;
    /**
     * Find comment by id
     */
    getComment(req: GetCommentRequest): Promise<GetCommentResponse>;
    /**
     * Update comment
     */
    updateComment(req: UpdateCommentRequest): Promise<UpdateCommentResponse>;
    /**
     *
     */
    deleteComment(req: DeleteCommentRequest): Promise<DeleteCommentResponse>;
  }
  export interface MetaAPI {
    /**
     * Update meta to comment
     */
    updateCommentMeta(req: UpdateCommentMetaRequest): Promise<UpdateCommentMetaResponse>;
    /**
     * Update meta to post
     */
    updatePostMeta(req: UpdatePostMetaRequest): Promise<UpdatePostMetaResponse>;
  }
  export interface TopicAPI {
    /**
     * List all topics
     */
    listTopics(req: ListTopicsRequest): Promise<ListTopicsResponse>;
    /**
     * Create a topic
     */
    createTopic(req: CreateTopicRequest): Promise<CreateTopicResponse>;
    /**
     * Find topic by id
     */
    getTopic(req: GetTopicRequest): Promise<GetTopicResponse>;
    /**
     * Update topic
     */
    updateTopic(req: UpdateTopicRequest): Promise<UpdateTopicResponse>;
    /**
     *
     */
    deleteTopic(req: DeleteTopicRequest): Promise<DeleteTopicResponse>;
  }
  export interface TagAPI {
    /**
     * List all tags
     */
    listTags(req: ListTagsRequest): Promise<ListTagsResponse>;
  }

  type ListCategoriesRequest = {
    query: {
      limit?: number;
      sort?: string;
      select?: number;
      _page?: string;
      _order?: string;
      _embed?: string;

      filter: {
        title?: string;
        ns: string;
      };
    };
  };

  type ListCategoriesResponse = {
    body: Array<Category>;
    headers: {
      xTotalCount: string;
    };
  };

  type CreateCategoryRequest = {
    body: CategoryCreateable;
  };

  type CreateCategoryResponse = {
    body: Category;
  };

  type GetCategoryRequest = {
    categoryId: string;

    query: {
      _embed?: string;
    };
  };

  type GetCategoryResponse = {
    body: Category;
  };

  type UpdateCategoryRequest = {
    categoryId: string;
    body: CategoryUpdateable;
  };

  type UpdateCategoryResponse = {
    body: Category;
  };

  type DeleteCategoryRequest = {
    categoryId: string;
  };

  type ListPostsRequest = {
    query: {
      limit?: number;
      sort?: string;
      populate?: string;
      select?: number;
      _page?: string;
      _order?: string;
      _embed?: string;

      filter: {
        category?: string;
        topic?: string;
        tag?: string;
        ns: string;
        slug: {
          $lt?: string;
          $gt?: string;
        };
      };
    };
  };

  type ListPostsResponse = {
    body: Array<Post>;
    headers: {
      xTotalCount: string;
    };
  };

  type CreatePostRequest = {
    body: PostCreateable;
  };

  type CreatePostResponse = {
    body: Post;
  };

  type GetPostRequest = {
    postId: string;

    query: {
      populate?: string;
      _embed?: string;
    };
  };

  type GetPostResponse = {
    body: Post;
  };

  type UpdatePostRequest = {
    postId: string;
    body: PostUpdateable;
  };

  type UpdatePostResponse = {
    body: Post;
  };

  type DeletePostRequest = {
    postId: string;
  };

  type ListCommentsRequest = {
    query: {
      limit?: number;
      sort?: string;
      populate?: string;
      select?: number;
      _page?: string;
      _embed?: string;

      filter: {
        post?: string;
        q?: string;
        createdAt: {
          $gt?: string;
          $lt?: string;
        };
      };
    };
  };

  type ListCommentsResponse = {
    body: Array<Comment>;
    headers: {
      xTotalCount: string;
    };
  };

  type CreateCommentRequest = {
    body: CommentCreateable;
  };

  type CreateCommentResponse = {
    body: Comment;
  };

  type GetCommentRequest = {
    commentId: string;

    query: {
      populate?: string;
    };
  };

  type GetCommentResponse = {
    body: Comment;
  };

  type UpdateCommentRequest = {
    commentId: string;
    body: CommentUpdateable;
  };

  type UpdateCommentResponse = {
    body: Comment;
  };

  type DeleteCommentRequest = {
    commentId: string;
  };

  type UpdateCommentMetaRequest = {
    commentId: string;
    body: {
      like: boolean;
      favorite: boolean;
      user: string;
    };
  };

  type UpdateCommentMetaResponse = {
    body: Meta;
  };

  type UpdatePostMetaRequest = {
    postId: string;
    body: {
      like: boolean;
      favorite: boolean;
      user: string;
    };
  };

  type UpdatePostMetaResponse = {
    body: Meta;
  };

  type ListTopicsRequest = {
    query: {
      limit?: number;
      sort?: string;
      select?: number;
      _page?: string;
      _order?: string;

      filter: {
        ns: string;
      };
    };
  };

  type ListTopicsResponse = {
    body: Array<Topic>;
    headers: {
      xTotalCount: string;
    };
  };

  type CreateTopicRequest = {
    body: TopicCreateable;
  };

  type CreateTopicResponse = {
    body: Topic;
  };

  type GetTopicRequest = {
    topicId: string;
  };

  type GetTopicResponse = {
    body: Topic;
  };

  type UpdateTopicRequest = {
    topicId: string;
    body: TopicUpdateable;
  };

  type UpdateTopicResponse = {
    body: Topic;
  };

  type DeleteTopicRequest = {
    topicId: string;
  };

  type ListTagsRequest = {
    query: {
      limit?: number;
    };
  };

  type ListTagsResponse = {
    body: Array<Tag>;
  };

  type SchemaBase = {
    createdAt: string;
    updatedAt: string;
    id: string;
  };

  type CategoryUpdateable = {
    cover: string;
    summary: string;
    title: string;
    weight: number;
    ns: string;
  };

  type CategoryCreateable = {
    parent: string;
    cover: string;
    summary: string;
    title: string;
    weight: number;
    ns: string;
  };

  type Category = {
    createdBy: string;
    children: Array<string>;
    parent: string;
    cover: string;
    summary: string;
    title: string;
    weight: number;
    ns: string;
    createdAt: string;
    updatedAt: string;
    id: string;
  };

  type PostUpdateable = {
    author: {
      user: string;
      name: string;
      email: string;
      avatar: string;
      official: boolean;
    };
    category: string;
    content: string;
    cover: string;
    format: string;
    pinned: boolean;
    published: boolean;
    publishedAt: string;
    source: {
      id: string;
      uri: string;
      origin: string;
    };
    summary: string;
    tags: Array<string>;
    title: string;
    topics: Array<string>;
    weight: number;
    ns: string;
  };

  type PostCreateable = {
    uri: string;
    type: string;
    author: {
      user: string;
      name: string;
      email: string;
      avatar: string;
      official: boolean;
    };
    category: string;
    content: string;
    cover: string;
    format: string;
    pinned: boolean;
    published: boolean;
    publishedAt: string;
    source: {
      id: string;
      uri: string;
      origin: string;
    };
    summary: string;
    tags: Array<string>;
    title: string;
    topics: Array<string>;
    weight: number;
    ns: string;
  };

  type Post = {
    createdBy: string;
    favorite: boolean;
    like: boolean;
    likes: number;
    favs: number;
    meta: {
      comments: number;
      favs: number;
      likes: number;
      originality: number;
      refs: number;
      trends: number;
      views: number;
    };
    photos: Array<string>;
    source: {
      id: string;
      uri: string;
      origin: string;
    };
    uri: string;
    type: string;
    author: {
      user: string;
      name: string;
      email: string;
      avatar: string;
      official: boolean;
    };
    category: string;
    content: string;
    cover: string;
    format: string;
    pinned: boolean;
    published: boolean;
    publishedAt: string;
    summary: string;
    tags: Array<string>;
    title: string;
    topics: Array<string>;
    weight: number;
    ns: string;
    createdAt: string;
    updatedAt: string;
    id: string;
  };

  type Source = {
    id: string;
    uri: string;
    origin: string;
  };

  type CommentUpdateable = {
    content: string;
    format: string;
  };

  type CommentCreateable = {
    createdBy: string;
    author: {
      user: string;
      name: string;
      email: string;
      avatar: string;
      official: boolean;
    };
    post: string;
    ns: string;
    type: string;
    content: string;
    format: string;
  };

  type Comment = {
    replies: Array<{
      parent: string;
      from: string;
      to: string;
      content: string;
      createdAt: string;
      updatedAt: string;
    }>;
    createdBy: string;
    author: {
      user: string;
      name: string;
      email: string;
      avatar: string;
      official: boolean;
    };
    post: string;
    ns: string;
    type: string;
    content: string;
    format: string;
    createdAt: string;
    updatedAt: string;
    id: string;
  };

  type Reply = {
    parent: string;
    from: string;
    to: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  };

  type Meta = {
    createdAt: string;
    updatedAt: string;
    post: string;
    comment: string;
    like: boolean;
    favorite: boolean;
  };

  type TopicUpdateable = {
    description: string;
    cover: string;
    photos: Array<string>;
    published: boolean;
    publishedAt: string;
    pinned: boolean;
    recommended: boolean;
    summary: string;
    title: string;
    weight: number;
    tags: Array<string>;
  };

  type TopicCreateable = {
    createdBy: string;
    parents: string;
    ns: String;
    description: string;
    cover: string;
    photos: Array<string>;
    published: boolean;
    publishedAt: string;
    pinned: boolean;
    recommended: boolean;
    summary: string;
    title: string;
    weight: number;
    tags: Array<string>;
  };

  type Topic = {
    createdBy: string;
    parents: string;
    ns: String;
    description: string;
    cover: string;
    photos: Array<string>;
    published: boolean;
    publishedAt: string;
    pinned: boolean;
    recommended: boolean;
    summary: string;
    title: string;
    weight: number;
    tags: Array<string>;
    createdAt: string;
    updatedAt: string;
    id: string;
  };

  type Author = {
    user: string;
    name: string;
    email: string;
    avatar: string;
    official: boolean;
  };

  type PostMeta = {
    comments: number;
    favs: number;
    likes: number;
    originality: number;
    refs: number;
    trends: number;
    views: number;
  };

  type Tag = {
    name: string;
    count: number;
  };

  type Err = {
    code: string;
    message: string;
  };
}
