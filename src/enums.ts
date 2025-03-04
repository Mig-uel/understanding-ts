// ENUMS

// enum Role {
//   Admin, // 0
//   Editor, // 1
//   Guest, // 2
// }

// enum Role {
//   Admin = 1, // 1
//   Editor, // 2
//   Guest, // 3
// }

enum Role {
  Admin = 'Admin',
  Editor = 'Editor',
  Guest = 'Guest',
}

let userRole: Role = Role.Admin

console.log(userRole)
