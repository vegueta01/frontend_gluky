export interface FormValueInterface {
    title: string;
    body: string;
    postId: string;
}

export interface CardValueInterface {
    title: string;
    body: string;
    post_id: string;
    state: 'pending' | 'published' | 'rejected';
}

export interface PostDataBaseInterface {
    title: string;
    body: string;
    post_id: string;
    state: 'pending' | 'published' | 'rejected';
    user_id: string;
}
