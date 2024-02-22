
import styles from '../css_modules/Connect.module.css'; 

function Connect  () {

  return (
    <div className={styles.connect}>
      <h2>Let's connect</h2>
      <h3>Contact our support team or make an appointment with our experts.</h3>
    <form className={styles.needsValidation} action="https://getform.io/f/66a63e8b-0275-4534-a3e5-a6265ea25cdf" method="POST" name="generativeai">
      <input type="hidden" name="_gotcha" style={{ display: 'none !important' }} />
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="fullname2" className={styles.formRow}>Full Name<span className={styles.asterik }>*</span></label>
          <input type="text" className={styles.formControl} id="fullname2" name="fullname" required />
          <div className={styles.invalidFeedback}>Please provide your name</div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email2" className={styles.formRow}>Email<span className={styles.asterik}>*</span></label>
          <input type="email" className={styles.formControl} id="email2" name="email" required />
          <div className={styles.invalidFeedback}>Please provide your email</div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="mobile2" className={styles.formRow}>Contact Number<span className={styles.asterik}>*</span></label>
          <input type="number" className={styles.formControl} id="mobile2" name="mobile" required pattern="/^-?\d+\.?\d*$/" onKeyPress={(e) => { if (e.target.value.length === 10) e.preventDefault(); }} />
          <div className={styles.invalidFeedback}>Please provide your contact Number</div>
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="subject2" className={styles.formRow}>Subject<span className={styles.asterik}>*</span></label>
          <input type="text" className={styles.formControl} id="subject2" name="subject" required />
          <div className={styles.invalidFeedback}>Please provide Subject</div>
        </div>
        </div>
        <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="description2" className={styles.formRow}>Message<span className={styles.asterik}>*</span></label>
          <textarea rows="5" className={styles.formControl} id={styles.description2} name="description" required></textarea>
          <div className={styles.invalidFeedback}>Please provide your Message</div>
        </div>
      </div>
      <input type="hidden" name="g-recaptcha-response" />
      <div className={styles.submitButton}>
        <input type="submit" value="Submit form" />
      </div>
    </form>
    </div>
  );
};

export default Connect;
