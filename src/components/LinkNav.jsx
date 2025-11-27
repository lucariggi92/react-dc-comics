function LinkNav() {
 const menuItems = [
  { title: "Characters", active: true },
  { title: "Comics", active: false },
  { title: "Movies", active: false },
  { title: "TV", active: false },
  { title: "Games", active: false },
  { title: "Collectibles", active: false },
  { title: "Videos", active: false },
  { title: "Fans", active: false },
  { title: "News", active: false },
  { title: "Shop", active: false }
];
    return (
        <ul className="flex g-10">
            {menuItems.map((link, index) => <li key={index} className={link.active ===true? "active":""}><a href="">{link.title}</a></li>)}
        </ul>
    )
}
export default LinkNav;

