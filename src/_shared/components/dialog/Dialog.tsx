import React, { PropsWithChildren } from 'react';
import './Dialog.scss';

export interface DialogProps {
  onClose: () => void;
}

export function Dialog({ onClose, children }: PropsWithChildren<DialogProps>): JSX.Element {
  return (
    <div className='dialog'>
      <button className='dialog__close' onClick={onClose} type='button' />
      {children}
    </div>
  );
}
