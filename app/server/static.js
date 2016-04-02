import indexHtml from 'raw!static/index.html';

export default function *(next){
  if(this.path.indexOf('api') === -1){
    this.body = indexHtml;
  }else{
    yield next;
  }
}