function createPost() {
    return new Promise((resolve, reject) => {
      // code to create post here
      // ...
      const post = {title: 'New post', content: 'This is the post content'};
      resolve(post);
    });
  }
  
  const user = {
    username: 'yash',
    lastactivitytime: '28th of march'
  }
  
  function updateLastActivity() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        user.lastactivitytime = new Date().getTime();
        resolve(user.lastactivitytime);
      }, 1000);
    });
  }
  
  function updatePost() {
    Promise.all([createPost(), updateLastActivity()]).then(([createPostResolves, updateLastActivityResolves]) => {
      console.log(updateLastActivityResolves);
    }).catch((error) => {
      console.log(error);
    });
  }
  
  updatePost();
  