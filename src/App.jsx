import { User } from './User';

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div className={styles.wrapper}>
       <User />
    </div>
 )
}