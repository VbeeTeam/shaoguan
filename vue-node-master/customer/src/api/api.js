/**
 * api接口统一管理
 */

 import { get, post, put, del } from './http'

 //列表查询
 export const apiList = p => get('/list',p);
 //新增用户
 export const apiAdd = p => post('/add',p);
 //删除用户
 export const apiDelete = p => del('/delete',p);
 //查询当前用户
 export const apiSearch = p => get('/list/detail', p)
 //编辑用户
 export const apiEdit = p => put('/edit',p);