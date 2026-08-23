import React from 'react';

export function DeleteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://w3.org" 
      viewBox="0 0 16 16" 
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M5.75 2a.75.75 0 0 0-.75.75V4H2.75a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H11v-1.25A.75.75 0 0 0 10.25 2h-4.5ZM10 4V3.5H6V4h4ZM3.5 7a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v6.5a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 4.5 13.5V7ZM6 8.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5Zm3.75-.75a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75Z" />
    </svg>
  );
}
