import React from 'react';
import {Link} from 'react-router-dom';

import './saveChanges.scss';

const SaveChanges = ({saveChanges, savePage}) => {
  return (
    <div className="save-changes">
      <Link to={savePage} onClick={saveChanges} className="save-changes__link">Save Changes</Link>
    </div>
  );
};

export default SaveChanges;
