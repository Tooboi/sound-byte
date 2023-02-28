import React from 'react';
import clsx from 'clsx';
import IconButton from './IconButton';
const Sidenav = ({ onSidebarHide, showSidebar }) => {
  return (
    <div className={clsx('fixed inset-y-0 left-0 bg-card w-full sm:w-20 xl:w-60 sm:flex flex-col z-10', showSidebar ? 'flex' : 'hidden')}>
      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-top">
          <IconButton icon="res-react-dash-logo" className="w-10 h-10" />
          <div className="block sm:hidden xl:block ml-2 font-bold text-xl text-white">React</div>
          <div className="flex-grow sm:hidden xl:block" />
          <IconButton icon="res-react-dash-sidebar-close" className="block sm:hidden" onClick={onSidebarHide} />
        </div>
      </div>
      <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col">
        <div className="w-full p-3 h-24 sm:h-20 xl:h-24 hidden sm:block flex-shrink-0">
          <div className="bg-sidebar-card-top rounded-xl w-full h-full flex items-center justify-start sm:justify-center xl:justify-start px-3 sm:px-0 xl:px-3">
            {/* <Icon path="res-react-dash-sidebar-card" className="w-9 h-9 " /> */}
            <div className="block sm:hidden xl:block ml-3">
              <div className="text-sm font-bold text-white">Sales House</div>
              <div className="text-sm">General Item</div>
            </div>
            <div className="block sm:hidden xl:block flex-grow" />
            {/* <Icon
              path="res-react-dash-sidebar-card-select"
              className="block sm:hidden xl:block w-5 h-5"
            /> */}
          </div>
        </div>
        </div>
    </div>
  );
};

export default Sidenav;
