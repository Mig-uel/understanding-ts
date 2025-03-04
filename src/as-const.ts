// As Const
// a typescript feature tells typescript to be as narrow as possible when inferring the type

const roles = ['admin', 'guest', 'editor'] as const
roles.push('max')

export {}
