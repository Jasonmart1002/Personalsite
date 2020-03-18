import React from 'react';
import '../styles/mainProjSection.css';

function MainProjSection() {
  return (
    <div className="card">
      <div className="row no-gutters align-items-center">
        
        <div className="col-md-8">
          <div className="card-body text-center">
            <h5 className="card-title">Main Project</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
        <div className="col-md-4">
          <img src="https://scontent-mia3-2.xx.fbcdn.net/v/t31.0-8/p960x960/17158945_606471952877226_3691054899361696034_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=QyuOng2lSg4AX-EEsOo&_nc_ht=scontent-mia3-2.xx&_nc_tp=6&oh=b7004c88280fbb3b805faa534acd513a&oe=5E917869" className="card-img" alt="/" />
        </div>
      </div>
    </div>
  );
}

export default MainProjSection;
