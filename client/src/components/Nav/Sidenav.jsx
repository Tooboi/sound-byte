import React from 'react'
import clsx from 'clsx'
import IconButton from './IconButton'
const Sidenav = ({ onSidebarHide, showSidebar }) => {

    return (
        <div
      className={clsx(
        'fixed inset-y-0 left-0 bg-card w-full sm:w-20 xl:w-60 sm:flex flex-col z-10',
        showSidebar ? 'flex' : 'hidden',
      )}
    >
        <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-top">
          <IconButton icon="res-react-dash-logo" className="w-10 h-10" />
          <div className="block sm:hidden xl:block ml-2 font-bold text-xl text-white">
            React
          </div>
          <div className="flex-grow sm:hidden xl:block" />
          <IconButton
            icon="res-react-dash-sidebar-close"
            className="block sm:hidden"
            onClick={onSidebarHide}
          />
        </div>
      </div>
    </div>
    )
}

export default Sidenav