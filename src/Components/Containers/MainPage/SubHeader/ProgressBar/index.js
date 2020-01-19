import React from 'react';
import './index.scss';

function progressBar(props) {
  return (
    <div className="progress_bar">
      <div className="range">
          <div className="content_range" style={{width:'80%'}} />
          <div className="left_range">
            <p>
                10<span> тем <br/> всего</span>
            </p>
        </div>
        <div className="right_range" style={{left:'80%'}} >
            <p>
                8<span> тем <br/> выполнено</span>
            </p>
        </div>
      </div>
      {/* <div className="text_range">ffff</div> */}
    </div>
  );
}

export default progressBar;
