const steps = {
  welcome: 0,
  roles: 1,
  invites: 2,
  dxp: 3,
};

const rolesId = {
  admin: 1,
  creator: 2,
  watcher: 3
}

const roles = [
  {
    id: 1,
    name: "Administrator",
    icon: "TDB",
  },
  {
    id: 2,
    name: "Ticket Creator",
    icon: "TDB",
  },
  {
    id: 3,
    name: "Ticket Watcher",
    icon: "TDB",
  },
];

export { steps, roles, rolesId };
