class Post {
    constructor(postData) {
        this.id = postData.id;
        this.title = postData.title;
        this.subtitle = postData.subtitle;
        this.userID = postData.userId;
        this.imageUrl = postData.imageUrl;
        this.text = postData.text;
    }
}


export default Post