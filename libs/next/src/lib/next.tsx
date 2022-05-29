import styles from './next.module.css';

/* eslint-disable-next-line */
export interface NextProps {}

export function Next(props: NextProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Next!</h1>
    </div>
  );
}

export default Next;
