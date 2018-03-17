function solve() {
    class Post{
        constructor(title,content){
            this.title=title;
            this.content=content;
        }
        toString(){

            return `Post: ${this.title}` + "\n" +`Content: ${this.content}`;
        }
    }
    class SocialMediaPost extends Post{
        constructor(title,content, likes, dislikes){
            super(title,content);
            this.likes=likes;
            this.dislikes=dislikes;
            this.comments=[];
        }
        addComment(comment){
            this.comments.push(comment);
        }
        toString(){
            if(this.comments.length>0){
                let output= super.toString() +"\n" +`Rating: ${this.likes-this.dislikes}`+"\n";
                output+='Comments:';
                for(let comment of this.comments){
                    output+="\n"+` * ${comment}`;
                }
                return output;
            }else{
                let output= super.toString() +"\n" +`Rating: ${this.likes-this.dislikes}`;
                return output;
            }

        }
    }
    class BlogPost extends Post{
        constructor(title,content,views){
            super(title,content);
            this._views=Number(views);
        }
        get views(){
            return this._views;
        }
        // set views(_views){
        //     this._views=this.view();
        //     return this._views;
        // }

        view(){
            this._views++;
            return this;
        }
        toString(){
            return super.toString()+`\nViews: ${this.views}`;
        }
    }
    return {Post,SocialMediaPost,BlogPost}
}
let obj=solve();
let post=new obj.BlogPost('Blabla','something',18);
// post.view();
// post.view();
// // post.addComment('sjdgfkjfit');
// // post.addComment('ghgh');
// // post.addComment('sdgh');
// console.log(post.toString());
let post2=new obj.SocialMediaPost('TestTitle','TestContent',5,10);
console.log(post2.toString());