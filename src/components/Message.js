import { useEffect, useState } from 'react';

function Message({ size, featherCount }) {
  const [sizeSelection, setSizeSelection] = useState();

  useEffect(() => {
    console.log('PictureDisplay size', size);
    let cname = '';
    switch (size) {
      case 's':
        cname = 'small';
        break;
      case 'm':
        cname = 'medium';
        break;
      case 'l':
        cname = 'large';
        break;
      case 'xl':
        cname = 'xlarge';
        break;
      default:
        cname = 'small';
        break;
    }
    setSizeSelection(cname);
  }, [size]);

  return (
    <div className={`message ${sizeSelection}`}>
      {!featherCount
        ? 'Oh my your bird is naked!'
        : `Your bird has ${featherCount} feathers!`}
    </div>
  );
}

export default Message;
