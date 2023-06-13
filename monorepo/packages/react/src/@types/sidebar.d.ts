type TSidebar = {
  items: Array<TSidebarItem>;
};

type TSidebarItem = {
  name: string;
  link: string;
  icon?: React.ReactNode;
  children?: Array<TSidebarItem>;
};
