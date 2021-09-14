import { PtagProps } from './Ptag.props';
import styles from './Ptag.module.css';
import cn from 'classnames';

export const Ptag = ({ size = 'default', children, className, ...props }: PtagProps): JSX.Element => {
	return (

		<p className={cn(styles.button, className, {
			[styles.small]: size == 'small',
			[styles.big]: size == 'big'
		})}
			{...props}
		>
			{children}
		</p>

	);
}