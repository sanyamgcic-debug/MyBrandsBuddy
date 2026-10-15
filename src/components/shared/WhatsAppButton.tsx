import React from 'react';

export interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
}

const DEFAULT_PHONE = '919971234965';
const DEFAULT_MESSAGE =
  'Hi MyBrandsBuddy, I would like to know more about your digital marketing services.';

export function WhatsAppButton({
  phoneNumber = DEFAULT_PHONE,
  message = DEFAULT_MESSAGE,
  className = '',
}: WhatsAppButtonProps) {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message);
  const href = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with MyBrandsBuddy on WhatsApp"
      title="Chat on WhatsApp"
      className={`floating-whatsapp ${className}`.trim()}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="whatsapp-svg"
      >
        <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.476-.15-.677.15-.2.301-.777.978-.952 1.179-.175.2-.351.226-.652.075s-1.27-.468-2.42-1.493c-.894-.798-1.498-1.784-1.674-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.526-.075-.15-.677-1.631-.927-2.233-.244-.587-.492-.507-.677-.517l-.577-.01c-.2 0-.526.075-.802.376-.276.301-1.053 1.029-1.053 2.509s1.078 2.909 1.229 3.11c.15.201 2.122 3.24 5.141 4.544.718.31 1.278.496 1.716.635.722.23 1.378.197 1.898.12.578-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.352zM12.04 2C6.544 2 2.08 6.464 2.08 11.96c0 1.758.46 3.475 1.334 4.989L2 22l5.228-1.37a9.923 9.923 0 0 0 4.812 1.33h.004c5.494 0 9.96-4.464 9.96-9.96.002-2.66-1.031-5.161-2.915-7.045A9.907 9.907 0 0 0 12.04 2z" />
      </svg>
    </a>
  );
}

export default WhatsAppButton;
