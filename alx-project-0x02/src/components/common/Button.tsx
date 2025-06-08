import { ButtonProps } from '../../interfaces';

const sizeClasses = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

export default function Button({ size, shape, label }: ButtonProps) {
  return (
    <button className={`bg-blue-500 text-white ${sizeClasses[size]} ${shape}`}>
      {label}
    </button>
  );
}
