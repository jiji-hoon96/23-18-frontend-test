import styles from './Example.module.css';

interface ExampleProps {
  hidden?: boolean;
}

export const Example = ({ hidden = false }: ExampleProps) => {
  return <div className={hidden ? styles.hidden : ''}>Hello, World!</div>;
};
