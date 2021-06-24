import { UserEdit } from './views/UserEdit';
import { User } from "./models/User";


const user = User.buildUser({ name: 'NAME', age: 20});

const root = document.getElementById('root');

if (root) {
    const userEdit = new UserEdit(root, user);

    userEdit.render();

    console.log(userEdit);
} else {
    throw new Error('Root element not found')
}













// import { UserList } from './views/UserList';
// import { Collection } from './models/Collection';
// import { UserProps, User } from './models/User';

// const users = new Collection(
//     'http://localhost:3000/users',
//     (json: UserProps) => {
//       return User.buildUser(json);
//     }
//   );

//   users.on('change', () => {
//     const root = document.getElementById('root');
  
//     if (root) {
//       new UserList(root, users).render();
//     }
//   });
  
//   users.fetch();















// iki tane ekliyor
// const user = new User({ name: 'new record',age: 0 });
// user.save();