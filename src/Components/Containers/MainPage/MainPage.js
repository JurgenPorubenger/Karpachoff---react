import React from 'react';
import SubHeader from './SubHeader/index';
// eslint-disable-next-line import/extensions
import ModuleTasks from './SectionModuleTasks/index';

function MainPage() {
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <div className="MainPage">
      <SubHeader />
      <ModuleTasks />
    </div>
  );
}

export default MainPage;
