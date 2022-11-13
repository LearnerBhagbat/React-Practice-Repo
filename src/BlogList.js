const BlogList = () => {
    return ( 
        <div className="Blog-List">
            <div className="blogPreview" key={Blog.ID}>
                        <h2>{Blog.Title}</h2>
                        <p>Written By {Blog.Author}</p>
                    </div>
        </div>
     );
}
 
export default BlogList;