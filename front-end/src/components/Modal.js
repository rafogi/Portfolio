import React from 'react'
import ReactDom from 'react-dom'



export default function Modal({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className="OVERLAY_STYLES" />
      <div className="MODAL_STYLES">
        <button className="Modal_button" onClick={onClose}>X</button>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}