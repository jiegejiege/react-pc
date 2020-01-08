import {get, post} from './instance';

//请求轮播图
export function getBanner() {
  return get('/banner');
}
export function getReco() {
  return get('/top/playlist',{limit:9});
}
//获取精品歌单
export function getNewSong() {
  return get('/top/playlist/highquality',{limit:9});
}

//获取歌单列表
export function getAlbumDetail(id) {
  return get('/playlist/detail',{id:id});
}
//获取热门话题

export function getHotComment() {
  return get('/hot/topic',{limit:10});
}
//获取歌曲URL

export function getSongUrl(id){
  return get('/song/url',{id:id})
}
//获取歌曲详情
export function getSongDetail(id){
  return get('/song/detail',{ids:id})
}