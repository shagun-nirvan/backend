require('dotenv').config()
const express = require('express')
const app = express()
 const port = 3000

 const githubData ={
    "login": "hiteshchoudhary",
    "id": 11613311,
    "node_id": "MDQ6VXNlcjExNjEzMzEx",
    "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hiteshchoudhary",
    "html_url": "https://github.com/hiteshchoudhary",
    "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
    "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
    "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
    "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
    "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
    "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Hitesh Choudhary",
    "company": null,
    "blog": "https://www.youtube.com/c/HiteshChoudharydotcom",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
    "twitter_username": "hiteshdotcom",
    "public_repos": 105,
    "public_gists": 5,
    "followers": 42254,
    "following": 0,
    "created_at": "2015-03-23T13:03:25Z",
    "updated_at": "2025-04-02T10:53:15Z"
  }

app.get('/',(req,res)=>{
    res.send("hii everyone!!")
})

app.get('/twitter', (req,res)=>{
    res.send("twitter url")
})

app.get("/login", (req,res)=>{
    res.send("<h1>Please login on this page</h1>")
})

app.get("/youtube", (req,res)=>{
    res.send("<h2>njdnkj</h2>")
})

app.get('/github', (req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT,()=>{
    console.log(`example on port: ${port}`);
    
})