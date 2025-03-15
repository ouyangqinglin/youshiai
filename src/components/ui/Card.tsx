'use client';

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
}

export default function Card({
  children,
  className = '',
  icon,
  title,
  description,
  footer,
}: CardProps) {
  return (
    <div className={`overflow-hidden rounded-xl bg-primary/5 dark:bg-primary/10 ${className}`}>
      {(icon || title || description) && (
        <div className="border-b p-6 dark:border-gray-800">
          {icon && <div className="mb-4">{icon}</div>}
          {title && (
            <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
          )}
          {description && <p className="text-gray-600 dark:text-gray-400">{description}</p>}
        </div>
      )}
      {children && <div className="p-6">{children}</div>}
      {footer && (
        <div className="border-t bg-gray-50 px-6 py-4 dark:border-gray-700 dark:bg-gray-800">
          {footer}
        </div>
      )}
    </div>
  );
}
