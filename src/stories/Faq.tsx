import React from 'react';
import './Faq.css';

interface FaqProps {
  ttl?: string;
  txt?: string;
  backgroundColor?: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Faq = ({ ttl, txt, ...props }: FaqProps) => {
  return (
    <dl className="bl_faq" {...props}>
      <dt className="bl_faq_q">
        <span className="bl_faq_icon">Q</span>
        <span className="bl_faq_q_txt">{ttl}</span>
      </dt>
      <dd className="bl_faq_a">
        <span className="bl_faq_icon">A</span>
        <div className="bl_faq_a_body">
          <div className="bl_faq_a_txt">{txt}</div>
        </div>
      </dd>
    </dl>
  );
};
