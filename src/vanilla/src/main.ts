const video: HTMLVideoElement | null = document.querySelector("#sample") ?? null;


if(video){
    console.log(video.playbackRate);
}

setInterval(()=>{
    if(video){
    }
},1000)

export {}