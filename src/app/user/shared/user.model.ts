export class User {
  constructor(public email?: string,
              public firstName?: string,
              public lastName?: string,
              public phoneNumber?: string,
              public id?: number,
              public password?: string,
              public username?: string,
              public authorities?: Role[],
              public enabled?: boolean,
              public userLocked?: boolean
) {
}
}

export class Role {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string) {
  }
}

