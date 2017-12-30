const button = document.createElement('button');
button.innerText = 'Click Me';
button.onclick = ()=>{
    //load imageViewer.js only after user clicks on button --performance reasons
    //system.import is an async call
    //system.import call creates bundle.js and 0.bundle.js--code splitting
    System.import('./image_viewer').then((module)=>{
        console.log(module);
    })
}

document.body.appendChild(button);