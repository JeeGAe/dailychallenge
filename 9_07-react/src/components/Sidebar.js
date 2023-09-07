import './css/Sidebar.css';

function Sidebar({ open, children, rf }){

  return (
    <div className={`sidebar ${open ? 'open' : ''}`} ref={rf}>
      <div className="sidebar-menus">{children}</div>
    </div>
  )
}

export default Sidebar;