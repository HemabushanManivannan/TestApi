const Api_URL = 'https://youtube.googleapis.com/youtube/v3/search?channelType=any&videoType=any&key=[AIzaSyDG89X09GpZue3We9KqRf03fkIippOtD4U]'



//Create functionality to Uploaded videos and system-generated playlists
const upload = document.getElementById('upload')
const Fetch = async (xxyy) => {

    const response = await fetch(`${Api_URL} HTTP/1.1`, {
        Authorization: Bearer[AIzaSyDG89X09GpZue3We9KqRf03fkIippOtD4U]
    Accept: application / json
    Content- Type: application / json
  } );};






// method: 'Post',
//     body: JSON.stringify(xxyy),
//         Headers: { 'Content-Type': 'application/json;charset:UTF=8' }

   


const overlay = document.getElementById('overlay');

overlay.addEventListener('click', () => {
    closeForm();
});

const closeForm = () => {
    overlay.style.display = 'none';
  }




  postForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    let data = {};
  
    Array.from(e.target.elements).forEach((element) => {
      if (element.nodeName === 'INPUT') {
        data[element.name] = element.value;
      }
    });
  
    createPost(data);
  
    closeForm();
  });
  
  postForm.addEventListener('click', (e) => {
    e.stopPropagation();
  
  });


const responseJson = response.json();

responseJson.forEach((uploadVideo) => {
    const { Video, content } = uploadVideo;
    const PostRow = document.createElement('tr')
    PostRow.VideoFormat = id;

    const VideoUploaded = document.createElement('td');
    td1.innertext = Video;

    const Videocontent = document.createElement('td');
    td2.Videocontent = content;

    PostRow.append(VideoUploaded, Videocontent);

    upload.appendChild(PostRow)

    const CreateVideo = document.createElement('button');
    CreateVideo.setAttribute('class', 'btn btn-danger m-1');
    CreateVideo.innerText = 'De';


});


};


//Create functionality to Retrieve Subscriptions and user activity.
const Fetch = async (zzz) => {
    const response = await fetch(`${Api_URL}/PUT`,
        {
            method: 'PUT',
            body: JSON.stringify(zzz),
            Headers: { 'Content-Type': 'application/json;charset:UTF=8' }
        }
    );
    const responseJson = response.json();
    console.log(responseJson);
};



const Fetch = async (PostInput) => {
    const response = await fetch(`${Api_URL}/Post`,
        {
            method: 'Post',
            body: JSON.stringify(PostInput),
            Headers: { 'Content-Type': 'application/json;charset:UTF=8' }
        }
    );
    const responseJson = response.json();
    console.log(responseJson);
};




window.addEventListener('DOMContententloaded', () => {
    createPost({
        https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.channels.list?
            part = contentDetails
            & mine=true




    })



})


//Create functionality for topic-based searching and search for playlists or channels


Create functionality to Retrieve channel information



Create functionality to create and update a playlist.

