import React from 'react';
import { Twitter, Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

const SocialIcons = () => {
  return (
    <div className='col-lg-3 px-5'>
      <div className="d-inline-flex align-items-center py-2">
        <div className="me-3">
          <Twitter sx={{ color: '#ffad0d' }} />
        </div>
        <div className="me-3">
          <Facebook sx={{ color: '#ffad0d' }} />
        </div>
        <div className="me-3">
          <Instagram sx={{ color: '#ffad0d' }} />
        </div>
        <div className="me-3">
          <LinkedIn sx={{ color: '#ffad0d' }} />
        </div>
        <div>
          <YouTube sx={{ color: '#ffad0d' }} />
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
