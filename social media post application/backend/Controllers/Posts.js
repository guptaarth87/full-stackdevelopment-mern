const Posts = require('../Models/Posts');

exports.addPost = async (req, res)=>{
    const {
        username,
        post_title,
        post_description,
        post_tags
    } = req.body;

    if (!username || !post_title || !post_description || !post_tags ){
        return res.status(400).json({error:"Incomplete post details"})
    }

    try {
        const newPost= new Posts({
            username: username,
            post_title: post_title,
            post_description: post_description,
            post_tags: post_tags
        })

        const savedPost = await newPost.save();

        res.status(200).json({message:"post saved successfully"})

    }catch(err){
        res.status(500).json({error:err});
    }
}

exports.getPosts= async (req, res)=>{
    
    const search_text = req.params.searchtext;
    // console.log(search_text);
    // console.log("this function called");
    try{
        let query= {}

        //check if search_text is available

        if(search_text!=='None'){
            query={
                $or:[
                    {post_tags:search_text},
                    {post_title: {$regex:search_text, $options: 'i'} },
                    {post_description: {$regex:search_text, $options: 'i'} }
                ]
            }
        }

        //filtered data is to be sorted        
        const filteredData =  await Posts.find(query).sort({post_date_time: -1})

        res.status(200).json({
        message:"posts fetched successfully",
        posts: filteredData})
    }catch(err){
        res.status(500).json( {error:err })
    }
}


exports.updatePost= async (req, res)=>{

    const postId = req.params.post;

    const {
        post_title,
        post_description,
        post_tags
    } = req.body;

    try{
       if(!postId){
        res.status(400).json({error:' post id not provided'})
       }

       //Find post
       const existingPost = await Posts.findById(postID);

       if (!existingPost){
        res.status(400).json({error:' post id incorrect'})
       }
       
       if(post_title){
          existingPost.post_title= post_title;
       }
       if(post_description){
        existingPost.post_description= post_description;
     }
     if(post_tags){
        existingPost.post_tags= post_tags;
     }
    
     const updatedPost = await existingPost.save();

     res.status(200).json({message:"post updated successfully",updatedPost: updatedPost})

    }catch(err){
        res.status(500).json( {error:err })
    
    }
}


exports.deletePost = async (req, res)=>{
    const postId = req.params.post;
    try{

    
    if(!postId){
        res.status(400).json({error:' post id not provided'})
       }

       //Find post
       const existingPost = await Posts.findById(postID);

       if (!existingPost){
        res.status(400).json({error:' post id incorrect'})
       }
        
       const DeletedObj =await Posts.deleteOne({ "_id" : postId });
       
       res.status(200).json({message:"user deleted successfully"})


    }catch(err){
        res.status(500).json( {error:err })
    
    }
}