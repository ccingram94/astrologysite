import SunIcon from './svg/SunIcon'
import MoonIcon from './svg/MoonIcon'
import MercuryIcon from './svg/MercuryIcon'

const IconDisplay = () => {
  return (
    <div style={styles.container}>
      <div style={styles.iconWrapper}>
        <SunIcon />
        <span style={styles.label}>Sun</span>
      </div>
      <div style={styles.iconWrapper}>
        <MoonIcon />
        <span style={styles.label}>Moon</span>
      </div>
      <div style={styles.iconWrapper}>
        <MercuryIcon />
        <span style={styles.label}>Mercury</span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '2rem',
    padding: '1rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.875rem',
    color: '#666',
  },
};

export default IconDisplay;
