import {serve} from 'bun';

serve({
    fetch(request){
        const url = new URL(request.url);
        if(url.pathname = '/'){
            return new Response('Hello, from Bun server', {status:200});
        } else if(url.pathname = '/node-server'){
            return new Response('Hello, from node server', {status:200});
        }else {
            return new Response('404, Error', {status:404});
        }
    },
    port:3000,
    hostname:'127.0.0.1'
})