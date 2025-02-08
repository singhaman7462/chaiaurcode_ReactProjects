//Basic js function to make it work like react
//Function that takes reactElement from user and renders it in container
customRender=function(reactElement,mainContainer){
    const type=reactElement.type;
    const attributes=reactElement.props;
    const newElement=document.createElement(type);

    //For in loop can be used readily without using entries 
    Object.entries(attributes).forEach(([key,value])=>{
        newElement.setAttribute(key, value);
    });
    const child=reactElement.children;
    if(typeof(child)==='string')
    newElement.innerHTML=child;
    mainContainer.appendChild(newElement);
}

//For my custom react element should be created like this
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_cblank'
    },
    children:'Click me to visit Google'
}
const mainContainer=document.getElementById('root');

customRender(reactElement,mainContainer);