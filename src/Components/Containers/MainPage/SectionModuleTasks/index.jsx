import React from 'react';
import './index.scss';
import TaskItem from './TaskItem/TaskItem';

class ModuleTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modules:
      [
        { num: 1, checked: false, text: 'Сформировать эмоциональную привязанность с ребенком' },
        { num: 2, checked: false, text: 'Объяснить отцу и\или другим членам семьи, которые проживают с вами о предстоящем этапе в вашей семье' },
        { num: 3, checked: false, text: 'Сформировать эмоциональную привязанность с ребенком, объяснить отцу и\\или другим членами семьи, которые проживают с вами о предстоящем этапе в вашей семье. Сформировать эмоциональную привязанность с ребенком, объяснить отцу и\или другим членами семьи, которые проживают с вами о предстоящем этапе в вашей семье.Сформировать эмоциональную привязанность с ребенком ' },
        { num: 4, checked: false, text: 'Объяснить отцу и\\или другим членами семьи, которые проживают с вами о предстоящем этапе в вашей семье' },
      ],
    };
  }

  componentDidMount() {
    console.log('didmount');
  }

  render() {
    const { modules } = this.state;
    console.log('render');
    return (
      <div className="ModuleTasks">
        {
        modules.map((el, i) => <TaskItem modules={el} key={i} />)
        }
      </div>
    );
  }
}
export default ModuleTasks;
