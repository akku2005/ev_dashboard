import React from 'react';
import backgroundImage from '../../assets/images/pageNotFound.png';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 Page not found</h1>
      <Link to="/admin/dashboard">
        <button style={styles.button}>
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "rgb(144,182,200)",
    position: 'relative',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: '60%', // Adjust size of the background image as needed
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', // Prevent background image from repeating
  },
  heading: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '40px 0',
    textAlign: 'center',
    display: 'flex',
    marginLeft:"10px",
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgb(20,230,80)',
    hover:"",
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '0 40px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    marginTop: '6rem', // Added margin top for spacing
  },
};

export default ErrorPage;
