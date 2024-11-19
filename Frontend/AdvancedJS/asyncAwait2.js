function fetchPostData() {
    return new Promise((resolve)=>{setTimeout(() => {
        resolve("Post data fetched");
    }, 3000);})
}

function fetchCommentData() {
    return new Promise((resolve)=>{
       setTimeout(() => {
         resolve("Comment Data Fetched")
       }, 4000);
    })
}


async function getBlogData(){
    try {
        console.log("Fetching Blog Data....");
       let postData = await fetchPostData();
       console.log(`${postData}`);
       let commentData = await fetchCommentData();
       console.log(`${commentData}`);
       //

      const [pData, cData] = await Promise.all([fetchPostData(), fetchCommentData()])
      console.log(`${pData} via Promise.all function`);
      console.log(`${cData} via Promise.all function`);
        
    } catch (error) {
        console.error('Error Fetching Blog Data', error);
    }
}

getBlogData();