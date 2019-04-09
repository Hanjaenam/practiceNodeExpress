const HOME = '/';

const ALL_USER = '/user';
const FIND_USER = '/user/:id';
const NEW_USER = '/user/create';
const DELETE_USER = '/user/delete/:id';
const UPDATE_USER = '/user/update/:id';

const routes = {
  home: HOME,
  allUser: ALL_USER,
  findUser: FIND_USER,
  newUser: NEW_USER,
  deleteUser: DELETE_USER,
  updateUser: UPDATE_USER,
};

export default routes;
