import classNames from 'classnames';
import styles from './start-page-component.module.scss';

export interface StartPageComponentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const StartPageComponent = ({ className }: StartPageComponentProps) => {
    return <div className={classNames(styles.root, className)}>StartPageComponent</div>;
};
