import { useLocation } from 'react-router-dom';
import styles from '../styles/settings.module.css';
const UserProfile = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className={styles.settings}>
      <div className={styles.imgContainer}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/560/560277.png"
          alt=""
        />
      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Email</div>
        <div className={styles.fieldValue}>{state.user.email}</div>
      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Name</div>
        <div className={styles.fieldValue}>{state.user.name}</div>
      </div>

      <div className={styles.btnGrp}>
        <button className={`button ${styles.saveBtn}`}>Add friend</button>
        <button className={`button ${styles.saveBtn}`}>Remove friend</button>
      </div>
    </div>
  );
};
export default UserProfile;
