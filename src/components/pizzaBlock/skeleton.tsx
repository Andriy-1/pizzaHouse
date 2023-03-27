import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#d7d7d7"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="130" cy="130" r="130" />
    <rect x="0" y="316" rx="15" ry="15" width="280" height="86" />
    <rect x="0" y="276" rx="16" ry="16" width="280" height="28" />
    <rect x="0" y="424" rx="15" ry="15" width="91" height="27" />
    <rect x="125" y="416" rx="25" ry="25" width="155" height="46" />
  </ContentLoader>
);

export default Skeleton;
