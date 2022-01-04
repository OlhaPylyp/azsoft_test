import PropTypes from 'prop-types';
import { React } from 'react';
import { createUseStyles } from 'react-jss';
// import styles from '../Components/Section.module.css';
const useStyles = createUseStyles({
  title: {
    marginBottom: 30,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
    letterSpacing: 0,
    color: 'rgb(0, 0, 0)',
    fontWeight: 'bold',
  },
  container: {
    width: 600,
    backgroundColor: 'rgb(254, 254, 255)',
    display: 'flex',
    boxShadow:
      '0 1 3 rgb(0 0 0 / 12%), 0 1 1 rgb(0 0 0 / 20%), 0 2 1 rgb(0 0 0 / 40%)',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});
const Section = ({ title, children }) => {
  const styles = useStyles();
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};
Section.defaultProps = {
  title: '',
};
Section.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Section;
