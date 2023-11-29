import React, { useState } from 'react';
import { Typography } from '../Typography';

import clsx from 'clsx';
import './DisplayText.css';

export type DisplayTextProps = {
  text: string;
  characterLimit?: number;
  expandable?: boolean
}

export function DisplayText({ text, characterLimit = 150, expandable }: DisplayTextProps) {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      {expandable && (
        <div className='collapsible'>
          <div className={clsx({ ['text']: !showMore, ['open']: showMore })}>
            <Typography>{text.slice(0, characterLimit)}</Typography>
          </div>
          <div
            className={
              clsx({
                ['text']: showMore,
                ['open']: !showMore
              })
            }
          >
            <Typography>{text}</Typography>
          </div>
          <span
            className='link'
            onClick={() => setShowMore(currentValue => !currentValue)}
          >
            <Typography color='yellow'>
              {showMore ? 'View more' : 'View less'}
            </Typography>
          </span>
          <div
            className={
              clsx({
                ['text']: showMore,
                ['open']: !showMore
              })
            }
          >
          </div>
        </div>
      )}
      {!expandable && <Typography>{text}</Typography>}
    </>
  );
}
