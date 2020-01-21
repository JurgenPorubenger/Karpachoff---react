import React from 'react';
import SubHeader from './SectionSubHeader/index';
import ModuleTasks from './SectionModuleTasks/index';
import BreadCrumbs from './SectionBreadCrumbs/index';
import TrainReact from './TrainReact/Main';

function MainPage() {
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <div className="MainPage">
      <SubHeader />
      <BreadCrumbs />
      <TrainReact />
      <ModuleTasks />
    </div>
  );
}

export default MainPage;
