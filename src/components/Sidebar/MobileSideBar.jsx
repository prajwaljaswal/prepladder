import React,{useState} from "react";
import { Button, Drawer } from 'antd';

const MobileSidebar = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
      };

      const onClose = () => {
        setOpen(false);
      };
  return (
    <div className="container">
          <Drawer  placement="left" className="drawer-background" onClose={onClose} open={open}>
          <div>
        <div>
          <div className="sidebar-element">
            <div>Image</div>
            <div>Dashboard</div>
          </div>
        </div>

        <div>
          <div className="sidebar-element">
            <div>Image</div>
            <div>Projects Management</div>
          </div>
        </div>
        <div>
          <div className="sidebar-element">
            <div>Image</div>
            <div>All projects</div>
          </div>
        </div>
      </div>
      </Drawer>

      <Button type="primary" className="menu-button" onClick={showDrawer}>
        Menu
      </Button>
    </div>
  );
};

export default MobileSidebar;
