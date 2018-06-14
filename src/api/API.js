import request from './request';
const Login = params => {
  return request.get('/user/login', params);
};
const GetUserInfo = () => {
  return request.get('/user/info');
};
const UpLoad = data => {
  return request('', data);
};
const DownLoad = data => {
  return request.get('', data);
};
const UpdateUserInfo = data => {
  return request.put('/user/info', data);
};

const SubmitForm = data => {
  return request.post('/formId', data);
};
export { DownLoad, UpLoad, UpdateUserInfo, Login, GetUserInfo, SubmitForm };
